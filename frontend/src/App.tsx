import { MantineProvider } from '@mantine/core';
import Login from './pages/Login'
import './App.css'

function App() {
  

  return (
    <MantineProvider>
      <Login />
      </MantineProvider>
  )
}

export default App
