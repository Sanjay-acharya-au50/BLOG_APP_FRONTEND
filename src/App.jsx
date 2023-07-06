
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout'
import IndexPage from './pages/IndexPage'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'
import { UserProvider } from './context/UserContext'
import CreatePost from './pages/CreatePost'
import PostPage from './pages/PostPage'
import Edit from './pages/Edit'


axios.defaults.baseURL = "https://sanjay-blog-app.onrender.com";
axios.defaults.withCredentials = true;

function App() {

  return (

    <UserProvider>

    <Routes>
    <Route path='/' element={<Layout/>}>

    <Route index element={<IndexPage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/create' element={<CreatePost/>}/>
    <Route path='/post/:id' element={<PostPage/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>

    </Route>
    </Routes>


    </UserProvider>
  )
}

export default App
