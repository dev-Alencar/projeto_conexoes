import Menu from "./Menu"


import './noticias.css'

import artevisual from './assets/artevisual.jpg'
import grafiti from './assets/grafiti.webp'
import grupo from './assets/grupo.jpg'
import teatrocultural from './assets/teatrocultural.jpg'


function Noticias () {
    return (
        <div>
             <Menu/>

        <div className="main"> 
        <div className='box-project'>
                <p className='text-project'>
                    Entendendo o quão importante é colaborar para a construção de projetos e melhorias voltadas à juventude, nós idealizamos esse projeto. Ele foi criado com o objetivo de promover e divulgar os eventos culturais organizados pela SEJUV, além de apoiar os profissionais envolvidos nesse trabalho tão importante.
                </p>
            </div>
            
            <section className='banner'>
                <img src={artevisual} className='b1' alt=''></img>
                <img src={grafiti} className='b2' alt=''></img>
                <img src={grupo} className='b3' alt=''></img>
                <img src={teatrocultural} className='b4' alt=''></img>
            </section>

          
        </div> 

        </div>
    )
}

export default Noticias