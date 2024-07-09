import { Suspense} from 'react'
import {  RouterProvider } from 'react-router-dom'
import { Router } from './routes'
import Loader from './components/common/Loader'
import { useEffect } from 'react'
import AOS from 'aos'
const App = () => {
  useEffect(() => {
    AOS.init({
    duration: 600, 
    once:true,
    easing: 'ease-in-out',
    });
    }, []);
  const router = Router()
  return (
    <>
    <Suspense fallback={<Loader/>}>
    <RouterProvider router={router}/>
    </Suspense>
    </>
  )
}

export default App
