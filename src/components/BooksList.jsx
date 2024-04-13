import Book from './Book'
import { useEffect , useState } from 'react'
import Spinner from './Spinner'


const BooksList = ({isHome=false}) => {
  const [books,setBooks] = useState([])
  const [genres,setGenres] = useState([])
  const [loading,setLoading] = useState(true)
  const title = isHome ? 'Latest Books' : 'Books'


  useEffect(() => {
    fetchInitData()
  },[])

  let fetchInitData = async () => {
      const bookres = await fetch('/api/books')
      const bookdata = await bookres.json()
      const genreres = await fetch('/api/books')
      const genredata = await genreres.json()
      setGenres(genredata)
      setBooks(bookdata)
      setLoading(false)
  }
  return (
    <section className={`flex item-center justify-center flex-col bg-gray-500 m-5 text-gray-600 body-font p-5 ${isHome ? 'rounded-xl':'mr-0 rounded-l-xl'}`}>
        <h1 className='text-center text-white font-Abril my-2 text-5xl'>{title}</h1>
      <div className="container p-5 mx-auto">
      {loading ? (<Spinner loading={loading} />):(
        <div className='bg-gray-200 rounded-xl p-10'>
          <div className="grid grid-cols-3 gap-3 p-5">
            {(isHome ? books.slice(0,3) : books).map((book,index) => (
              <Book key = {index} book = {book} genres = {genres}/>
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  )
}

export default BooksList