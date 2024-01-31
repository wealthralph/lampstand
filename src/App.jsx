import Navbar from "./component/navbar/navbar"
import Home from "./pages/home/Home"
import styles from "./App.module.css"

const App = () => {
  return (
    <main className={styles.app}>
      <Navbar/>
      <Home/>
    </main>
  )
}

export default App