import './Cards.css'
import Card from './components/CardWithCSS';
import CardModule from './components/CardWithCSSModules';
import CardComponents from './components/CardWithStyledComponents';
import cards from './data/cards.json';

function Cards() {
  return (
    <>
      <h1>Cards</h1>

      <section>
        <h2>Cards with CSS</h2>

        <div className='list'>
          {
            cards.map((card, index) => <Card key={`card-${index}`} info={card} />)
          }
        </div>
      </section>

      <section>
        <h2>Cards with CSS Modules</h2>

        <div className='list'>
          {
            cards.map((card, index) => <CardModule key={`card-${index}`} info={card} />)
          }
        </div>
      </section>

      <section>
        <h2>Cards with Styled Components</h2>

        <div className='list'>
          {
            cards.map((card, index) => <CardComponents key={`card-${index}`} info={card} />)
          }
        </div>
      </section>
    </>
  )
}

export default Cards
