import './menu.css'
import LOGO2 from './assets/LOGO3.png'

import { Link } from "react-router-dom"

 function Menu () {
    return (
    <div>
        <div className='container'>
            <div className='logo'> 
                <img className='img-logo' src={LOGO2}></img>
            </div>
            <div className='m'>
                <nav className='nav-bar'>
                    <Link  className='nav-item' to="/"> Home </Link> <br/> <br/>
                    <Link  className='nav-item' to="/informacoes"> Informações </Link> <br/> <br/>
                    <Link  className='nav-item' to="/projeto"> Projeto </Link> <br/> <br/>
                    <Link  className='nav-item' to="/Sejuv"> SEJUV </Link> <br/> <br/>
                </nav>
            </div>
        </div>
    </div>   
    
    )
}

export default Menu