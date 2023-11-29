
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home' ;
import Informacoes from './Informacoes'
import Contato from './Contato'
import Projeto from './Projeto';
function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/informacoes'element={<Informacoes/>}></Route>
          <Route path='/contato'element={<Contato/>}></Route>
          <Route path='/projeto' element={<Projeto/>}></Route>
        </Routes>
      </BrowserRouter>  
  )
}

export default App