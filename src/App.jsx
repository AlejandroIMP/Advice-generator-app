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
  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      setQuote(data.slip.advice)
      setId(data.slip.id)
    } catch (err) {
      setQuote(err)
      setId('0')
    }
  }
  return (
    <main>
      <h1 className='main--title'>Random Advice Generator</h1>
      <QuoteContainer
        quote={quote}
        id={id}
        handleGenerate={fetchRandomQuote}
      />
      <div className='attribution'>
        Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a href='#'>Alejandro Sunuc</a>.
      </div>
    </main>
  )
}

export default App
