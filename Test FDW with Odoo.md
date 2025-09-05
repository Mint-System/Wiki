---
kind: tutorial
section: dev
---
# Test FDW with Odoo

The following script syncs the `res_users` table between two Odoo databases. There is the `16.0` and the `sozialinfo` database. Both dbs have been initialized.


Run this script on the `16.0` database. It will setup the FDW connection and add the necessary triggers to keep the tables in sync.

```sql
-- Create the postgres_fdw extension
CREATE EXTENSION IF NOT EXISTS postgres_fdw;

-- Create a server object
CREATE SERVER sozialinfo_server FOREIGN DATA WRAPPER postgres_fdw OPTIONS (
    host 'localhost',
    port '5432',
    dbname 'sozialinfo'
);

-- Create a user mapping
CREATE USER MAPPING FOR CURRENT_USER SERVER sozialinfo_server OPTIONS (
    user 'odoo',
    password 'odoo'
);

-- Create a foreign table for the res_users table
CREATE FOREIGN TABLE sozialinfo_res_users (
    id integer NOT NULL,
    company_id integer NOT NULL,
    partner_id integer NOT NULL,
    active boolean DEFAULT true,
    create_date timestamp without time zone,
    login character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default",
    action_id integer,
    create_uid integer,
    write_uid integer,
    signature text COLLATE pg_catalog."default",
    share boolean,
    write_date timestamp without time zone,
    totp_secret character varying COLLATE pg_catalog."default"
)
SERVER sozialinfo_server
OPTIONS (
    schema_name 'public',
    table_name 'res_users'
);

-- Create a trigger function to insert into the remote table
CREATE OR REPLACE FUNCTION insert_into_sozialinfo_res_users()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO sozialinfo_res_users (id, company_id, partner_id, active, create_date, login, password, action_id, create_uid, write_uid, signature, share, write_date, totp_secret)
    VALUES (NEW.id, NEW.company_id, NEW.partner_id, NEW.active, NEW.create_date, NEW.login, NEW.password, NEW.action_id, NEW.create_uid, NEW.write_uid, NEW.signature, NEW.share, NEW.write_date, NEW.totp_secret);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the insert_into_sozialinfo_res_users function
CREATE TRIGGER insert_into_sozialinfo_res_users_trigger
AFTER INSERT ON res_users
FOR EACH ROW EXECUTE PROCEDURE insert_into_sozialinfo_res_users();

-- Create a trigger function to update the remote table
CREATE OR REPLACE FUNCTION update_sozialinfo_res_users()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE sozialinfo_res_users
    SET company_id = NEW.company_id,
        partner_id = NEW.partner_id,
        active = NEW.active,
        create_date = NEW.create_date,
        login = NEW.login,
        password = NEW.password,
        action_id = NEW.action_id,
        create_uid = NEW.create_uid,
        write_uid = NEW.write_uid,
        signature = NEW.signature,
        share = NEW.share,
        write_date = NEW.write_date,
        totp_secret = NEW.totp_secret
    WHERE id = NEW.id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the update_sozialinfo_res_users function
CREATE TRIGGER update_sozialinfo_res_users_trigger
AFTER UPDATE ON res_users
FOR EACH ROW EXECUTE PROCEDURE update_sozialinfo_res_users();

-- Create a trigger function to delete from the remote table
CREATE OR REPLACE FUNCTION delete_from_sozialinfo_res_users()
RETURNS TRIGGER AS $$
BEGIN
    DELETE FROM sozialinfo_res_users WHERE id = OLD.id;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the delete_from_sozialinfo_res_users function
CREATE TRIGGER delete_from_sozialinfo_res_users_trigger
AFTER DELETE ON res_users
FOR EACH ROW EXECUTE PROCEDURE delete_from_sozialinfo_res_users();

-- Create a trigger function to insert into the local table
CREATE OR REPLACE FUNCTION insert_into_local_res_users()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO res_users (id, company_id, partner_id, active, create_date, login, password, action_id, create_uid, write_uid, signature, share, write_date, totp_secret)
    VALUES (NEW.id, NEW.company_id, NEW.partner_id, NEW.active, NEW.create_date, NEW.login, NEW.password, NEW.action_id, NEW.create_uid, NEW.write_uid, NEW.signature, NEW.share, NEW.write_date, NEW.totp_secret)
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the insert_into_local_res_users function
CREATE TRIGGER insert_into_local_res_users_trigger
AFTER INSERT ON sozialinfo_res_users
FOR EACH ROW EXECUTE PROCEDURE insert_into_local_res_users();

-- Create a trigger function to update the local table
CREATE OR REPLACE FUNCTION update_local_res_users()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE res_users
    SET company_id = NEW.company_id,
        partner_id = NEW.partner_id,
        active = NEW.active,
        create_date = NEW.create_date,
        login = NEW.login,
        password = NEW.password,
        action_id = NEW.action_id,
        create_uid = NEW.create_uid,
        write_uid = NEW.write_uid,
        signature = NEW.signature,
        share = NEW.share,
        write_date = NEW.write_date,
        totp_secret = NEW.totp_secret
    WHERE id = NEW.id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the update_local_res_users function
CREATE TRIGGER update_local_res_users_trigger
AFTER UPDATE ON sozialinfo_res_users
FOR EACH ROW EXECUTE PROCEDURE update_local_res_users();

-- Create a trigger function to delete from the local table
CREATE OR REPLACE FUNCTION delete_from_local_res_users()
RETURNS TRIGGER AS $$
BEGIN
    DELETE FROM res_users WHERE id = OLD.id;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the delete_from_local_res_users function
CREATE TRIGGER delete_from_local_res_users_trigger
AFTER DELETE ON sozialinfo_res_users
FOR EACH ROW EXECUTE PROCEDURE delete_from_local_res_users();
```