---
tags:
  - Handbuch
kind:
  - howto
section: product
---

# Jenkins Handbuch

[[TOC]]

## Jenkinks mit Docker Agent bereitstellen

[[Odoo Build]] Projekt auschecken.

Jenkins starten.

```bash
task start cd
```

Einloggen und Plugins _docker_ und _Docker Pipeline_ via `/manage` installieren.

Via `/manage` eine Cloud _docker_ mit Option _Docker_ hinzufügen. Als _Docker Host URI_ `tcp://dind:2375` verwenden und die Optionen _Enabled_ und _Expose DOCKER_HOST_ aktivieren.

Anschliessend ein _Docker Agent template_ hinzufügen mit Label `jenkins-agent`, Enabled, Name `agent` und Docker Image `jenkins/agent`.

## SSH-Schlüssel einrichten

Navigieren Sie nach _Dashboard > Jenkins verwalten > Zugangsdaten > System > Globale Zugangsdaten_ und fügen Sie einen Eintrag hinzu:

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
        stage('test') {
            steps {
                sh 'node --version'
            }
        }
        stage('log') {
            steps {
                script {
                    currentBuild.description = """Build url: <a href="${BUILD_URL}">Link</a>"""
                }
            }
        }
    }
}
```

Mit _Jetzt bauen_ den Build-Prozess starten

## Git mit Submodules auschecken

Installieren Sie das Plugin _SSH Agent_.

Erstellen Sie eine neue Pipeline _Git_.

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

## Auth OIDC konfigurieren

<https://www.epiclabs.io/configure-jenkins-azure-authentication-connect/>

User name field name: preferred_username

Full name field name: name

Email field name: email

## GitHub Webhook einrichten

Neuer Eintrag unter <https://github.com/ORG/REPO/settings/hooks> mit Url <https://jenkins.example.com/github-webhook/> erstellen.
