# Pandemic Map

### Antes de trabajar

Antes de empezar a trabajar haz un **Fork** de este repositorio en tu cuenta de Github usando el botón de la parte superior derecha de la vista de repositorio, junto al botón **Star**.

Una vez tengas el **Fork** hecho, clona el repositorio en tu local usando `git clone <URL>` para crear la carpeta del repositorio en tu ordenador.

Ahora solo tienes que entrar a la carpeta `cd pandemic-map` y lanzar el comando **`npm install`**.

- Este proyecto cuenta con Linters y hooks pre-commit para asegurar que tu código está limpio y bien ordenado. Antes de cada commit se comprobará tu código y corregirá acorde a las normas configuradas.

**Recuerda descargar las siguientes extensiones de VSCode**

- Eslint (busca `dbaeumer.vscode-eslint`)
- Prettier (busca `esbenp.prettier-vscode`)

Es posible que tengas que reiniciar VSCode para que los cambios hagan efecto.

## Enunciado

**Objetivo general**

Dado el archivo `covidData.js` que tienes en esta misma carpeta, vamos a crear un mapa en el que, mediante pines o marcadores, podamos señalizar todos los países afectados dados los datos del array de dicho archivo. Una vez consigamos esto, añadiremos un pequeño popup a los pines que nos permite ver, mediante gráficas, la evolución del Covid en los países dados.

**Pasos a seguir:**

1. Utilizando la librería que vimos en clase `Leaflet`, crea una función que, dados los datos del array que te proporcionamos en `covidData.js` (puedes copiar el array en tu archivo `index.js`), obtenga el campo `name` de cada país una sola vez en un nuevo array. Usando este nuevo array pintaremos marcadores en un mapa siguiendo lo que aprendimos en las sesiones de mapas.

- Para usar el campo `name` y obtener las coordenadas, tendrás que utilizar la API de **Mapbox Places** que vimos en clase a la cual le podemos enviar un nombre para buscar sus coordenadas.

Aquí un ejemplo de un objeto de datos de un país:

```
{
  date: '01/05/2020',
  dailyCases: '5442',
  name: 'United_Kingdom',
  abbr: 'UK',
  population: '66647112',
  casesPerMile: '99.25261278',
},
```

2. A cada marcador debes añadirle un listener que lance una función al hacer click sobre ellos. Esta función se llamará `showCountryGraph`, y deberá recibir un argumento mediante el cual podamos identificar al país clickado dentro del array original de `covidData.js`. Por ejemplo, añadiremos un marcador de esta forma:

```
const spainCoordinates = [40.415511, -3.7095896];
const name = 'España';

L.marker(spainCoordinates)
  .bindPopup(`<b>${name}</b>`)
  .addTo(map)
  .on('click', () => showCountryGraph(name));
```

La función `showCountryGraph` recibirá el nombre de un lugar y pintará en el HTML una gráfica de líneas para dicho país donde tengamos, en el eje X las fechas por días `01/04/2020` y en el eje Y la cantidad de infectados para cada día de inicio de més.

**Recuerda usar `Chartist` para el pintado de gráficas**

3. Adicionalmente, pintaremos bajo el mapa dos gráficas diferentes (usando dos funciones distintas para ello) que nos permitan mostrar los siguientes datos:

- La primera será una gráfica de barras que mostrará el número de casos por 100000 habitantes `casesPerMile` totales para cada país para la fecha `01/12/2020`. Teniendo en el eje X el nombre del país y en el eje Y la cantidad de casos.

- La segunda gráfica será de tipo `Pie` y tendremos como labels, nuevamente, los nombres los países afectados. En el caso del campo `series` que hay que usar para pintar los datos utilizaremos el campo `dailyCases`, de forma que el total de datos admitidos en nuestra gráfica de tipo Pie (recuerda que en `options` podemos usar un campo `total`) sea la suma de todos los `dailyCases` que vamos a mostrar.

## Bonus

Si has terminado el ejercicio y tienes ganas de mejorar tus gráficas te animamos a que les des estilos para que se diferencien de las gráficas genéricas de `Chartist` y darle un toque personal a tu web de pandemias 🎨.

Además, te retamos a que a cada gráfica de casos por cien mil habitantes del conjunto de países le añadas un botón `Retroceder` y otro botón `Avanzar` para cambiar dinámicamente los datos de las gráficas usando las fechas. Podremos ver por tanto datos para `01/12/2020`, `01/11/2020`, `01/10/2020`...
