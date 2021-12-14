# App.js

En primer lugar, nos encontramos con el archivo App.js que es el núcleo desde donde se estructura el resto de la aplicación. Aquí se colocan todos los componentes a renderizar que necesitemos.

# React Router

Mediante React Router -una librería de React-, navegaremos a través de la aplicación de manera sencilla y dinámica.
Utilizando las etiquetas <Route> dentro de la etiqueta <Switch> (la que se encargará de indicarnos que componentes se montaran y desmontaran, a diferencia de los que están fuera de esta, los cuales siempre se renderizaran en pantalla, como en este caso el NavBar) nos dirigiremos a las diferentes secciónes de nuestra app. A su vez contenidos por la etiqueta <BrowserRouter>, quien inyecta propiedades a nuestro componente para poder acceder al historial de navegación, realizar redirecciones, entre otras funciones.

# Item.js 

Aqui deposité dos array de objetos: la base de datos y las categorías. Además de las funciones obtenerCategorias(), obtenerProductos() y obtenerItemPorId(), que se encargan de renderizar en pantalla los datos que se encuentran en esos arrays. 

En primer lugar, tenemos obtenerCategorias(), que renderiza en el NavBar.js. 
Esta función se encarga de mostrar en pantalla las dos categorías existentes: Nike y Adidas a partir de una Promise resuelta en un segundo, devolviendo ese mismo array. 


## Nav Bar

En el se encuentra el logo de la página que retornará al renderizado del componente ItemListContainer.js y el botón que dirige hacia el carrito de compras mediante otro componente CartWidget.js, todavía no creado.

Aqui llamé a la función obtenerCategorias().  