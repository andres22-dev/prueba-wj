import React from 'react'
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
const MainPage = () => {
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
            <TextField id="standard-basic" label="Standard" />
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