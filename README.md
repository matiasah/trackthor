# Track-thor

# Despliegue en desarrollo
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`

# Despliegue en desarrollo y reconstrucción de imágen
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build`

# Despliegue en producción
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up`

# Despliegue en producción y reconstrucción de imágen
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build`

# Eliminar imágenes y volumenes
`docker system prune`

# Eliminar imágenes, volumenes y caché
`docker system prune -a`