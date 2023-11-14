
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home' ;
import Sobre from './Sobre'
import Contato from './Contato'
function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/sobre'element={<Sobre/>}></Route>
          <Route path='/contato'element={<Contato/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App