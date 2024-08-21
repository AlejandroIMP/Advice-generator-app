import './Quote.scss'

const Quote = ({ quote }) => {
  return (
    <div className='quote'>
      <p>"{quote}"</p>
    </div>
  )
}

export default Quote
