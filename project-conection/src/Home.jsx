import Menu from "./Menu"

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
            <div className='teste(grid-img)'>
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
                <p className='text'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         </div>



        <div className="box-category">

         <h1 className='title'>CATEGORIAS</h1>
                <div>
                    <button className="button-event">
                        <p className='text-buttons'>EVENTOS</p>
                    </button>
                    <button className="button-event second-button">
                        <p className='text-buttons'>EVENTOS</p>
                    </button>
                </div>

                <div>
                    <button className="button-event">
                        <p className='text-buttons'>EVENTOS</p>
                    </button>
                    <button className="button-event second-button">
                        <p className='text-buttons'>EVENTOS</p>
                    </button>
                </div>

                <div>
                    <button className="button-event">
                        <p className='text-buttons'>EVENTOS</p>
                    </button>
                    <button className="button-event last-button">
                        <p className='text-buttons'>EVENTOS</p>
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