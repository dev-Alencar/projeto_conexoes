import Menu from "./Menu"
import Footer from "./Footer"
import { Link } from "react-router-dom"

import './informacoes.css'

import editais from './assets/editais.jpg';
import formularios from './assets/formularios.jpg'


function Informacoes () {
    return (
        <div>
            <Menu/>
            <h1 className='title-informacoes'>Editais</h1>
            <div className='editais-box'>
                <div>
                    <img className='editais-img' src={editais}/>
                </div>


                <div className='editais-text'>
                    <div className='box-escuro'>
                        <p>6º Festival das <br/> Juventudes</p>
                    </div>
                    <div className='box-claro'>
                        <p>Inscrições abertas</p>
                        <button>Saiba mais </button>
                    </div>
                </div>

                <div>
                    <img className='editais-img' src={editais}/>
                </div>


                <div className='editais-text'>
                    <div className='box-escuro'>
                        <p>6º Festival das <br/> Juventudes</p>
                    </div>
                    <div className='box-claro'>
                        <p>Inscrições abertas</p>
                        <button>Saiba mais </button>
                    </div>
                </div>

                <div>
                    <img className='editais-img' src={editais}/>
                </div>


                <div className='editais-text'>
                    <div className='box-escuro'>
                        <p>6º Festival das <br/> Juventudes</p>
                    </div>
                    <div className='box-claro'>
                        <p>Inscrições abertas</p>
                        <button>Saiba mais </button>
                    </div>
                </div>


                <h1 className='title-informacoes'>Formulários</h1>
                <div>
                    <img className='formularios' src={formularios}/>
                </div>
                <div className='box-formularios'>
                    <p className="text-fomulario">CHAMAMENTO PÚBLICO VIRTUAL <br/> PARA A 5ª CONFERÊNCIA MUNICIPAL <br/> DE JUVENTUDE DO RECIFE</p>

                    <button className="teste">
                    <Link className="button-inscrever" target="_blank"  to="/"> Inscreva-se </Link>
                    </button>

                </div>

                <div>
                    <img className='formularios' src={formularios}/>
                </div>
                <div className='box-formularios'>
                    <p className="text-fomulario">CHAMAMENTO PÚBLICO VIRTUAL <br/> PARA A 5ª CONFERÊNCIA MUNICIPAL <br/> DE JUVENTUDE DO RECIFE</p>

                    <button className="teste">
                    <Link className="button-inscrever" target="_blank"  to="/"> Inscreva-se </Link>
                    </button>

                </div>


                <div>
                    <img className='formularios' src={formularios}/>
                </div>
                <div className='box-formularios'>
                    <p className="text-fomulario">CHAMAMENTO PÚBLICO VIRTUAL <br/> PARA A 5ª CONFERÊNCIA MUNICIPAL <br/> DE JUVENTUDE DO RECIFE</p>

                    <button className="teste">
                    <Link className="button-inscrever" target="_blank"  to="/"> Inscreva-se </Link>
                    </button>

                </div>

                <div>
                    <img className='formularios' src={formularios}/>
                </div>
                <div className='box-formularios'>
                    <p className="text-fomulario">CHAMAMENTO PÚBLICO VIRTUAL <br/> PARA A 5ª CONFERÊNCIA MUNICIPAL <br/> DE JUVENTUDE DO RECIFE</p>

                    <button className="teste">
                    <Link className="button-inscrever" target="_blank"  to="/"> Inscreva-se </Link>
                    </button>

                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Informacoes