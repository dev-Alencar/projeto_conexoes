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
import resultconexoes from './assets/resultconexoes.jpg'
import conexoes from './assets/conexoes.jpg'
import conexoes2 from './assets/conexoes2.png'
import municipal from './assets/municipaljuventude.png'
import condicao from './assets/condicao.png'
import juventudep from './assets/juventudepar.png'


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
                        <h4>Resultado 18/11/2023</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={editais} alt='img1'/>
                        <h2>SELEÇÃO DE EXPRESSÕES ARTÍSTICAS JUVENIS</h2>
                        <h4>Polo Ibura</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={editais} alt='img1'/>
                        <h2> 6º Festival da Juventude</h2>
                        <h4>Inscrições Abertas!</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={resultconexoes} alt='img1'/>
                        <h2> 3ª Edição do Programa Conexões Periféricas 2023</h2>
                        <h4>Resultado</h4>
                        <Link target="_blank" className="button-edit" to="https://drive.google.com/file/d/1Do20zsQqJmm4JkQJ0UzfDXyqNrsDpTOb/view"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={conexoes} alt='img1'/>
                        <h2> Projeto Conexões Perifericas</h2>
                        <h4>Curso de Programação web</h4>
                        <Link target="_blank" className="button-edit" to="https://favela.org.br/edital-academia-conexoes-perifericas/"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={juventudep} alt='img1'/>
                        <h2>Juventude Participa</h2>
                        <h4>Disseminação sobre o EJ no Recife</h4>
                        <Link target="_blank" className="button-edit" to="https://drive.google.com/file/d/1wKjQI0qxNWC7olBXwnsNs_9UUqqUU6X3/view"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={municipal} alt='img1'/>
                        <h2> Plano Municipal de Juventude</h2>
                        <h4>RECIFE 2016-2026</h4>
                        <Link target="_blank" className="button-edit" to="https://drive.google.com/file/d/1hq27GIo1TY1j6Axl_Lyncdb2DlQLpJrm/view"> saiba mais </Link>
                    </div>
                    <div className="box-item">
                        <img className="edit-img" src={condicao} alt='img1'/>
                        <h2> Condição Juvenil</h2>
                        <h4>Reflexos a partir do Recife</h4>
                        <Link target="_blank" className="button-edit" to="https://drive.google.com/file/d/1Sd5cAfrQRlRUIFZMmIZnJWeh8ZDo5pCe/view"> saiba mais </Link>
                    </div>
                    
                </div>
            <h1 className='title-informacoes'>Formulários</h1>
                <div className="box-form">
                    <div className="box-item">
                        <img className="edit-img" src={formularios} alt='img1'/>
                        <h2> 5º Conferencia Municipal de Juventude do Recife</h2>
                        <h4>Inscrições Encerradas!</h4>
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
                        <img className="edit-img" src={conexoes2} alt='img1'/>
                        <h2> Programa Conexoes Perifericas - 2º Turma - 2023</h2>
                        <h4>Inscrições Encerradas!</h4>
                        <Link target="_blank" className="button-edit" to="/"> saiba mais </Link>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Informacoes