import { ModalProvider } from "../context/ModalContext"
import BentoGrid from "./components/BentoGrid"
import Home from "./pages/Home"


function App() {


  return (
    <>
      <ModalProvider>
        <BentoGrid />
      </ModalProvider>
      
    </>
  )
}

export default App
