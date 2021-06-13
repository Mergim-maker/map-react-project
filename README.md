This app adds spatial data to the map from an open source, adds an event which accesses or changes the data being displayed.
and uses React component(s) such as react-leaflet and tools such as jquery and lifecycle methods that either display information about the data or update based on user events.

To run simply download/fork, then on your terminal

-> npm install

-> npm run start

Once completed, you will be able to interact with the app at http://localhost:3000/ 

When dealing with react, one introduces the constructor to then call super() to pass the props to React.Component.
That is proceeded by classes. We do not use classes directly in turn pushing one to leverage Javascript more inside each defined class. For this project I have three classes:

Sidebar, Main, and App 

Within Sidebar, two buttons that reside within sidebar are included via html code. For every div defined, the styling is found in App.css
Within Main, div map is instantiated, proceeded by assigning baselayers and spatial data. The spatial data has been retrieved from an open source whereas polygons and points are simply made up. To add any geojson data, one leverages the leaflet library by populating geojson data as follows: L.geojson(geojson_data).addTo(map). Styling of the spatial data, therefore in geojson format, is done accordingly.
Within App, the container div, sidebar, as well as the calling of Main class is done. 
