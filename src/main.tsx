import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { createTheme, ThemeProvider } from '@mui/material'
import Home from './Home'
import Task1 from './task1/Task1'
import Task2 from './task2/Task2'
import Task3 from './task3/Task3'
import './main.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
    },
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/task1' element={<Task1 />}></Route>
          <Route path='/task2' element={<Task2 />}></Route>
          <Route path='/task3' element={<Task3 />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
