import Home from './page/Home'
import Detail from './page/Detail'
import Checkout from './page/Checkout'
import InstruksiBayar from './page/InstruksiBayar'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'detail/:id',
          element: <Detail/>
        },
        {
          path: 'checkout/:id',
          element: <Checkout/>
        },
        {
          path: 'instruksi-bayar/:id',
          element: <InstruksiBayar/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={route}/>
      <Outlet/>
      {/* <Home /> */}
      {/* <Detail/> */}
      {/* <Checkout/> */}
      {/* <InstruksiBayar/> */}
    </>
  )
}

export default App
