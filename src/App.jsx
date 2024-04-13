import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import BrowsePage from './pages/BrowsePage'
import Dashboard from './pages/Dashboard'
import ChatsPage from './pages/ChatsPage'
import AddBookPage from './pages/AddBookPage'
import BookDetails from './pages/BookDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<MainLayout/>}>
      <Route index element = {<HomePage/>} />
      <Route path='/browse' element = {<BrowsePage/>}/>
      <Route path='/books/:id' element = {<BookDetails/>} />
      <Route path='/chats' element = {<ChatsPage/>}/>
      <Route path='/add-book' element = {<AddBookPage/>}/>
      <Route path='/dashboard' element = {<Dashboard/>}/>
      <Route path='*' element = {<NotFoundPage/>} />
    </Route>
  )
)

function App() {

  return <RouterProvider router = {router} />

}

export default App
