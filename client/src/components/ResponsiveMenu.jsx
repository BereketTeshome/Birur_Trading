import React from 'react'

const ResponsiveMenu = ({ open, setOpen }) => {
    return (
        <div className={`${open ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 x-30 flex h-screen w-[75%] flex-col justify-between bg-amber-950 px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
            <div>
                <nav className='mt-12'>
                    <ul className='flex flex-col text-lg font-semibold text-white gap-7'>
                        <a href="/"><li onClick={()=>setOpen(false)} className='cursor-pointer'>Home</li></a>
                        <a href="#menu"><li onClick={()=>setOpen(false)} className='cursor-pointer'>Menu</li></a>
                        <a href="#about"><li onClick={()=>setOpen(false)} className='cursor-pointer'>About</li></a>
                        <a href="#testimonial"><li onClick={()=>setOpen(false)} className='cursor-pointer'>Testimonial</li></a>
                        <a href="#contact"><button onClick={()=>setOpen(false)} className='px-3 py-1 text-white rounded-md bg-amber-800 hover:bg-amber-900'>Contact</button></a>
                    </ul>
                </nav>
            </div>
           
        </div>
    )
}

export default ResponsiveMenu
