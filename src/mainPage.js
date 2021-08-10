import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import axios from 'axios';


const MainPage = () => {

const maximun = 1;
const minimun = 300;
const random = () => Math.floor(Math.random()*(maximun - minimun)+ minimun);

  const [paisRandom, setPaisRandom] = useState('');

  const getRandomPais = () => {


  }
  return (
    <>
      <div className="layoutcontainer">
        <header className="layoutcontainer__header">
          <h1 className="header__title">Whale Jaguar</h1>
          <div className="header__random">
            <Button variant="contained">Pais Aleatorio</Button>
            <div><img /><p>img</p></div>
          </div>
        </header>

        <section className="layoutcontainer__main">
          <div className="main__search">
            <h2>Buscar Por Nombre de pais</h2>
            <TextField id="filled-basic" label="Filled" variant="filled" />

          </div>
          <div className="main__data">
            <h2> Representando datos de forma simple</h2>
          </div>
        </section>
        
        <footer>
          <p>@andres22_dev</p>
        </footer>
      </div>
    </>
  )
}


export default MainPage;