export const fetchRandomQuote = async () => {
  const response = await fetch('https://api.adviceslip.com/advice')
  const data = await response.json()
  const { advice } = data.slip
  const { id } = data.slip
  return { advice, id }
}
