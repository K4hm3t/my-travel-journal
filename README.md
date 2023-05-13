Travel journal web page, built using React.js, with custom made data.
- app.jsx: This file is the main component for app. It contains components: header and card.
- header.jsx: This file is a component that represents a header for the app.
- card.jsx: This file is a single component that represents a "card" in the app (e.g. a card with information about a particular travel destination). This component receives props.
- data.js: This file contains an array of data.
- style.css and cardStyle.css are used to style the web page.

The Card component :
Accepts a props object as an argument. This component renders the information for each travel destination as a card.

The App component:
Declares a cards constant that maps over the data array and returns an array of Card components, passing each item object in data as a prop.
Returns a JSX expression that renders the Header component and a div element that contains the array of Card components.
The Header and Card components are placed inside a div element, which is the top-level container for the entire app.

Data:
This is a JavaScript file containing an array of objects that represent travel destinations. Each object has several properties that provide information about the destination, such as its name, location, dates, description, and an image URL. These objects can be used to display information about the destinations on a website or app, or to create interactive features that allow users to filter and search for destinations based on certain criteria.

Overral this is a simple web page bulit using React.js framework that allows us to add new data as an object that follows the pattern as the rest of the objects inside of an array. When new object is added web page will
immediately update based on what image and the information was given.

**Vite is used for building this web application**

**Running "npm run dev" on the terminal will start a local development server that will build this project and serve it on a local host**
(Make sure you are inside the project directory when running: npm run dev)
