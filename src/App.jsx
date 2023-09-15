
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  

  return (
    <>
      <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Home className=""></Home>
    <Cart></Cart>
    </div>
     
    </>
  )
}

export default App
