Envoltorio SWAPI
======================

Un envoltorio alrededor de [SWAPI](http://swapi.dev) creado mediante la conversión a [este esquema](esquema).

Usos:

* [DataLoader](https://github.com/dataloader): para fusionar y almacenar en caché las recuperaciones.
* [aws-serverless-express](https://github.com/awslabs/aws-serverless-express): para usar `express` en aws lambda.

Pruébelo en: http://.org/swapi

[![Implementar en Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Primeros pasos

Instalar dependencias con

```sh
npm install
```

## Envoltorio SWAPI

El envoltorio SWAPI está en `./swapi`. Se puede probar con:

```sh
yarn test
```

## Servidor local

Un servidor express local está en `./server`. Se puede ejecutar con:

```sh
npm start
```

Se abrirá una instancia en http://localhost:8080/ (o similar; el número de puerto real se imprimirá en la consola) para explorar la API.

# Contribuyendo a este repositorio

Este repositorio es administrado por James DL.