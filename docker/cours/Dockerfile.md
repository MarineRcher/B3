`FROM` : Commence par cette commande pour debuter a partir d'une image

`RUN` : run une commande -> Souvent on maj apt ou apk et install curl("Permet d'avoir les logs")

`WORKDIR`: Environnement ou le code va etre executer le code
`COPY` : Copier code
`ADD`: Telecharger depuis internet ("Ca a du sens si on telecharge une app depuis internet pour la test sur differents environnements")
`ENTRYPOINT`: liste qui sera concatener avec cmd
`CMD`: commande finale, souvent elle lance le script

