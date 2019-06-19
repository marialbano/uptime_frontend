#!/bin/bash

repos=( 
    "."
)

pullRepoGit(){

    echo ""
    echo "Getting latest for" ${#repos[@]} "repositories using pull --rebase"

    for repo in "${repos[@]}"
    do
        echo ""
        echo "****** Getting latest for" ${repo} "******"
        cd "${repo}"
        git=$(git status)
        if [[ $git =~ "nothing to commit" ]];
        then
            echo "Repositorie is up to date."
        elif [ $? == 0 ]
        then
            echo $git
        else
            echo "não atualizado"
            exit 1
        fi
    done
}

findFiles(){

    files=(
        "app.js"
        "template/layout.ejs"
        "model"
        "static"
        "node_modules"
        "routes"
    )
    for repo in "${repos[@]}"
    do
        cd "${repo}"
        for file in "${files[@]}"
        do
            if [ -e "$file" ]; 
            then
                echo "$file ok"
            else
                echo "$file doesn't exist"
                exit 1
            fi
        done
    done
}

testAPI(){
    URL="http://internal-systems.ml.com/uptime-test/ping"
    testURL=$(curl -s $URL);
    if [[ $testURL == "pong" ]];
    then
        echo "API OK"
    else
        echo "API is not ok"
        exit 1
    fi
}

testDB(){
    DBNAME="isupttst"
    DBEXISTS=$( mysql -urecardoso -pKei-110891 -hisuptime01.master.mlaws.com -P6612 -e "SHOW DATABASES LIKE '"$DBNAME"';" | grep "$DBNAME" > /dev/null; echo "$?")
    if [ $DBEXISTS -eq 0 ];then
        echo "$DBNAME Ok"
    else
        echo "database fail"
        exit 1
    fi
}

echo "***** verifing if Git is up to date *****"
pullRepoGit
echo "***** verifing important files and directories is ok *****"
findFiles
echo "***** testing API *****"
testAPI
echo "***** testing Data Base *****"
testDB