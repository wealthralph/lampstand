import Home from "./pages/home/Home"
import styles from "./App.module.css"
import Navbar from "./component/navbar/Navbar"

const App = () => {
  return (
    <main className={styles.app}>
      <Navbar/>
      <Home/>
    </main>
  )
}

export default App