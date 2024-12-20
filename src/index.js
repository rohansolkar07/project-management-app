import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './component/router/Contact';
import Error from './component/router/Error';
import About from './component/router/About';
import Home from './component/router/Home';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Home />,
        
      },
      
      {
        path : "/contact",
        element : <Contact />,
        
      },
      {
        path : "/contact/about",
        element : <About />
      }
    ]
  },
  

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    // <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
