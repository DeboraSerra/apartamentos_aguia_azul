import React from 'react';
import { Map, Marker } from 'pigeon-maps';
import style from '../styles/Maps.module.css';

const Maps = () => {
  return (
    <main className={ style.main }>
      <h2>Onde estamos</h2>
      <section className={ style.map }>
        <Map height={500} defaultCenter={[-24.732198, -47.52125]} metaWheelZoom={ true } defaultZoom={11}>
          <Marker width={50} anchor={[-24.732198, -47.52125]} />
        </Map>
      </section>
      <section className={ style.distance }>
        <h2>Distância entre as cidades</h2>
        <p>São Paulo/SP à Ilha Comprida/SP - 197km</p>
        <p>Curitiba/PR à Ilha Comprida/SP - 266km</p>
        <p>Sorocaba/SP à Ilha Comprida/SP - 205km</p>
      </section>
      <section className={ style.beach }>
        <h2>Localização de Praias e Balneários</h2>
        <ul>
          <h3>Do Boqueirão Norte à Ponta da Praia</h3>
          <li>
            <h4>Praia do Encanto (Km 0)</h4>
            <p>Britânia e Samburá</p>
          </li>
          <li>
            <h4>Praia do Icaraí (Km 0,67)</h4>
            <p>São Martinho , Sarnambi, Marusca A e Icaraí de Iguape</p>
          </li>
          <li>
            <h4>Meu Recanto (Km 2,10)</h4>
            <p>Iguape, Meu Recanto, Adriana, Recanto da Pesca , Marisol e Carolina</p>
          </li>
          <li>
            <h4>Praia Mar Azul (Km 3,07)</h4>
            <p>Yemar, Porto Velho II, Maria de Lourdes, Xandu, Wikiki, Márcia, Mar e Luz, Mar Azul, Redentor, Sunset, Recanto Adrimar e Jamaica</p>
          </li>
          <li>
            <h4>Ponta da Praia (Km 10,34)</h4>
            <p>Saveiros, Mares do Pontal, Ponta da Praia e Recanto Ana Cristina</p>
          </li>
        </ul>
        <ul>
          <h3>Do Boqueirão à Ponta de Trincheira</h3>
          <li>
            <h4>Praia do Encanto (Km 0)</h4>
            <p>Monte Carlo, Di Franco, Pres. Kennedy, Leão de Iguape, Bermudas, Volpara, Marambaia, Atlântico, Cláudia Mara, Flor de Iguape, Ancarpe e Sete de Setembro</p>
          </li>
          <li>
            <h4>Praia das Garças (Km 3,7)</h4>
            <p>Balneários Vila Real, Vila Félice, Marilena, Canadá, Terraças, Curitiba, Vitória, Cativeiras, Júlia Fortes e Jardim Lusitano</p>
          </li>
          <li>
            <h4>Praia de Maratayama (Km 9,1)</h4>
            <p>Jardim Portugal, Jardim Primavera, Dois Mares, Cigarras, Aragarças e São Januário</p>
          </li>
          <li>
            <h4>Praia Samambaias (Km 12,20)</h4>
            <p>Santa Mônica, Mares do Sul, Patropi, Três Poderes, Brisa do Mar, Recanto do Pescador, Belo Mar, Ilha do Sol, Samambaia, Luis Antônio, Praia Encantada, São Carlos, Nova Capri, Jardim Tropical I e II</p>
          </li>
          <li>
            <h4>Praia do Viareggio (Km 15)</h4>
            <p>Estrela Dalva, Brasília, P das Flores, Ipanema I e II, Estrela, Feitiço do Mar, Guarapuava, Sinfonia do Mar e Viaréggio</p>
          </li>
          <li>
            <h4>Praia do Castelo (Km 17,60)</h4>
            <p>Mar Limpo, Janaina II, Diamante, Rec Janaina, Praia do castelo, Vila Nova, Jd Imperador, Barão de Jundiaí e Jardim Lucimar</p>
          </li>
          <li>
            <h4>Praia Ponta Grossa (Km 19,75)</h4>
            <p>Monte Alegre, Lilian, Jd Colonial, Bahamas, Costa do Marfim, Cidade de Deus I e II, Eldorado I e II, Praia São Vicente, Praia Iguaçu, Iracema e Praia Clube</p>
          </li>
          <li>
            <h4>Praia Ubatuba (Km 22,85)</h4>
            <p>P. Azul do Atlântico , Andorinha e Andorinha I, Portal da Ilha, Itapuã, Jd da Ilha, Barão de Itararé, Jd Nova Tóquio, R Carmelita e Ubatuba</p>
          </li>
          <li>
            <h4>Praia das Pedrinhas (Km 25,85)</h4>
            <p>Jardim América I e II, dos Pescadores, Mar del Plata, Pago Pago e Pedrinhas</p>
          </li>
          <li>
            <h4>Praia Costa do Sol (Km 28,9)</h4>
            <p>Credianópolis</p>
          </li>
          <li>
            <h4>Praia Juruvaúva (Km 31,35)</h4>
            <p>Jd Mirabela, Recanto Dr. José Landulfo, Sítio do Sapé, Cidade Oriental , Costa do Mar e Maresol</p>
          </li>
          <li>
            <h4>Praia Costa Linda (Km 34,55)</h4>
            <p>Cristina e Cristina/Beira Mar</p>
          </li>
          <li>
            <h4>Praia dos Papagaios (Km 36,85)</h4>
            <p>Costa do Topázio e Ancoradouro</p>
          </li>
          <li>
            <h4>Praia Boa Vista (Km 39,25)</h4>
            <p>Gisele IV, Gisele III, Gisele II, Matia Alice e Costa Real</p>
          </li>
          <li>
            <h4>Praia Céu Azul (Km 41,75)</h4>
            <p>Céu Azul, Costa do Sol, Ouro Azul I e II, Vila Rica, Costa e Imperial</p>
          </li>
          <li>
            <h4>Praia Ponta da Trincheira (Km 45,20)</h4>
            <p>Cananéia, Park, Jd América, Barra do Perequê, Jd. Europa, Marlin Cananéia, Pouso Alegre e Portal Trincheira</p>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Maps;
