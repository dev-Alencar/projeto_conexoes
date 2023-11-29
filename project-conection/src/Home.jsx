import Menu from "./Menu"
import Footer from "./Footer"
import { Link } from "react-router-dom"

import './home.css'
import './index.css'

import danca from './assets/danca.jpg'
import foto from './assets/cinema.jpeg'
import cultura from './assets/cultura.webp'
import teatro from './assets/teatro.jpg'
import tambor from './assets/tambor.jpg'
import feju from './assets/FEJU.png'
import batalha from './assets/BATALHA.jpg'
import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import foto3 from './assets/foto3.jpg'
import event1 from './assets/event1.jpg'


function Home () {
    return (
        <div>
            <Menu/>
            <div className="main">
                <section className="banner">
                    <img src={danca} className="b1" alt="Banner dança"></img>
                    <img src={cultura} className="b2" alt="Banner cultura"></img>
                    <img src={foto} className="b3 "alt="Banner foto"></img>
                    <img src={teatro} className="b4" alt="Banner teatro"></img>
                </section>

                <div className='box-about'>
                    <h1 className='title'> SOBRE </h1>
                    <p className='text-about'> Bem-vindo ao site da Sejuv Recife, a Secretaria Executiva da Juventude que tem como missão principal promover e fortalecer a participação ativa dos jovens na construção de uma cidade mais inclusiva e dinâmica. 
                    Aqui você irá encontrar datas dos próximos eventos, formulários para inscrições, editais e outras informações como nossas redes sociais e canais de contato.</p>
                </div>

                <div className="box-container">
                    <section className="box-category">
                        <h1 className="title"> CATEGORIAS </h1>
                        <nav className="list">
                            <Link  target="_blank" className='list-item' to="/"> Guias </Link>
                            <Link  className='list-item' to="/informacoes"> Informações </Link>
                            <Link  target="_blank" className='list-item' to="https://www.instagram.com/stories/highlights/18248633476056323/"> Equipe </Link>
                            <Link  target="_blank" className='list-item' to="https://www.gov.br/mdh/pt-br/idjovem"> ID JOVEM </Link>
                            <Link  target="_blank" className='list-item' to="/"> Inscrições </Link>
                            <Link  target="_blank" className='list-item' to="https://xopreconceito.recife.pe.gov.br/denrs/"> Denuncias </Link>
                            
                        </nav>
                    </section>
                    <section className="box-destaques">
                        <h1 className="title"> DESTAQUES </h1>
                        <div className="barra"></div>
                        <div id="carrossel">
                            <ul>
                                <li>
                                    <div className="carrossel-container">
                                        <img src={foto1} alt="img1" />
                                    </div>
                                </li>
                                <li>
                                    <div className="carrossel-container">
                                        <img src={foto2} alt="img2" />    
                                    </div>
                                </li>
                                <li>
                                    <div className="carrossel-container">
                                        <img src={foto3} alt="img3" />   
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </section>
                </div>
        
                <div className="box-events">
                    <h1 className='title'>PRÓXIMOS EVENTOS</h1>
                    <div className="box-events-display">
                        <div className="events-item">
                            <img className='events-img' src={event1} alt='Conexões Periféricas'/>
                            <h2>Festival de maracatu</h2>
                            <h4>14/08/22</h4>
                            <h5>Recife Antigo</h5>
                            <Link className="button-events" target="_blank" to="https://www.instagram.com/p/C0CtGskOoKs/">  VER </Link>
                        </div>
                        <div className="events-item">
                            <img className='events-img' src={batalha}/>
                            <h2>Batalha Brega-Funk</h2>
                            <h4>14/08/22</h4>
                            <h5>Recife Antigo</h5>
                            <Link className="button-events" target="_blank" to="https://www.instagram.com/p/CzjwKlGPFc0/" alt='Batalha Brega-Funk'>  VER </Link>
                        </div>
                        <div className="events-item">
                            <img className='events-img' src={tambor}/>
                            <h2>Festival de maracatu</h2>
                            <h4>14/08/22</h4>
                            <h5>Recife Antigo</h5>
                            <Link className="button-events" target="_blank" to="/">  VER </Link>
                        </div>
                        <div className="events-item">
                            <img className='events-img' src={feju} alt='6º Festival da Juventude'/>
                            <h2>6º Festival da Juventude</h2>
                            <h4>10 à 19 de Novembro</h4>
                            <h5>Recife</h5>
                            <Link className="button-events" target="_blank" to="https://www.instagram.com/p/CymH7HMLpkO/">  VER </Link>
                        </div>
                        <Link class="button-plus" target="_blank" to="https://www.instagram.com/sejuvrecife/">  VER MAIS </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>        
    )
}

export default Home