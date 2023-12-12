import Menu from "./Menu"
import Footer from "./Footer"
import { Link } from "react-router-dom"

import './Sejuv.css'

import banner1 from './assets/banner1.png'
import banner2 from './assets/banner2.png'
import banner3 from './assets/banner3.png'
import banner4 from './assets/banner4.png'
import banner5 from './assets/banner5.png'



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
                    <p className='text-about'> Bem-vindo ao site da Sejuv Recife, a Secretaria Executiva da Juventude que tem como missão principal promover e fortalecer a participação ativa dos jovens na construção de uma cidade mais inclusiva e dinâmica. 
                    Aqui você irá encontrar datas dos próximos eventos, formulários para inscrições, editais e outras informações como nossas redes sociais e canais de contato.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Sejuv