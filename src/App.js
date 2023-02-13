import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Belanja from "./component/Belanja"
import Detail from "./component/Detail"
import Home from "./component/Home"
import { motion } from "framer-motion"
import { useState } from "react"

const variants = {
    open: {x: 0},
    closed: {x: -500}
}


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    

    return (
        <>
            <nav className="flex p-5 items-center bg-stone-300 relative">
                <div className="basis-1/3 flex items-center gap-x-2">
                    <button onClick={() => setIsOpen(!isOpen)} type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <h1 className="text-xl font-semibold">Menu</h1>
                    <motion.div 
                        animate={isOpen?"open":"closed"}
                        variants={variants}
                    className="fixed left-0 top-0 bottom-0 right-2/3 bg-slate-900 flex flex-col">
                        <button onClick={() => setIsOpen(!isOpen)} className="font-bold text-xl mx-auto text-red-600 hover:text-red-800">CLOSE</button>
                        <ul className="flex flex-col gap-y-5 justify-center h-full text-white items-center p-5">
                            <li className="hover:underline underline-offset-8 font-semibold text-2xl"><NavLink to={'/login'}>Login</NavLink></li>
                            <li className="hover:underline underline-offset-8 font-semibold text-2xl"><NavLink to={'/'}>Home</NavLink></li>
                            <li className="hover:underline underline-offset-8 font-semibold text-2xl"><NavLink to={'/belanja'}>Belanja</NavLink></li>
                        </ul>
                    </motion.div>
                </div>
                <div className="basis-1/3 flex flex-col items-center gap-y-2">
                    <h1 className="font-bold text-3xl">Hyper <span className="text-red-500">Beast</span></h1>
                    <ul className="flex gap-x-5">
                        <li className="hover:underline underline-offset-8"><NavLink to={'/'}>Asus</NavLink></li>
                        <li className="hover:underline underline-offset-8"><NavLink to={'/belanja'}>Macbook</NavLink></li>
                        <li className="hover:underline underline-offset-8"><NavLink to={'/login'}>Acer</NavLink></li>
                    </ul>
                </div>
                <form action="" className="basis-1/3 flex justify-end ">
                    <input type="text" placeholder="Search . . . . " className="rounded-lg px-3 py-1 " />
                </form>
            </nav>
       
        </>
    )
}


function App(){

    return (
        <BrowserRouter>
            
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/belanja" element={<Belanja />}>
                        <Route path="detail" element={<Detail />}/>
                    </Route>
                    <Route />
                </Routes>
        </BrowserRouter>
    )
}

export default App