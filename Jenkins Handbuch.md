---
tags:
- Definition
---
# Jenkins Handbuch

## Node mit Jenkins builden

[[Odoo Build]] Projekt auschecken.

Jenkins starten.

```
task start cd
```

Einloggen und Plugins *Docker* und *Docker Pipeline* via `/manage` installieren.

Via `/manage` eine Cloud *Docker* mit Option *Docker* hinzufügen. Als Uri `tcp://dind:2375` verwenden und die Optionen *Enabled* und *Expose DOCKER_HOST* aktivieren.

Anschliessend ein *Docker Agent template* inzufügen mit Label `docker-agent`, Name `Docker Agent` und Docker Image `jenkins/agent`.

Erstellen neue Pipeline `Node` mit diesem Script:

```groovy
pipeline {
    agent {
        docker { image 'node:18.16.0-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
```

