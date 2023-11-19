import './menu.css'

import LOGO2 from './assets/LOGO1.png'

import { Link } from "react-router-dom"

function Footer () {
    return (
    <div>
        <div className='container-footer'>
            
            <section className='footer-list'>
                <nav className='footer-bar'>
                    <h3 class="footer-title"> Mapa do Site </h3>
                    <Link className='footer-item' to="/"> Home </Link> <br/> <br/>
                    <Link  target="_blank" className='footer-item' to="/eventos"> Eventos </Link> <br/> <br/>
                    <Link  target="_blank" className='footer-item' to="/inscricoes"> Inscrições </Link> <br/> <br/>
                </nav>
            </section>
            <section className='footer-list'>
                <nav className='footer-bar2'>
                    <h3 class="footer-title"> Redes Sociais </h3>
                    <Link  target="_blank" className='footer-item' to="/"> Instagram </Link> <br/> <br/>
                    <Link  target="_blank" className='footer-item' to="/eventos"> X </Link> <br/> <br/>
                </nav>
            </section>
            <div className='footer-logo'> 
                <img src={LOGO2}></img>
                <img src={LOGO2}></img>
                <h4>
                    <p>Projeto Conexões</p>
                </h4>
            </div>
        </div>
    </div>   
    
    )
}

export default Footer