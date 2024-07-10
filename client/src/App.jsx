import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./components/header"


export default function App() {
  return (
   <BrowserRouter>
     <Header/>
   <Routes>
  
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
    <Route path="/sign-out" element={<SignUp></SignUp>}></Route>
    <Route path="/about" element={<About></About>}></Route>
     <Route path="/profile" element={<Profile></Profile>}></Route>
   </Routes>
   </BrowserRouter>
  )
}