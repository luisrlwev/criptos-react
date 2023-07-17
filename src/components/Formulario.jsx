import React from 'react'
import styled from '@emotion/styled'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 7px;
    letter-spacing: 3.4px;
    cursor: pointer;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7dfe;
    }
`

const Formulario = () => {
  return (
    <form>
        <InputSubmit type="submit" value='Cotizar'/>
    </form>
  )
}

export default Formulario