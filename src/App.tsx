import './App.scss'
import Logo  from './components/logo'
import ArrowIcons from './components/arrow-icons'

function App() {
  return (
    <main>
      <header className='header-container'>
        <Logo />
        <nav className="menu-options">
          <a>What we affer</a>
          <a>How it works</a>
          <a>Portifolio</a>
        </nav>
        <button>
          <div className='btn-face-white'>
          Contact us
          <ArrowIcons />
          </div>{/* btn-face-white */}

          <div className='btn-face-purple'>
          Contact us
          <ArrowIcons />
          </div>{/* btn-face-purple */}
        </button>
      </header>{/* header-container */}
    </main>
  )
}

export default App
