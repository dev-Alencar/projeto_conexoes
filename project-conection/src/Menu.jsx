import './menu.css'

import { Link } from "react-router-dom"

function Menu () {
    return(
    <div>
        <div className='menu-center'>
            <div className='big-box'>
                    <nav className='into-box'>
                        <Link  target="_blank" className='links-menu' to="/"> Home </Link> <br/> <br/>
                        <Link  target="_blank" className='links-menu' to="/sobre"> Sobre</Link> <br/> <br/>
                        <Link  target="_blank" className='links-menu' to='/contato'   > Contato </Link> <br/> <br/>
                        <Link  target="_blank" className='links-menu' to="/noticias"> Notícias </Link> <br/> <br/>
                    </nav>
            </div>
    </div>
    </div>   
    
     
    )
}

export default Menu