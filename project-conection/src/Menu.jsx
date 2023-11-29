import menu from './menu.css'
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
                    <Link  target="_blank" className='nav-item' to="/informacoes"> Informações </Link> <br/> <br/>
                    <Link  className='nav-item' to="/projeto"> Projeto </Link> <br/> <br/>
                    <Link  target="_blank" className='nav-item' to="/contato"> LGBT </Link> <br/> <br/>
                </nav>
            </div>

            <div className={menu.menuButton}>
              <span className='menu.linha'></span>
              <span className='menu.linha'></span>
              <span className='menu.linha'></span>
            </div>
        </div>
    </div>   
    
    )
}

export default Menu