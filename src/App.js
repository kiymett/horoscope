import Main from "./components/Main"
import Header from "./header/Header"
import Navbar from "./navbar/Navbar"
import {data} from "./helper/data"

function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <Main data = {data}/>
    </div>
  )
}

export default App
