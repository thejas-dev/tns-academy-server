
/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:20.18.0-alpine3.20' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
    }
}
