import Menu from "./Menu"


import './projeto.css'

import artevisual from './assets/artevisual.jpg'
import grafiti from './assets/grafiti.webp'
import grupo from './assets/grupo.jpg'
import teatrocultural from './assets/teatrocultural.jpg'
import miss from './assets/miss.jpeg'
import conexoes3 from './assets/conexoes3.jpg'
import juventu from './assets/juventu.png'
import radialista from './assets/radialista.jpg'
import inovacao from './assets/inovacaourbana.jpg'
import Footer from "./Footer"


function Noticias () {
    return (
        <div>
            <Menu/>

        <div className="main"> 
           
            
            <section className='banner'>
                <img src={conexoes3} className='b1' alt=''></img>
                <img src={inovacao} className='b2' alt=''></img>
                <img src={radialista} className='b3' alt=''></img>
                <img src={miss} className='b4' alt=''></img>
            </section>
            <div className='box-project'>
                <p className='text-project'>
                    Entendendo o quão importante é colaborar para a construção de projetos e melhorias voltadas à juventude, nós idealizamos esse projeto. Ele foi criado com o objetivo de promover e divulgar os eventos culturais organizados pela SEJUV, além de apoiar os profissionais envolvidos nesse trabalho tão importante.
                </p>
            </div>
          
        </div> 
            <Footer/>
        </div>
    )
}

export default Noticias