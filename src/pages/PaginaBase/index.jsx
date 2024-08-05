import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Container from '../../componentes/Container'
import { Outlet } from 'react-router-dom'

function PaginaBase() {
    return (
        <main>
            <Header />

            <Container>
                <Outlet />
            </Container>

            {/* <Cards/> */}

            <Footer />
        </main>
    )
}

export default PaginaBase
