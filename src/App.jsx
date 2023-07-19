import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import ImgCripos from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      const cotizarCripto = async () => {
        const { moneda, cripto } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[cripto][moneda]);
      }
      cotizarCripto();
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen
        src={ImgCripos}
        alt='Imagen de las criptos'
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
    </Contenedor>
  )
}

export default App
