import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import PaginaBase from './pages/PaginaBase'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PaginaBase /> }>
                    <Route index element={ <Home /> }></Route>

                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
