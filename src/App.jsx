import './App.css'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
