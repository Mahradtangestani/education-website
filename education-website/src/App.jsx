import {Navbar, Home, About, Course , Teacher, Contact, Footer } from "./components/index"

function App() {
  

  return (
    <div className="font-Poppins bg-Solitude">
        <Navbar/>
        <Home/>
        <About/>
        <Course/>
        <Teacher/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
