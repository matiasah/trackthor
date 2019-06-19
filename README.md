# Track-thor

## Despliegue
### Despliegue en desarrollo
`docker-compose -f docker-compose.dev.yml up`

### Despliegue en desarrollo y reconstrucción de imágen
`docker-compose -f docker-compose.dev.yml up --build`

### Despliegue en producción
`docker-compose -f docker-compose.prod.yml up`

### Despliegue en producción y reconstrucción de imágen
`docker-compose -f docker-compose.prod.yml up --build`

## Limpieza
### Eliminar imágenes y volumenes
`docker system prune`

### Eliminar imágenes, volumenes y caché
`docker system prune -a`

## Generación de Elementos
### Generar componente
`ng generate component modules/[nombre del modulo]/[nombre del componente] -m=[nombre del modulo]`

### Generar servicio
`ng generate service services/[nombre del servicio]`

### Generar modulo
`ng generate module modules/[nombre del modulo]`

### Generar guard
`ng generate guard guards/[nombre del guard]`

### Generar modelo
`ng generate interface models/[nombre del modelo]`

## Compilar con Ionic
### Compilar en Android
`docker-compose -f docker-compose.ionic.yml up --build`

## Contenedor
### Obtener IDs de contenedores
`docker container list`
### Ingresar por bash de docker-compose
`docker-compose run <nombre de contenedor en docker-compose.yml> /bin/bash`
### Ingresar por bash de docker
`docker exec -it <id del contenedor> /bin/bash`