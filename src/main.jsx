import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from  'react-router-dom'
import './index.css'
import App from './App';
import Housedetails from './pages/Housedetails';
import Browse from './pages/Browse';
import Anggana from './pages/Anggana';
import SeattleRain from './pages/SeattleRain';
import WoddenPit from './pages/WoddenPit';
import PsWood from './pages/PsWood';
import OneFive from './pages/OneFive';
import Minimal from './pages/Minimal';
import StaysHome from './pages/StaysHome';
import GreenPark from './pages/GreenPark';
import PodoWae from './pages/PodoWae';
import SilverRain from './pages/SilverRain';
import Cashville from './pages/Cashville';
import Agents from './pages/Agents';
import Stories from './pages/Stories';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "housedetails",
    element: <Housedetails/>,
  },
  {
    path: "browseby",
    element: <Browse/>,
  },
  {
    path: "anggana",
    element: <Anggana/>
  },
  {
    path: "seattle_rain",
    element: <SeattleRain/>
  },
  {
    path: "wodden_pit",
    element: <WoddenPit/>
  },
  {
    path: "ps_wood",
    element: <PsWood/>
  },
  {
    path: "one_five",
    element: <OneFive/>
  },
  {
    path: "minimal",
    element: <Minimal/>
  },
  {
    path: "stays_home",
    element: <StaysHome/>
  },
  {
    path: "green_park",
    element: <GreenPark/>
  },
  {
    path: "podo_wae",
    element: <PodoWae/>
  },
  {
    path: "silver_rain",
    element: <SilverRain/>
  },
  {
    path: "cashville",
    element: <Cashville/>
  },{
    path: "agents",
    element: <Agents/>
  },
  {
    path: "stories",
    element: <Stories/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
