# VueJS + Routes + Quasar + Docker compose + Lint - SKELETON

Features:
- VueJS
- Quasar
- Docker compose
- Vue Router
- Auto fix lint errors
- Port to run defined in .env file


## Run project
```
docker compose up --build
```

## Run bash in container 
If you want to run some command in container, you can use the following command:
Eg, to run `npm install` in container:
```
docker-compose exec vuejs bash  
```


