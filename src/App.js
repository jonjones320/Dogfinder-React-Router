import React from 'react';
import './App.css';
import { Route, Routes, Redirect, useParams } from 'react-router-dom';


function App() {
  App.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }
  return (
    <div className="App">
      <h1></h1>
      <BrowserRouter>
      < Routes>
          <Route exact path="/dogs" >
            <DogList /> // what props will this need?
          </Route>
          <Route path="/dogs/:name" >
            <DogDetails /> // what props will this need?
          </Route>
          <Redirect to="/dogs" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
