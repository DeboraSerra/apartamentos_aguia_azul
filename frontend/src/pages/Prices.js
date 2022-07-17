import React, { useState } from 'react';
import style from '../styles/Prices.module.css';

const Prices = () => {
  const [state, setState] = useState({
    season: 'packsTwoDaysOffSeason',
    people: 2,
    show: false,
  })
  const { season, people, show } = state;

  const packsTwoDaysOffSeason = {
    '2': 250,
    '4': 380,
    '5': 500,
    '6': 600,
  }

  const packsTwoDaysSeason = {
    '2': 1400,
    '5': 1990,
    '6': 2340,
  }

  const handleChange = ({ target: { name, value, checked } }) => {
    setState((prevSt) => ({
      ...prevSt,
      [name]: value || checked,
      show: false,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setState((prevSt) => ({
      ...prevSt,
      show: true,
    }))
  }

  return (
    <main className={ style.main }>
      <form className={ style.form } onSubmit={ handleSubmit }>
        <section className={ style.radioSect } onChange={ handleChange }>
          <label htmlFor="off">
            <input type="radio" name="season" id="off" value="packsTwoDaysOffSeason" onChange={ handleChange } checked={ season === 'packsTwoDaysOffSeason'} />
            Fora de temporada (Março a Novembro)
          </label>
          <label htmlFor="on">
            <input type="radio" name="season" id="on" value="packsTwoDaysSeason" onChange={ handleChange } checked={ season === 'packsTwoDaysSeason' } />
            Temporada (Dezembro a Fevereiro)
          </label>
        </section>
        <label htmlFor="people" className={ style.selectLabel }>Número de pessoas
          <select className={ style.select } name="people" id="people" onChange={ handleChange }>
            <option value="2">Até 2</option>
            <option value="4">Até 4</option>
            <option value="5">Até 5</option>
            <option value="6">Até 6</option>
          </select>
        </label>
        <button className={ style.button } type="button" onClick={ handleSubmit }>Consultar preço</button>
      </form>
      {show && season === 'packsTwoDaysOffSeason' && (
        <section className={ style.result }>
          <h2>Pacote para dois dias fora de temporada</h2>
          <p>Acomodações para até {people} pessoas por R${packsTwoDaysOffSeason[people].toFixed(2)}.</p>
        </section>
      )}
      {show && season === 'packsTwoDaysSeason' && (
        <section className={ style.result }>
          <h2>Pacote para dois dias durante a temporada</h2>
          <p>Acomodações para até {people} pessoas por R${packsTwoDaysSeason[people].toFixed(2)}.</p>
        </section>
      )}
      <p className={ style.obs }>Check in a partir das 16h da sexta feira e check out até meio dia do domingo.</p>
    </main>
  )
}

export default Prices;
