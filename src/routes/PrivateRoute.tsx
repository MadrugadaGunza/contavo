import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    return (
        <section className='flex'>
            <Sidebar />
            <div className='flex-1 h-screen'>
                <Header />
                <Outlet />
            </div>
        </section>
    )
}

export default PrivateRoute
