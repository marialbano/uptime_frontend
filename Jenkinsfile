def remote = [:]
remote.name = "uptime"
remote.allowAnyHosts = true

node { 

    withCredentials([sshUserPrivateKey(credentialsId: '0c4785fe-9668-455d-9951-2ed9f1526283', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
        remote.user = userName
        remote.identityFile = identity

        stage('Build application') {
            git url: 'git@github.com:marialbano/uptime_frontend.git'
            checkout scm
            sh "sudo docker build -t uptime:latest ${WORKSPACE}" 
            sh "sudo docker run -d -p 3000:3000 --name uptime-test uptime:latest "

        }

        stage('Test application') {

            sh "curl -H 'Host: uptime.adminml.com' localhost" 
            sh "docker exec uptime-test bash /uptime-test/uptimeTest.sh" 
            sh "sudo docker rm -f uptime-test"
        }
    }
}
