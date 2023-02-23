import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import cardData from './data'

function App() {
  console.log(cardData)
  const cardElements = cardData.map(data => {
    return <Card 
            key={data.id}
            {...data}
            />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">
        {cardElements}
      </section>
    </div>
  )
}

export default App
