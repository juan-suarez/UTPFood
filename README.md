# UTPFood
UTPFood es una aplicacion web que tiene como fin sustentar el conocimiento adquirido en lamateria bases de datos con el profesor Carlos Alberto Ocampo Sepulveda. para este proyecto se nos pedia hacer un proyecto en el que hicieramos uso de una bse de datos SQL y para esto se eligió la simulacion de una aplicacion como Rappi, aplicación en la cual podemos ver un catalogo de lugares y sus productos los cuales podemos adquirir por medio de un carrito.

## Frontend
Ahora hablando de la parte tecnica nos encontramos que nuestra interfaz o parte visual (Front-end) fue diseñada meramente 
con HTML5,CSS3,Boostrap y Handlebars como sistema de plantillas. tratando de llevar un diseño responsive y tratando de
priorizar el diseño. 

## Backend
Para nuestro back-end nos basamos completamente en el siguiente video: https://www.youtube.com/watch?v=qJ5R9WTW0_E&t=10965s del youtuber Fazt, Gracias a este video podemos llevar una arquitectura limpia y un codigo lo mas ordenado posible aprovechando el enotrno de que nos proporciona NodeJs y sus respectivos frameworks. para poner a funcionar todos estos frameworks usamos JavaScript nuestro lenguaje insignia en back-end.

## requisitos

Nuestra base de datos es MYSQL la cual podemos instalar por medio de consola o descargando algun entorno con interfaz que nos facilite el uso:
* Workbench : https://www.mysql.com/products/workbench/ 
* Mediante consola : 
```bash 
sudo apt install mysql-server
```
Esta base de datos debe estar en local y corriendo en el puerto 3306 para poder llevar conexion sin problemas de esta misma.

Ahora bien tambien necesitamos nuestro entorno de trabajo para esto usamos NodeJs, para instalarlo podemos consultar la documentacion en:
* NodeJs : https://nodejs.org/es/

## Preview

Ahora para levantar nuestro servidor y poner en  marcha el entorno debemos usar la siguiente sentencia de node en el bash:

```bash
npm run dev
```
Ahora nuestra aplicacion web ya deberá estar corriendo sin problemas en nuestro localhost:4000 al cual podemos acceder en nuestro navegador. 
