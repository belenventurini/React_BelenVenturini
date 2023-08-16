
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemContainer from './components/ItemContainer/ItemContainer';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


//import { useState } from 'react';
//import ButtonComponent from './components/ButtonComponent/ButtonComponent';

const App = () => {

  return (
    <div className='box'>

      <nav className='boxNav'>
      < NavBarComponent />
      </nav>

      <div className='boxContainer'>
      <ItemContainer greeting="Bienvenidos a GO!" />
      </div>

    </div>
  )
}
export default App
