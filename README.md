# SAE_autenticación_ms

# Autor
Luis Fernando Mendez Marques

# Uso/Instalación
* Agregar un archivo .env a la raiz del proyecto con las variables:
```
PORT = XXX
URI = http://XXXX

#informacion de llave secreta para firmado(creacion) de token
JWT_SECRET=
```

# Comandos de despliegue con docker-compose

1 Si no se ha creado la red de docker para los microservicios, ejecutar el siguiente comando:

    docker network create nodes-networks

2 Contruir y ejecutar el contenedor:

    docker-compose build --no-cache
    
    docker-compose up

3 Detener y eliminar el contenedor:

    docker-compose down
