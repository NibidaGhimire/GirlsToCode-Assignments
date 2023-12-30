import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import SideNav from './components/SideNav'

function App() {

  return (
    <div className='flex flex-col items-center h-screen'>
      <Header  title="Header" />
      <div className='flex flex-row w-full h-full '>
        <SideNav title="SideNav" />
        <MainContent  title="Main Content" />
      </div>
      <Footer  title="Footer" />
    </div>
  )
}

export default App
