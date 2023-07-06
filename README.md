
## Aplicacion de Clima Node

Es una aplicación que muestra la información del clima en grados centigrados por consola; utilizando Yargs para la introducción de datos.

La aplicación esta conectada a dos API's de: [Open Weather](http://https://openweathermap.org/ "Open Weather")

#### Instalar paquetes de npm
````
npm install
````

#### Instrucciones
Para utilizar la aplicación, abrir una ventana de consola e introducir:

````
node app -d "Guatemala"
````
El nombre de la cuidad puede o no introducirse con comillas.

El resultado en consola sera el siguiente (En caso de encontrarse la cuidad):
>El clima de Guatemala City es de 16.4

En caso de no encontrar la cuidad el resultado será:
>No se pudo determinar el clima de CiudadX