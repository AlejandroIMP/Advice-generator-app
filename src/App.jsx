import { useEffect, useState } from 'react'
import QuoteContainer from './components/QuoteContainer/QuoteContainer'
import './App.scss'
function App () {
  const [quote, setQuote] = useState('')
  const [id, setId] = useState(0)

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        setQuote(data.slip.advice)
        setId(data.slip.id)
      })
  }, []
  )
  const fetchRandomQuote = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        setQuote(data.slip.advice)
        setId(data.slip.id)
      })
  }
  return (
    <main>
      <QuoteContainer
        quote={quote}
        id={id}
        handleGenerate={fetchRandomQuote}
      />
    </main>
  )
}

export default App
