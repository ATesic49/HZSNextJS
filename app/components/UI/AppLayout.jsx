import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from './Footer'

function AppLayout() {
  return (
    <div className="font-[Inter] bg-stone-100">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout
