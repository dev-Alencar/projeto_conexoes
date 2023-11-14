import './menu.css'

import { Link } from "react-router-dom"

function Menu () {
    return(
    <div>
        <div className='menu-center'>
            <div className='big-box'>
                    <nav className='into-box'>
                        <a  className='links-menu' href="/"> Home </a> <br/> <br/>
                        <a className='links-menu' href="/sobre"> Sobre</a> <br/> <br/>
                        <Link to='/contato' target="_blank" className='links-menu' > Contato </Link> <br/> <br/>
                        <a className='links-menu' href="/noticias"> Notícias </a> <br/> <br/>
                    </nav>
            </div>
    </div>
    </div>   
    
     
    )
}

export default Menu