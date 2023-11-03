import { useParams } from 'react-router-dom'

const SearchResult = () => {
  const { query } = useParams()

  return (
    <>
      <h2>Search result:</h2>
      <p>{query}</p>
    </>
  )
}

export default SearchResult
