import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'



const BookDetails = ({}) => {
    const params = useParams()
    const [book, setBook] = useState(null)
    const [genre, setGenre] = useState(null)
    const [loading,setLoading] = useState(true)
    const [isfav, setIsfav] = useState(false)
    const book_id = params.id

    useEffect(() => {
        getBook()
    },[book_id])

    const getBook = async () => {
        const bookres = await fetch(`/api/books/${book_id}`)
        const bookdata = await bookres.json()
        setBook(bookdata)
        const genreres = await fetch(`/api/genres/${bookdata.genre}`)
        const genredata = await genreres.json()
        setGenre(genredata)
        setLoading(false)
    }



  return (
    <>
    <section className="bg-gray-500 m-4 rounded-xl text-gray-600 body-font overflow-hidden">
        <h1 className='text-5xl text-gray-700 font-bold text-center mt-10'>Book Details</h1>
        {loading ? (<Spinner loading={loading} />):(    
            <div className="container px-5 py-14 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className=" rounded-l-xl lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`http://127.0.0.1:8000${book.image}`}/>
                <div className="p-5 flex flex-col justify-between bg-gray-400 rounded-r-xl lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <div>
                        <h2 className="text-lg title-font text-gray-200 font-medium pb-2 tracking-widest">Genre : {genre.name}</h2>
                        <h1 className="text-gray-900 mt-9 font-semibold text-3xl title-font font-medium mb-5">{book.title}</h1>
                        <h2 className='font-bold'>Author : {book.author}</h2>
                        <div className="flex mb-4">
                        </div>
                        <p className="leading-relaxed text-gray-800 mt-7">{book.description}</p>
                    </div>
                    <div>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        </div>
                        <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">${book.price}</span>
                        <button className="flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">Contact Seller</button>
                        <button onClick={() => {setIsfav(!isfav)}} className={`rounded-full w-10 h-10  p-0 border-0 inline-flex items-center justify-center ${isfav? "text-red-500 bg-red-200" : "text-gray-500 bg-gray-200"} ml-4`}>
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            )}
        </section>
    </>
  )
}

export default BookDetails