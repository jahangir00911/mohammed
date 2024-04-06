import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';



// route the component to index.html => (public folder)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Creating function based component
function First(){
  return <h1>This is my First Function based on Component</h1>
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<First/>)

function Display(){
  return <h1>Form Submited Successfully</h1>
}
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
function send(){
root3.render(<Display />)
}

function MyForm(){
  return (
    <center>
      <h2>Registration Form</h2>
    <form>
      <table>
        <tr>
          <th>Name</th>
          <th><input type='text' placeholder='Enter Name' required></input></th>
        </tr>
        <tr>
          <th>Email</th>
          <th><input type='email' placeholder='Enter Email' required></input></th>
        </tr>
        <tr>
          <th>Password</th>
          <th><input type='password' placeholder='Enter Name' required></input></th>
        </tr>
        <tr>
          <th>Date Of Birth</th>
          <tr>
          <th><input type='date'></input></th>
        </tr>
        </tr>
        <tr>
        </tr>
      </table>
    </form>
    <button onClick={send}>Submit</button>
    </center>
  )
}
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<MyForm />)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
