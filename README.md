# Coderhouse: Curso de React.js ⚛️
## 🚀 Proyecto Final
Author: Ivan Talijancic

### 📦 Contenido del repositorio
El repositorio contiene el código correspondiente a la resolción de la consigna planteada como proyecto final para el curso de React.js

#### 📋 Descripción del proyecto

El proyecto consiste en la realiazción de la página web de un e-commerce que comercializa productos de apple.
En la página de inicio vemos una lista de productos (catálogo) de todos los artículos que podemos comprar en la tienda.
El usuario puede también listar productos según la categoría de su interés, siendo las categorías de productos ofrecidos:

- Celulares

- Tablets

- Notebooks

En los catálogos de prouctos (general o por categrías), los productos se presentan en **cards** y el usuario haciendo click sobre la misma puede navegar hasta una página que describe en detalle el producto y le permite agregar una o más unidades de este artículo al carrito para luego hacer la compra.

Luego de listar los productos en el carrito, el usuario puede navegar al mismo, haciendo click sobre el ícono del carro que se presenta en la **NavBar** y ver en ésta página el conjunto de artículos que componen su compra. Si lo desea puede finalizar la compra, generando una orden. En caso de que el proceso de generación de esta orden de compra sea exitoso se notifica al usuario y se lo redirecciona al **home**

#### ⚡️Librerias utilizadas
- **Lirbería de componentes:** [Chakra UI](https://chakra-ui.com/)

- **Lirbería de ruteo:** [React router](https://reactrouter.com/en/main)

- **Librería de notificaciones:** [SweetAlert2](https://sweetalert2.github.io/) Es una librería que nos permite crear cuadros de diálogo y notifacciones para los usuarios. La misma se utiliza para implementear una notificación de éxito, en caso de que la orden de compra generada por el usuario sea exitosamente persistida en la base de datos (firestone, a continuación descripta).

- **Base de datos en la nube:** [firestone](https://firebase.google.com/docs/firestore?hl=es-419) Esta es una base de datos, no relacionada, en la nube que utilizamos para almacenar los productos a comercializar en nuestro e-commerce, así como para almacenar las órdenes de compra generadas por los usuarios.

#### 🚚 Entregables

- Link al último commit de git, donde se cumplan los objetivos.