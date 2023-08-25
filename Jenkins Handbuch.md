---
tags:
- Definition
---
# Jenkins Handbuch

## Jenkinks mit Docker Agent bereitstellen

[[Odoo Build]] Projekt auschecken.

Jenkins starten.

```
task start cd
```

Einloggen und Plugins *docker* und *Docker Pipeline* via `/manage` installieren.

Via `/manage` eine Cloud *Docker* mit Option *Docker* hinzufügen. Als *Docker Host URI* `tcp://dind:2375` verwenden und die Optionen *Enabled* und *Expose DOCKER_HOST* aktivieren.

Anschliessend ein *Docker Agent template* hinzufügen mit Label `docker-agent`, Enabled ,Name `Docker Agent` und Docker Image `jenkins/agent`.

## SSH-Schlüssel einrichten

Navigieren Sie nach *Dashboard > Jenkins verwalten > Zugangsdaten > System > Globale Zugangsdaten* und fügen Sie einen Eintrag hinzu:

ID: `jenkins-ssh-credentials`\
Username: `bot-mintsys`

Fügen Sie den Inhalt des privaten Schlüssels hinzu.

## Node mit Jenkins bauen

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

Mit *Jetzt bauen* den Build-Prozess starten

## Git mit Submodules auschecken

Installieren Sie das Plugin *SSH Agent*.

Erstellen Sie eine neue Pipeline *Git*.

Das Repo <git@github.com:sozialinfo/odoo-cd.git> enthält Submodule und wird wie folgt geklont:

```groovy
pipeline {
	agent any
    stages {
        stage('Checkout') {
	        steps {
		        checkout scmGit(
		            branches: [[name: 'main']],
		            userRemoteConfigs: [[
		                credentialsId:  'jenkins-ssh-credentials',
		                url: 'https://github.com/sozialinfo/odoo-cd'
		            ]])
				sshagent(credentials: ['jenkins-ssh-credentials']) {
			      sh '''
                      [ -d ~/.ssh ] || mkdir ~/.ssh && chmod 0700 ~/.ssh
                      ssh-keyscan -t rsa,dsa github.com >> ~/.ssh/known_hosts
                      git submodule update --init
                  '''
				}
		    }
	    }
	}
	post {
        always {
            archiveArtifacts artifacts: '**/*'
        }
    }
}
```

## Odoo mit Jenkins bauen

Die Artefakte aus [[#Git mit Submodules auschecken]] werden kopiert und auf einem Image bereitgestellt.

```groovy
def withDockerNetwork(Closure inner) {
    try {
        networkId = UUID.randomUUID().toString()
        sh "docker network create ${networkId}"
        inner.call(networkId)
    } finally {
        sh "docker network rm ${networkId}"
    }
}

node {
    withDockerNetwork{ n ->
	   docker.image('postgres:12').withRun("--network ${n} --name db -e POSTGRESQL_PASSWORD=postgres") { c->
	      docker.image('odoo:16').inside("--network ${n}") {
	         // do something with host "sidecar"
	         echo "Odoo"
	      }
	   }
	}
}
```

Source: <https://issues.jenkins.io/browse/JENKINS-49567>