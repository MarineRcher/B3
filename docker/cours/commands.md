mdp : isipassword

ssh -p 9051 ubuntu@isitech.tancou.fr

`docker pull nom-image`: Telecharger image
`dockers images`: Lister images
`docker rmi num_container`: supprime image 
`docker image prune`: Supprimer image inactif
`docker run` : Creer container a partir d'une image
        Options : 
            -d : lancer en arriere plan
            -e : variable env
`docker ps` : Lister containers actifs
`docker ps -a` : Lister tous les containers
`docker rm num_container`: supprime container docker
`docker container prune`: Supprimer container inactif

Redirection port :
```bash
ssh -p 9051 -L 8080:127.0.0.1:8080 ubuntu@isitech.tancou.fr
```

`docker run -p 8080:80 -d nginx` Lancer nginx sur port 8080 : on y a acces sur l'adresse localhost:8080

Allez dans un container

`docker exec -it id_container sh`

Demarer bdd avec volume enregistre 
`docker run -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=db -e MYSQL_PASSWORD=root --name mydb -v /home/ubuntu/db-data:/var/lib/mysql -p 3306:3306 -d mysql:8.4`

lier avec phpmyadmin
`docker run --name phpmyadmin -d --link mydb:db -p 8080:80 phpmyadmin`

Reset docker
`docker system prune`

Afficher logs
`docker logs`

changer nom
`docker rename ancien_nom nouveau`

exec -> container qui est deja up et ne l'arrete pas en quittant le container
run -> creer container si pas existant, le demarre et l'arrete si on en sort 