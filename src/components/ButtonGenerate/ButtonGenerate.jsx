import './ButtonGenerate.scss'

const ButtonGenerate = ({ onClick }) => {
  return (
    <button className='generate-btn' onClick={onClick}><span> </span></button>
  )
}

export default ButtonGenerate
