import Menu from "./Menu"
import { Link } from "react-router-dom"

import './home.css'

import danca from './assets/image3.jpeg'
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image4 from './assets/image4.jpeg'
import destaque from './assets/destaque-do-mes.jpeg'
function Home () {
    return(
        <div>
            <Menu/>
            <div className='teste'>
                <img className='danca-img' src={danca}/>
                <img className='image1' src={image1}/>
                <div className='teste2'>
                    <img className='image2' src={image2}/>
                </div>
                <div className='image4'>
                <img className='image4' src={image4}/>
                </div>
            </div>

         <div className='box-about'>
                <h1 className='title'> SOBRE </h1>
                <p className='text'>
                Bem-vindo ao site da Sejuv Recife, a Secretaria Executiva da Juventude que tem como missão principal promover e fortalecer a participação ativa dos jovens na construção de uma cidade mais inclusiva e dinâmica. 
                Aqui você irá encontrar datas dos próximos eventos, formulários para inscrições, editais e outras informações como nossas redes sociais e canais de contato.
                </p>
         </div>



        <div className="box-category">

         <h1 className='title'>CATEGORIAS</h1>
                <div>
                    <button className="button-event">
                        <Link className='text-buttons' target="_blank" to="/"> EVENTOS </Link> <br/> <br/>
                    </button>
                    <button className="button-event second-button">
                    <Link className='text-buttons' target="_blank" to="/"> INFORMAÇÕES </Link>
                    </button>
                </div>

                <div>
                    <button className="button-event">
                    <Link className='text-buttons' target="_blank" to="/"> EDITAIS </Link> <br/> <br/>
                        
                    </button>
                    <button className="button-event second-button">
                    <Link className='text-buttons' target="_blank" to="/"> ID JOVEM </Link>
                    </button>
                </div>

                <div>
                    <button className="button-event">
                    <Link className='text-buttons' target="_blank" to="/"> FORMULÁRIOS </Link>
                    </button>
                    <button className="button-event last-button">
                    <Link className='text-buttons' target="_blank" to="/"> DENÚNCIAS </Link>
                    </button>
                </div>
        <div className='draft-box'>
        <img className='draft-img' src={destaque}/>
        </div>
        </div>
    </div>

    )
}

export default Home