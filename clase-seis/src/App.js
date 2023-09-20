import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Nosotros from './Nosotros/Nosotros';
import Contacto from './Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
