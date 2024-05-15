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
      <div className="content-container">
        <div className='heading-container'>
        <h2>Let's grow your</h2> 
        <h2>social presence.</h2>
        </div>{/* heading-container */}
        <div className="bubble target">
          🎯
        </div>{/* bubble_target */}
        
        <div className="bubble shop">
          🛍️
        </div>{/* bubble_shopping */}

        <div className="bubble rocket">
          🚀
        </div>{/* bubble_rocket */}

        <div className="bubble fire">
          🔥
        </div>{/* bubble_fire */}
      </div>
    </main>
  )
}

export default App
