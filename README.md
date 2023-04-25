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

* Abrir la consola sobre el directorio raiz del proyecto y realizar el siguiente comando:
```
npm install
o
npm i
```
* Para ejecutar el proyecto se usa el siguiente comando sobre la carpeta raiz:
```
node src/index.js
```
