import Menu from "./Menu"
import Footer from "./Footer"
import { Link } from "react-router-dom"

import './Sejuv.css'

import banner1 from './assets/banner1.png'
import banner2 from './assets/banner2.png'
import banner3 from './assets/banner3.png'
import banner4 from './assets/banner4.png'
import banner5 from './assets/banner5.png'
import equipe1 from './assets/equipe1.jpg'
import equipe2 from './assets/equipe2.jpg'
import equipe3 from './assets/equipe3.jpg'
import equipe4 from './assets/equipe4.jpg'
import equipe5 from './assets/equipe5.jpg'
import equipe6 from './assets/equipe6.png'
import equipe7 from './assets/equipe7.jpg'
import equipe8 from './assets/equipe8.jpg'
// import equipe9 from './assets/equipe9.jpg'



function Sejuv () {
    return (
        <div>
            <Menu/>
            <div className="main">
                <div className='box-banner'>
                    <div class="parent">
                        <img src={banner1} className="bs1" alt="Banner dança"></img>
                        <img src={banner2} className="bs2" alt="Banner cultura"></img>
                        <img src={banner3} className="bs3 "alt="Banner foto"></img>
                        <img src={banner4} className="bs4" alt="Banner teatro"></img>
                        <img src={banner5} className="bs5" alt="Banner teatro"></img>
                    </div>
                </div>
                <div className='box-text'>
                    <h1 className='title'> Equipe SEJUV </h1>
                    {/* <p className='text-about'> texto </p> */}
                </div>
                <div className="box-equipe-display">
                    <div className='box-equipe'>
                        <img src={equipe1} className="equipe-img" alt="Marcone"></img>
                        <h2>Marcone Ribeiro <br></br> </h2> <p>Secretario Executivo de Juventude do Recife</p>
                        <div className="overlay">
                        </div>
                    </div>
                    <div className='box-equipe'>
                        <img src={equipe2} className="equipe-img" alt="Mariana"></img>
                        <h2>Mariana Lyra <br></br> </h2> <p>Gerência de Políticas Públicas de Juventude</p>
                        <div className="overlay2">
                        </div>
                    </div>
                    <div className='box-equipe'>
                        <img src={equipe3} className="equipe-img" alt="Givysson"></img>
                        <h2>Givysson Rodrigues <br></br> </h2> <p>Articulação Social</p>
                        <div className="overlay3">
                        </div>
                    </div>
                    <div className='box-equipe'>
                        <img src={equipe4} className="equipe-img" alt="Karina"></img>
                        <h2>Karina Oliveira <br></br> </h2> <p>Articulação e Projetos Intersetoriais</p>
                        <div className="overlay4">
                        </div>
                    </div>
                    <div className='box-equipe'>
                        <img src={equipe5} className="equipe-img" alt="Jarda"></img>
                        <h2>Jarda Araújo <br></br> </h2> <p>Articulação e Projetos Intersetoriais</p>
                        <div className="overlay5">
                        </div>
                    </div>
                    <div className='box-equipe'>
                        <img src={equipe6} className="equipe-img" alt="Danylo"></img>
                        <h2>Danylo Santos <br></br> </h2> <p>Articulação Social</p>
                        <div className="overlay6">
                        </div>
                    </div>
                    <div className='box-equipe'>
                        <img src={equipe7} className="equipe-img" alt="Jacqueline"></img>
                        <h2>Jacqueline Sartunino <br></br> </h2> <p>Juventude Participa</p>
                        <div className="overlay7">
                        </div>
                    </div>
                    <div className='box-equipe'>
                        <img src={equipe8} className="equipe-img" alt="Kaline"></img>
                        <h2>Kaline Barros <br></br> </h2> <p>Administrativo</p>
                        <div className="overlay8">
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Sejuv