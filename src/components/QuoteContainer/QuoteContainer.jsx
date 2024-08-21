import AdviceNumber from '../AdviceNumber/AdviceNumber'
import Quote from '../Quote/Quote'
import ButtonGenerate from '../ButtonGenerate/ButtonGenerate'
import './QuoteContainer.scss'
// eslint-disable-next-line react/prop-types
const QuoteContainer = ({ quote, id, handleGenerate }) => {
  return (
    <div className='main-container'>
      <AdviceNumber id={id} />
      <Quote quote={quote} />
      <span className='pattern-divider'> </span>
      <ButtonGenerate onClick={handleGenerate} />
    </div>
  )
}

export default QuoteContainer
