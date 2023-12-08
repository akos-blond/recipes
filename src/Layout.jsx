import { Outlet } from 'react-router dom';

const Layout = () => {
    return (
        <main className="App">
            <Outlet />
        </main>
    )
}

export default Layout

// Az Outlet a Layout összes "children elementjét" jelképezi