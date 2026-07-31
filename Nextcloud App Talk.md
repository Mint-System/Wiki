---
title: Nextcloud App Talk
kind: reference
section: communication
website: https://nextcloud.com/talk/
---

## TURN-Server

Für den effizienten Betrieb braucht es einen TURN-Server wie [[TURN Mint System]].

```mermaid
sequenceDiagram
  participant A as Browser A
  participant NC as Nextcloud Talk<br/>cloud.mint-system.ch
  participant TS as coturn<br/>turn.mint-system.ch
  participant B as Browser B

  A->>NC: Join call (HTTPS/WSS signaling)
  B->>NC: Join call (HTTPS/WSS signaling)
  NC->>NC: Generate time-limited TURN creds<br/>(HMAC with shared static-auth-secret)
  NC-->>A: TURN URL + username/password
  NC-->>B: TURN URL + username/password
  A->>TS: STUN/TURN allocate request
  B->>TS: STUN/TURN allocate request
  Note over A,B: ICE tries direct P2P first
  alt Direct path blocked by NAT/firewall
    A->>TS: Media relay (UDP)
    TS->>B: Media relay (UDP)
  end
  A->>NC: ICE candidates, call teardown
  B->>NC: ICE candidates, call teardown
```

- **WSS** – WebSocket Secure – verschlüsselte WebSocket-Verbindung für das Signaling (Anrufaufbau, Steuerdaten).
- **STUN** – Session Traversal Utilities for NAT – Server verrät dem Client seine öffentliche IP/Port.
- **TURN** – Traversal Using Relays around NAT – Server leitet Medienverkehr weiter, wenn direkte Verbindung nicht klappt.
- **NAT** – Network Address Translation – Mechanismus, mit dem sich mehrere Geräte eine öffentliche IP teilen.
- **ICE** – Interactive Connectivity Establishment – Verfahren, das die beste Verbindungsmethode zwischen zwei Peers findet.
- **UDP** – User Datagram Protocol – schnelles, verbindungsloses Transportprotokoll für Echtzeit-Medien.