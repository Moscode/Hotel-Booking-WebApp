import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
