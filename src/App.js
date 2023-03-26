import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Planos from './pages/planos'
import Detalhes from './pages/detalhes'
import Footer from './components/Footer/index'
import Erro from './pages/erro'
export default function App() {
    return (

        <Router>
            <div className="container">
                <header className="p-3 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                            </a>

                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li> <Link className="nav-link px-2 text-white" to='/'>Home</Link></li>
                                <li> <Link className="nav-link px-2 text-white" to='/about/meunome'>Sobre</Link></li>
                                <li> <Link className="nav-link px-2 text-white" to='/planos'>Planos</Link></li>
                                <li> <Link className="nav-link px-2 text-white" to='/detalhes'>Detalhes</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>

            <div className="App">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about/:nome' element={<About />} />
                    <Route path='/detalhes/:filme' element={<Detalhes />} />
                    <Route path='/planos' element={<Planos />} />
                    <Route path='*' element={<Erro />} />
                </Routes >
            </div>
            <Footer />
        </Router>



    )
}