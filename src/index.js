import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App';
import reportWebVitals from './reportWebVitals';

/*
function tick() {
  const element = (
    <div>
      <h1>Hello, World</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
*/

function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>;
}

const names = {
  first: 'Tyson'
};


function NameApp() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Hyperion" />
      <Welcome name="Shrike" />
    </div>
  );
};

const element = <Welcome {...names} />;

ReactDOM.render(
    <App2 />,
    //element,
    //<NameApp />,
    document.getElementById('root')
);
//}
//setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
