# Nextcloud: OwnCloud Console

This is the nextcloud command line tool.

## Usage

Show help 
`docker exec -u www-data nextcloud01 php occ --help`

Get system config  
`docker exec -u www-data nextcloud01 php occ config:system:get overwrite.cli.url`

Set system config  
`docker exec -u www-data nextcloud01 php occ config:system:set overwrite.cli.url --value="https://cloud.example.com"`
