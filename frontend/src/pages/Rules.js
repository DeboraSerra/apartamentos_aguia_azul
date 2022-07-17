import React from 'react';
import style from '../styles/Rules.module.css';

const Rules = () => {
  return (
    <main className={ style.main }>
      <h2>Política e condições gerais de reserva</h2>
      <ol className={ style.list1 }>
        <li>Condições gerais de reservas</li>
        <ol  className={ style.list2 }>
          <li> check-in é realizado das 14h às 20h e o check-out das 08 às 11h. Check in anterior a este horário deverá ser informado ao responsável da pousada. O pagamento da reserva confirma o horário de entrada e saída que consta no e-mail  recebido pelo hospéde responsável e o não cumprimento do mesmo dará  direito do Apartamentos Águia Azul  a  retirada  dos pertences dos hóspedes do quarto e deixá-los na recepção ou em outro espaço, caso o mesmo não tenha consultado ou acertado previamente a continuidade de sua permanência  com o responsável  de acordo com a disponibilidade  da pousada.</li>

          <li>Não poderemos garantir a continuidade de hospedagem, além daquela prevista pelo hóspede durante a reserva, caso haja outra reserva efetuada para o período ou apartamento específico.</li>
          <li>A reserva só é confirmada mediante depósito antecipado de no mínimo 50% do valor do pacote. O restante deverá ser pago em dinheiro na  entrega da chave , pagamentos no débito cobramos 10% de acréscimo ou crédito 15%</li>
          <li>Reservas garantidas com pagamento antecipado à chegada serão mantidos por 12 horas, após o horário estabelecido para a entrada do hóspede na Pousada.</li>
          <li>Caso o hospede não possa chegar no horário previsto, pedimos que nos informe por telefone .</li>
          <li>Ao efetuar a reserva, o hóspede assume estar ciente das normas da Pousada.</li>
          <li>hospedes extras são permitidos somente com autorização da gerencia mediante custo adicional , inclusive crianças .</li>
        </ol>
        <li>Política da Pousada</li>
        <ol  className={ style.list2 }>
          <li>É PROIBÍDO FUMAR dentro dos quartos, banheiros e em áreas comuns aos hóspedes, conforme LEI ESTADUAL Nº 13.541, DE 07 DE MAIO DE 2009, sujeito a multa. Usar somente áreas externas e indicadas para tal.( Praça aberta  dentro da propriedade )</li>
          <li>A partir das 22h00min o SILÊNCIO é primordial para tranquilidade dos hóspedes, isso é muito importante para o convívio em grupo. Desobedecer está norma poderá causar o cancelamento da estadia como forma de preservar o bem-estar dos demais hóspedes e da Pousada.</li>
          <li>Os hospedes são responsáveis pela conservação dos quartos. O reparo de qualquer dano causado por hóspedes será cobrado.</li>
          <li>A Pousada não se responsabiliza por objetos ou dinheiro esquecidos ou deixados nas dependências.</li>
          <li>Reservamos o direito de cobrar os acertos antecipadamente, durante o check-in.</li>
          <li>O não comparecimento sem comunicação prévia na data prevista de chegada, será considerada “no show” (desistência sem cancelamento), a vaga ficará disponível por 12 horas, a partir do horário de entrada.</li>
          <li>Não aceitamos cheques.</li>
          <li>Os objetos, móveis, rouparia e utensílios de propriedade da Pousada são confiados aos senhores hóspedes para lhes proporcionar conforto e bem estar. Qualquer dano, destruição ou falta, será cobrado do hóspede responsável.</li>
          <li>Não é permitido receber visitas nos quartos ou em qualquer dependência da Pousada Apartamentos Águia Azul ,O acesso às dependências da Pousada é restrito aos hóspedes.</li>
          <li>Não é permitido estender roupas nas janelas, sacadas e em cima de móveis nos apartamentos.</li>
          <li>Pede-se o favor de desligar as luzes, televisão,  ou ventiladores prevenindo super aquecimento e  curto circuito, fechar a torneira e a porta nos momentos em que se ausentar do quarto.</li>
          <li>É terminantemente proibido guardar bicicletas, motocicletas ou qualquer objeto inapropriado dentro do quartos.</li>
        </ol>
        <li>Política de cancelamento para reservas com pagamento antecipado</li>
        <ol className={ style.list2 }>
          <li>Em caso de saída antecipada das diárias contratadas, não haverá devolução do valor pago antecipadamente.</li>
          <li>Em caso de redução de numero de pessoas no apartamento ,flats ou súites , o valor será o mesmo contratado anteriormente.</li>
          <li>Pedido de cancelamento:</li>
          <ol  className={ style.list3 }>
            <li>Com mais de 30 dias de antecedência da entrada na Pousada (check-in), devoluçãode 80% do valor pago o restante será para pagamentos de taxas para cancelamento , ou o  valor pago poderá ser usado em outra data dentro no prazo de 2 meses;</li>
            <li>Com mais de 7 dias 2 meses;</li>
            <li>Com menos de 7 dias da entrada na Pousada (check-in), não há devolução;</li>
            <li>Com menos de 24 hs ou no show** (não comparecimento no dia da chegada) , não devolução e não tem direito a crédito.</li>
          </ol>
        </ol>
      </ol>
      <p className={ style.obs }>**No show é uma desistência sem cancelamento, isto é, quando o hóspede não comparece ao hotel na data de entrada reservada.</p>
    </main>
  )
}

export default Rules;
