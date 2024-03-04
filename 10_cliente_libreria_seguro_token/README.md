Modificación del 09_cliente_libreria para trabajar contra el servicio del 77_BD_libreria_seguro_token.

Éste pide autenticación por token, así que necesitamos ejecutar también KeyCloak. En CMD, en la ruta de keycloak/Bin, kc start-dev como admin.

En service llamamos al KeyCloak para que nos dé un token, lo hacemos en el constructor. Pero KeyCloak devuelve un JSON, no un string, así que tenemos que extraer del JSON la única propiedad que nos interesa, que es la primera. Igual que en Java (Ej. 78), creamos un model o javabean con esa única propiedad. La llamada http devuelve, como todas un Observable, por lo que hay que suscribirse a él. Como vamos a guardarla en un objeto de tipo Token, que hemos definido con una única propiedad, en la propia llamada de subscribe asignamos esa propiedad a la variable string token.

Después, en los métodos hay que añadir en headers la clave/valor del tipo de autorización: Authorization = Bearer + token

Además, en el método de alta de libros hay que cambiar la clave/valor a Content-Type = application/json.



# 09ClienteLibreria

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
