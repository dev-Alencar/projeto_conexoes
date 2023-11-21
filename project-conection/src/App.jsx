
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home' ;
import Informacoes from './Informacoes'
import Contato from './Contato'
import Noticias from './Noticias';
function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/informacoes'element={<Informacoes/>}></Route>
          <Route path='/contato'element={<Contato/>}></Route>
          <Route path='/noticias' element={<Noticias/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App