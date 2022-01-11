## Inicializacion del proyecto

npm install 

npm start

.env credenciales de firebase y su configuracion

tienen que cargar productos en firebase para que aparezcan en la app y que tipo de objeto y datos debe ser ese producto

## Variables de entorno 

En el archivo ".env" se encuentran las variables de entorno (en este caso) de Firebase, información sensible de la base de datos que no quiero que los usuario o personas de GitHub vean porque eso sería dar permisos para utilizar los datos. Es por esto que el archivo está en .gitignore. 
Estas variables de entorno son: 
REACT_APP_apiKey 
REACT_APP_authdomain 
REACT_APP_projectId 
REACT_APP_storageBucket 
REACT_APP_messagingSenderId
REACT_APP_appId
REACT_APP_measurementId

Por otra parte, para llamar a estas credenciales, hay que abrir el archivo "firebase.js" dentro de la carpeta services, y colocar en cada una de ellas "process.env.REACT_APP_(nombre de la credencial)"

## App.js

En primer lugar, nos encontramos con el archivo App.js que es el núcleo desde donde se estructura el resto de la aplicación. Aquí se colocan todos los componentes a renderizar que necesitemos.

## React Router

Mediante React Router -una librería de React-, navegaremos a través de la aplicación de manera sencilla y dinámica.
Utilizando las etiquetas <Route> dentro de la etiqueta <Switch> (la que se encargará de indicarnos que componentes se montaran y desmontaran, a diferencia de los que están fuera de esta, los cuales siempre se renderizaran en pantalla, como en este caso el NavBar) nos dirigiremos a las diferentes secciónes de nuestra app. A su vez contenidos por la etiqueta <BrowserRouter>, quien inyecta propiedades a nuestro componente para poder acceder al historial de navegación, realizar redirecciones, entre otras funciones.

## Item.js 

Aqui deposité dos array de objetos: la base de datos y las categorías. Además de las funciones obtenerCategorias(), obtenerProductos() y obtenerItemPorId(), que se encargan de renderizar en pantalla los datos que se encuentran en esos arrays. 

En primer lugar, tenemos obtenerCategorias(), que renderiza en el NavBar.js. 
Esta función se encarga de mostrar en pantalla las dos categorías existentes: Nike y Adidas a partir de una Promise resuelta en un segundo, devolviendo ese mismo array. 


## Nav Bar

En él se encuentra el logo de la página que retornará al renderizado del componente ItemListContainer.js y el botón que dirige hacia el carrito de compras mediante otro componente CartWidget.js, que a su vez muestra la cantidad de productos presentes en el carrito.

A su vez, están las categorías de productos presentes en el e-commerce, traidas desde una base de datos en Firestore. Utilizando una función autoejecutable para poder utilizar el código asíncrono, 

## Ordenes de compra

datos al generar la orden