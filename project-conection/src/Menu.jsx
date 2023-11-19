import './menu.css'
import LOGO2 from './assets/LOGO1.png'

import { Link } from "react-router-dom"

 function Menu () {
    return (
    <div>
        <div className='container'>
            <div className='logo'> 
                <img src={LOGO2}></img>
            </div>
            <div className='m'>
                <nav className='nav-bar'>
                    <Link  className='nav-item' to="/"> Home </Link> <br/> <br/>
                    <Link  target="_blank" className='nav-item' to="/sobre"> Sobre </Link> <br/> <br/>
                    <Link  target="_blank" className='nav-item' to="/noticias"> Noticias </Link> <br/> <br/>
                    <Link  target="_blank" className='nav-item' to="/contato"> Contato </Link> <br/> <br/>
                </nav>
            </div>
        </div>
    </div>   
    
    )
}

export default Menu