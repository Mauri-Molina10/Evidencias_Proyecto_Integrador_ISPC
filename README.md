<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Proyecto Integrador - Estadísticas de Productos con React y Tailwind

## ¿Qué hace la aplicación?

Esta aplicación muestra una lista de productos obtenidos desde una API y calcula varias estadísticas sobre esos productos. Además, permite buscar productos por nombre y alternar la visualización de las estadísticas.

---

## Estadísticas agregadas

Las estadísticas que se muestran en el panel son:

- **Productos totales:** cantidad de productos filtrados por búsqueda.
- **Producto más caro:** nombre y precio del producto con el precio más alto.
- **Producto más barato:** nombre y precio del producto con el precio más bajo.
- **Productos con título > 20 caracteres:** cuántos productos tienen un título largo.
- **Precio total:** suma de los precios de todos los productos filtrados.
- **Promedio de descuento:** promedio del porcentaje de descuento de los productos.
- **Productos con stock bajo (< 50):** cuántos productos tienen menos de 50 unidades en stock.
- **Producto con mayor descuento:** nombre y porcentaje de descuento del producto con mayor descuento.
- **Promedio de precio:** precio promedio de los productos filtrados.

---

## División del código en componentes

El código está dividido en varios componentes para que sea más fácil de mantener y entender:

- **App.jsx:**  
  Es el componente principal. Se encarga de:
  - Obtener los productos desde la API.
  - Manejar el estado de búsqueda, el estado para mostrar/ocultar estadísticas y el estado del modo oscuro.
  - Calcular todas las estadísticas.
  - Renderizar el buscador, el botón de modo oscuro, la lista de productos y el panel de estadísticas.

- **ProductList.jsx:**  
  Este componente recibe la lista de productos filtrados y los muestra en una grilla.  
  Cada producto se muestra en una tarjeta con su nombre y precio.

- **StatsPanel.jsx:**  
  Este componente recibe todas las estadísticas calculadas desde `App.jsx` y las muestra en un panel con estilos.

---

## Otros archivos importantes

- **index.css:**  
  Aquí se importa Tailwind CSS y se configura la variante `dark` para que funcione el modo oscuro usando la clase `.dark` en el elemento `<html>`.

- **main.jsx:**  
  Es el punto de entrada de la aplicación. Renderiza el componente `App` dentro del elemento con id `root`.

- **index.html:**  
  Es el archivo HTML base donde se monta la aplicación de React.

- **tailwind.config.js:**  
  Archivo de configuración de Tailwind. Se especifica que el modo oscuro se activa con la clase `dark` y se indican los archivos donde Tailwind debe buscar las clases usadas.

---

## Notas personales

- El código está dividido en componentes para que sea más fácil de leer y modificar.
- Las estadísticas se calculan en el componente principal y se pasan como props al panel de estadísticas.
- El modo oscuro funciona agregando o quitando la clase `dark` en `<html>`, siguiendo la documentación oficial de Tailwind https://tailwindcss.com/docs/dark-mode.
- El botón de modo oscuro alterna entre los dos modos y guarda la preferencia en el navegador.

---
>>>>>>> ad5a77b106ea457e26bf38b557795d36cbd7c560
