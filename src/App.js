import './App.css';
import React, { useState } from 'react';

// function App() {
//   return (
//     <h1 className="App">
//       Hello
//     </h1 >
//   );
// }

const App = () => {
  // This shows how a change in props (from <Hello/>'s perspective)
  // causes a re-render of <Hello/>
  const [helloColor, setHelloColor] = useState('green');

  return (
    <>
      <button onClick={() => setHelloColor('magenta')} >
        Hello Magenta
      </button>

      <button onClick={() => setHelloColor('yellow')} >
        Hello Yellow
      </button>

      <button onClick={() => setHelloColor('purple')} >
        Hello Purple
      </button>

      <Hello
        color={helloColor}
        hairStyle={'Yellow'}
        whatever={'The thing'}
        question={HowAreYou}
      />
      {/* <HowAreYou /> */}
      <GoodBye />

    </>
  );
}

const Hello = (props) => {
  return (
    <>
      <h1 className="App" style={{ backgroundColor: props.color }}>
        Hello
      </h1 >
      {props.question()}
    </>
  )
}

const HowAreYou = () => (<h3>How are you???</h3>)

const GoodBye = () => {
  // example of re-rendering when state changes
  const [bgColor, setBgColor] = useState('green');

  return (
    <div style={{ backgroundColor: bgColor, height: '100rem' }}>
      <h2>Good bye!</h2>

      <button onClick={() => setBgColor('pink')} >
        Pink
      </button>

      <button onClick={() => setBgColor('aliceblue')} >
        Alice
      </button>

      <button onClick={() => setBgColor('green')} >
        Green
      </button>
    </div>
  )
}

export default App;




      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>