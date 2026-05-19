import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>,
  </Router>
)



/* <Router>
  It enables page navigation in React without reloading the browser.

  Without Router:

    React cannot use routes like:
      /about
      /profile
      /shop

  It powers components like:
    <Routes>
    <Route>
    <Link>
    useNavigate()

  So Router basically:
    “Tracks the URL and shows the correct page component.”
*/

/* <React.StrictMode>

  This is a development helper from React.

  It checks your app for:
    outdated code
    unsafe lifecycle methods
    side effects
    bad React practices

  Important:
    It only affects development
    It does NOT appear in production

  One thing beginners notice:
    components may render twice in development
*/

/* <App/>
  This is your main React component.
  Think of it as the root of your actual website/app UI. 
*/























// starting code

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

