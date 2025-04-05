Registre prive : 
registry.isitech.tancou.fr
https://registry-ui.isitech.tancou.fr

user
isipassword

SI on veut push une image : 
    - creer un compte
    - creer repo
    - recup tag et renommer notre image avec le bon tag avec  `docker tag ancien-nom
    nouveau-nom`
        pour repo prive : tag : nom-domaine/repo/image
    - `docker login `
            si prive `docker login <nom-domaine>`
    - `docker push <nom>:latest`

