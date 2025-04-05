
import Login from './pages/Login';
import { MantineProvider } from '@mantine/core';
import './App.css'

function App() {
  

  return (
    <MantineProvider>
      <Login />
    </MantineProvider>
 
  )
}

export default App
