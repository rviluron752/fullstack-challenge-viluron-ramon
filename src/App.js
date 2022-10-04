import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home';
import PaletteDisplay from './routes/Palette/PaletteDisplay';
import { useContext, useEffect } from 'react';
import { getColorPalettes } from './service';
import { ColorPalettesContext} from './context/ColorPalettesContext'
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';
import LoginRef from './routes/Login/LoginRef';
import LoginControlled from './routes/Login/LoginControlled';
import PaletteCreation from './routes/Palette/PaletteCreation';

function App() {

  const { setColorPalettes } = useContext(ColorPalettesContext)

  useEffect(()=> {
    getColorPalettes()
    .then((data) => {
      setColorPalettes(data);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
      <div className='App'>
          <Routes>
            <Route path='/' element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path='login' element={<LoginRef/>}/>
              <Route path='palette/:id' element={<PaletteDisplay/>}/>
              <Route path='palette/create' element={<PaletteCreation/>}/>
            </Route>
          </Routes>
      </div>
  );
}

export default App;
