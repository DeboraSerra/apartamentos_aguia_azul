import React from 'react';
import style from '../styles/AboutUs.module.css';

const AboutUs = () => {
  return (
    <main className={ style.main }>
      <section className={ style.us }>
        <h2>Quem somos nós</h2>
        <p>Somos um grupo familiar que ficou encantado com a paz e a tranquilidade local e resolvemos nos estabelecer na Ilha. Escolhemos o nome “ÁGUIA AZUL”, em virtude de a águia ser um símbolo de força, grandeza e majestade e na simbologia cristã aparece a águia, simbolizando talvez a ressurreição e o triunfo de Cristo e do cristianismo no mundo. A cor azul apresenta algumas palavras chaves como: estabilidade, profundidade, lealdade, confiança, sabedoria, inteligência, fé, verdade, eternidade entre outros significados. Surgindo, assim, o nome “FLATS ÁGUIA AZUL”, sugerindo os momentos em que a tranquilidade do mar reflete o azul do céu nos dando a sensação de paz e tranquilidade.</p>
        <p>Nossa missão é tentar oferecer aos clientes o espírito da boa hospitalidade, na pretensão de tentarmos ser a sua primeira escolha como sua casa, longe de casa. Para, assim, podermos criar oportunidades, fazendo a diferença na vida das pessoas, oferecendo descanso, aconchego lazer e tranquilidade. Nossa equipe familiar pretende estar sempre se dedicando aos clientes e o nosso compromisso é a busca da excelência em tudo o que estamos nos propondo a fazer. Voltando nossa Visão para o crescimento de forma consolidada, pretendendo ser a primeira escolha de hospedagem em Ilha Comprida-SP.</p>
        <p>Como Valores, postura perante o cliente e a sociedade, almejamos as metas abaixo:</p>
        <ul>
          <li>Profissionalismo</li>
          <li>Inovação</li>
          <li>Ética</li>
          <li>Renovação</li>
          <li>Responsabilidade social e ambiental</li>
          <li>Crescimento sustentável</li>
          <li>Excelência</li>
          <li>Valorização dos recursos humanos</li>
        </ul>
      </section>
      <section className={ style.city }>
        <h2>Sobre a cidade</h2>
        <p>Ilha Comprida foi batizada com esse nome devido ao seu extenso comprimento e largura reduzida. Com seus 74 quilômetros de praias totalmente preservadas, dunas e  vegetação de restinga completa o cenário natural.</p>
        <p>A Ilha é uma APA (Área de Proteção Ambiental*) criada em 1987 e foi elevada à condição de Estância Balneária em 1994 (http://www.ilhacomprida.sp.gov.br). No Boqueirão Sul há piscinas naturais de água salgada, milhares de aves e uma praia paradisíaca.</p>
        <p>A região também oferece praias mais agitadas com infraestrutura de quiosques a beira mar, restaurantes e meios de hospedagem.</p>
        <p>Vale a pena dedicar alguns dias para curtir e aproveitar ao máximo a Ilha Comprida e sua exuberante paisagem. O local ainda oferece boas e baratas opções de lazer, hospedagem e gastronomia. No início do ano, durante todo o mês de Janeiro, o município oferece eventos como o Ilha Verão com muitas opções de esporte, exposições, shows e lazer (como a divertida Corrida da Cerveja, no último dia do ano). Quem puder, vale a pena conhecer e se divertir.</p>
        <p>E quem visita a ilha entende os motivos dessa proteção. No local estão as últimas dunas intocadas do Estado de São Paulo, manguezais, falésias, rios e 74 quilômetros de praias de areia batida e sem poluição.</p>
        <p>Por ser bastante extensa a ilha tem duas opções de acesso. A primeira se dá por Iguape, através da ponte Prefeito Laércio Ribeiro. Por este caminho você terá acesso à parte mais agitada da ilha, conhecida como Boqueirão Norte. É onde podem ser encontrados os bares e restaurantes mais agitados e onde a vida noturna é o fator principal.</p>
        <p>Além da paisagem bonita, a Ilha Comprida  é, ainda, um paraíso natural. Pássaros ameaçados, como o Guará, são vistos sempre sobrevoando a região, especialmente próximo aos mangues, seu habitat de origem. Outro charme da ilha são os rios de água doce, que formam pequenas piscinas naturais próximas ao mar e também ajudam a refrescar os turistas.</p>
      </section>
    </main>
  )
}

export default AboutUs;
