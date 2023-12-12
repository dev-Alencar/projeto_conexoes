
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home' ;
import Informacoes from './Informacoes'
import Contato from './Contato'
import Projeto from './Projeto';
import Sejuv from './Sejuv';

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/informacoes'element={<Informacoes/>}></Route>
          <Route path='/contato'element={<Contato/>}></Route>
          <Route path='/projeto' element={<Projeto/>}></Route>
          <Route path='/sejuv' element={<Sejuv/>}></Route>
        </Routes>
      </BrowserRouter>  
  )
}

export default App