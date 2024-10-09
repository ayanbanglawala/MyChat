import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"
import MessageContainerMobile from "./components/Messages/MessageContainerMobile"


function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="p-0 lg:p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to='/login'/>} />
        <Route path="/login" element={authUser ? <Navigate to='/'/> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/'/> :<Signup />} />
        <Route path="/message" element={authUser ? <MessageContainerMobile /> : <Navigate to='/login'/>} />
      </Routes>
      <div><Toaster/></div>
    </div>
  )
}

export default App
