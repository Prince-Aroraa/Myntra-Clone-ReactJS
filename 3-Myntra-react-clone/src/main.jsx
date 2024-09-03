import ReactDOM from 'react-dom/client';
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import BagCart from './components/BagCart.jsx'
import Home from './routes/Home.jsx';
import {Provider} from 'react-redux';
import myntraStore from './store/index.js';

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children:[
    {path: "/", element: <Home/>},
    {path:"/bag", element:<BagCart/>}
  ]
}])



const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
