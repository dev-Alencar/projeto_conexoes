import Menu from "./Menu"
import Footer from "./Footer"
import { Link } from "react-router-dom"

import './informacoes.css'
import './index.css'

import editais from './assets/editais.jpg';
import formularios from './assets/formularios.jpg'
import resultempreendedor from './assets/resultempreendedor.jpg'
import empreendedor from './assets/empreendedor.jpg'
import insshow from './assets/insshow.jpg'


function Informacoes () {
    return (
        <div>
            <Menu/>
            <div className="main">
            <h1 className='title-informacoes'>Editais</h1>
                <div className="box-edit">
                    <div className="box-item">
                        <img className="edit-img" src={resultempreendedor} alt='img1'/>
                        <h2> LISTA DOS SELECIONADOS EMPREENDEDORES JOVENS</h2>
                        <h4>18/11/2023</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={editais} alt='img1'/>
                        <h2> 6º Festival da Juventude</h2>
                        <h4>Inscrições Abertas!</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={editais} alt='img1'/>
                        <h2> 6º Festival da Juventude</h2>
                        <h4>Inscrições Abertas!</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={editais} alt='img1'/>
                        <h2> 6º Festival da Juventude</h2>
                        <h4>Inscrições Abertas!</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={editais} alt='img1'/>
                        <h2> 6º Festival da Juventude</h2>
                        <h4>Inscrições Abertas!</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={editais} alt='img1'/>
                        <h2> 6º Festival da Juventude</h2>
                        <h4>Inscrições Abertas!</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={editais} alt='img1'/>
                        <h2> 6º Festival da Juventude</h2>
                        <h4>Inscrições Abertas!</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={editais} alt='img1'/>
                        <h2> 6º Festival da Juventude</h2>
                        <h4>Inscrições Abertas!</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                </div>
            <h1 className='title-informacoes'>Formulários</h1>
                <div className="box-form">
                    <div className="box-item">
                        <img className="edit-img" src={formularios} alt='img1'/>
                        <h2> 6º Festival da Juventude</h2>
                        <h4>Inscrições Abertas!</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={empreendedor} alt='img1'/>
                        <h2> Inscrição para Expositores - Festival das Juventudes 2023</h2>
                        <h4>Inscrições Encerradas!</h4>
                        <Link target="_blank" className="button-edit" to="https://docs.google.com/forms/d/e/1FAIpQLSf91nB_REerux6ls-92hcmaj5tq4-Y2ze8BF7fFjaZDbta_tw/closedform"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={insshow} alt='img1'/>
                        <h2> INSCRIÇÃO DE SHOW - 6º FESTIVAL DAS JUVENTUDES (2023)</h2>
                        <h4>Inscrições Abertas!</h4>
                        <Link target="_blank" className="button-edit" to="https://docs.google.com/forms/d/e/1FAIpQLScm6kfY2gJKzycTusoxOb-Smryg_HeUViqa2S5UOksOk4fTuw/viewform"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={formularios} alt='img1'/>
                        <h2> 6º Festival da Juventude</h2>
                        <h4>Inscrições Abertas!</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Informacoes