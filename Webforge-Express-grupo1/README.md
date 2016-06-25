# Webforge Express

[![Build Status](https://semaphoreci.com/api/v1/felovilches/webforge-express/branches/master/badge.svg)](https://semaphoreci.com/felovilches/webforge-express)

Esta aplicación será desarrollada por Javier Cáceres para objetener el título de Ingeniero Civil en Informática en el marco de su trabajo de titulación.

Actualmente, esta aplicación se encuentra en fase de modificación y extensión por el curso de Interacción Humano Computador de la Universidad de Santiago de Chile, a cargo del profesor Edmundo Leiva.


## Contenido de cada carpeta

* **views**: Contiene solamente los layouts.
* **routes**: Contiene las rutas, sin embargo como es una single-page application solo se necesita una ruta y este archivo no es modificado constantemente.
* **public**: Contiene los codigos javascript, css, vistas (que se cargan dinamicamente por Angular), fonts, imagenes.
* **bin**: Configuracion general de la aplicacion, como el puerto.
* **tests**: Configuracion de pruebas.

Por lo tanto solamente se trabaja en la carpeta **public** la mayor parte del tiempo, lo cual da mayor facilidad que con Rails.

## Instalacion

```bash
npm install
```

Y empezar el servidor con este comando (el cual inicia el servidor y queda pendiente de cambios en los JS/CSS para recompilar y volver a inyectar)

```bash
npm run dev
```


Y luego ir a ```http://localhost:4000/```.

## Otros

En caso de descargar alguna nueva dependencia con Bower, usar este comando una vez

```bash
gulp wiredep
```

Ejecutar las pruebas

```bash
npm test
```

