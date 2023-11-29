import './footer.css'

import LOGO1 from './assets/LOGO3.png'
import LOGO2 from './assets/LOGO2.png'

import { Link } from "react-router-dom"

function Footer () {
    return (
    <div>
        <div className='container-footer'>
            <section className='footer-list'>
                <nav className='footer-bar'>
                    <h3 class="footer-title"> Redes Sociais </h3>
                    <Link target="_blank" className='footer-item' to="https://www2.recife.pe.gov.br/node/292506"> Secretaria Executiva da Juventude - SEJUV </Link> <br/> <br/>
                    <Link target="_blank" className='footer-item' to="https://www.instagram.com/sejuvrecife/"> Instagram </Link> <br/> <br/>
                    <br></br>
                    <h3>© Projeto Conexões</h3>
                    <h5> Todos os direitos reservados.</h5>
                </nav>
            </section>
            {/* <div className='conexoes'>
                <h3>© Projeto Conexões</h3>
                <h5> Todos os direitos reservados.</h5>
            </div> */}
            <div className='footer-logo'>
                <nav>
                    <h3 class="footer-title"> Contato </h3>
                    <h4 className='footer-item'>Fone: (81) 3355-8008 
                    <br></br>E-mail: secretaria.sdsdhjpd@recife.pe.gov.br</h4>         
                </nav>
                <Link className='footer-item' to="/SUBIR A PAGINA"><img className="img-logof" src={LOGO1}></img></Link>
                <Link target="_blank" className='footer-item' to="https://www2.recife.pe.gov.br"><img className="img-logof" src={LOGO2}></img></Link>
            </div>
            
        </div>
    </div>   
    
    )
}

export default Footer