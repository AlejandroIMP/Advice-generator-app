import { useEffect, useState } from 'react'
import QuoteContainer from './components/QuoteContainer/QuoteContainer'
import { fetchRandomQuote } from './services/quoteService'
import './App.scss'
function App () {
  const [quote, setQuote] = useState('')
  const [id, setId] = useState(0)

  useEffect(() => {
    fetchRandomQuote().then((newQuote) => {
      setQuote(newQuote.advice)
      setId(newQuote.id)
    })
  }, [])

  const handleClick = async () => {
    const items = await fetchRandomQuote().then((newQuote) => {
      setQuote(newQuote.advice)
      setId(newQuote.id)
    })
  }

  return (
    <main>
      <h1 className='main--title'>Random Advice Generator</h1>
      <QuoteContainer
        quote={quote}
        id={id}
        handleGenerate={handleClick}
      />
      <div className='attribution'>
        Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a href='#'>Alejandro Sunuc</a>.
      </div>
    </main>
  )
}

export default App
