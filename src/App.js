import logo from './logo.svg';
import './App.css';

import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + 1,
        showText: state.showText
      }

    case "Decrement":
      return {
        count: state.count - 1,
        showText: state.showText
      }

    case "IncrementBy2": 
      return {
        count: state.count + 2,
        showText: state.showText
      }

    case "OnMouseOver":
      return {
        count: state.count,
        showText: true
      }
    case "OnMouseLeave":
      return {
        count: state.count,
        showText: false
      }

    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

  return (
    <>
      <button 
        onClick={() => {
          dispatch({type: "IncrementBy2"});
        }}
        onMouseOver={() => {
          dispatch({type: "OnMouseOver"})
        }}

        onMouseLeave={() => {
          dispatch({type: "OnMouseLeave"})
        }}
        >
        Click Me
      </button>

      {state.showText && <h1>{state.count}</h1>}



    </>
  );
}

export default App;

/*
  1) Mobile First Approach
  2) Create the HTML layout
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements
  4) Decorate the HTML elements
    1) Imagine how you want it to look like.
    2) Then use width, padding, border, and margin.
    3) Then calculate: 
        If * {box-sizing: content-box}
        - Parent Div's Width = Child Div's Width+Padding+Border+Margin
        - Parent Div's Width = Block Element's Width+Padding+Border+Margin
        - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/

/*
import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [showParagraph, setShowParagraph] = useState(true);
  return (
    <>
      <h1>{count}</h1>
      <button 
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setShowParagraph(!showParagraph);
        }}>
        Click Me
      </button>

      {showParagraph && <p>I Am Here!</p>}
      
    </>
  );
}

export default App;
*/