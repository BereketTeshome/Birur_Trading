import React, { useState } from 'react'
import Logo from "../../public/logo.png"
import { Menu, X } from 'lucide-react'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='fixed top-0 z-50 w-full px-4 bg-amber-800 md:px-0'>
            <div className='flex items-center justify-between py-2 mx-auto max-w-7xl'>
                {/* logo section */}
                <div className='flex items-center'>
                    <img src={Logo} alt="" className='w-24 h-16' />
                    <h1 className='text-2xl text-white font-cursive'>Birur Trading</h1>
                </div>
                {/* menu section */}
                <nav className='items-center hidden md:flex gap-7'>
                    <ul className='flex items-center font-semibold text-white text-l gap-7'>
                        <a href="/"><li className='cursor-pointer'>Home</li></a>
                        <a href="#menu"><li className='cursor-pointer'>Menu</li></a>
                        <a href="#about"><li className='cursor-pointer'>About</li></a>
                        <a href="#testimonial"><li className='cursor-pointer'>Testimonial</li></a>
                    </ul>
                    <a href="#contact"><button className='px-3 py-1 text-white rounded-md bg-amber-800 hover:bg-amber-900'>Contact</button></a>
                </nav>
                {
                    open ? <X onClick={() => setOpen(false)} className='text-white w-7 h-7 md:hidden' /> : <Menu onClick={() => setOpen(true)} className='text-white w-7 h-7 md:hidden' />
                }
                 
            </div>
            <ResponsiveMenu open={open} setOpen={setOpen} />
        </div>
    )
}

export default Navbar
