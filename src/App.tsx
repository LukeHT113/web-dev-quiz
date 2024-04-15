import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './routes/Home'
import ErrorPage from './routes/ErrorPage'
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Quiz from "./routes/Quiz"

export default function App() {

  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  function switchTheme() {
    setTheme(prev => {
      if (prev == 'light') {
        localStorage.setItem('theme', 'dark');
        document.querySelector('body')?.classList.remove('light');
        return 'dark'
      } else {
        localStorage.setItem('theme', 'light');
        document.querySelector('body')?.classList.add('light');
        return 'light'
      }
    })
  }

  useEffect(() => {
    const theme: 'dark' | 'light' = localStorage.getItem('theme') as 'light' | 'dark';
    if (theme === 'light') {
      document.querySelector('body')?.classList.add('light');
      setTheme(theme);
    }
  }, [])


  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <>
        <Header theme={theme} switchTheme={switchTheme} />
        <Home />
        <Footer theme={theme} />
      </>,
      errorElement: 
      <>
        <Header theme={theme} switchTheme={switchTheme} />
        <ErrorPage />
        <Footer theme={theme} />
      </>
    },
    {
      path: "/quizzes/:quizId",
      element:
      <>
        <Header theme={theme} switchTheme={switchTheme} />
        <Quiz />
        <Footer theme={theme} />
      </>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
