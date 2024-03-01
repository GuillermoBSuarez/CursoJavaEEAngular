Front para trabajar contra el servicio del 73_BD_libreria, unificando las dos vistas de aquél en una sola.

Primero lo hacemos "desecurizando" el microservicio 73.

1. model/Libro. En tsconfig.json, "strict": false
2. service/libreria
   Inyectar http en constructor.
3. component/main
   Sólo para la barra de menús y las rutas donde lleva cada opción.
   Debajo, el bloque router-outlet, donde se incrustarán los contenidos a los que lleva cada ruta.
4. component/catalogo
   Se implementa la interfaz OnInit y su método, en el que se ejecuta la carga de libros cuando esté lista la pantalla, mejor que hacerlo en el constructor.
5. component/libro
   Una variable number para el isbn a buscar. OJO, no confundir con la propiedad isbn de un Libro; éste isbn es el parámetro que enviamos al método para buscar el libro. Igualmente, OJO, además de declarar libro HAY QUE INSTANCIARLO. Si no, el html no reconoce las propiedades y no aparecen los label donde se incrustan.
6. component/alta
   Variables para la lista de strings de temáticas y el libro. OJO, además de declarar el objeto Libro HAY QUE INSTANCIARLO, si no el html no localiza sus propiedades. O sea, hay que crear un objeto concreto. El ts del component es la parte de código del html, forma una unidad.
   Al final del método de alta se crea un nuevo objeto Libro que machaca los controles del html, con lo que los deja en blanco, más elegante.
   Se implementa la interfaz OnInit y su método, en el que se ejecuta cargarTematicas cuando esté lista la pantalla, mejor que hacerlo en el constructor.
7. app.module.ts
   Se añaden los components en declarations si no están. Se añaden FormsModule y HttpClienteModule en imports. En bootstrap se indica el component con el que arranca el programa. Se eliminan las referencias al component que se crea por defecto al iniciar el proyecto.
8. app-routing.module.ts
   Se añade en const routes las rutas de cada opción del menú a su correspondiente component.
   
SEGUNDA VERSIÓN

Volvemos a poner el securizado en el microservicio y modificamos las llamadas a esos servicios securizados, añadiendo cabeceras en las peticiones http donde van el usuario y contraseña en Base64. OJO al método heads.set; su resultado se guarda sobre la misma variable porque el objeto HttpHeathers es inmutable, así que lo que devuelve set es un nuevo objeto que hay que guardar en algún sitio.

TERCERA VERSIÓN

Creamos en app/custom_properties.ts para guardar constantes como el user y pass y quitarlos del service. En el service cambiamos las variables user y pass por las creadas en el properties.


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
