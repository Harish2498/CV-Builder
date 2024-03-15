import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
const App = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}
export default App