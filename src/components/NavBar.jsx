import { useState } from 'react'
export default () => {
    let navItems = [
        {
            name: 'Home',
            path: "#home",
            icon:<i className="fa-solid fa-house-chimney"></i>
        },
        {
            name: 'About',
            path: "#about",
            icon:<i className="fa-solid fa-address-card"></i>
        },
        {
            name: 'Services',
            path: "#services",
            icon:<i className="fa-solid fa-network-wired"></i>
        },
        {
            name: 'Work',
            path: "#work",
            icon:<i className="fa-solid fa-briefcase"></i>
        },
        {
            name: 'Contact',
            path: "#contact",
            icon:<i className="fa-solid fa-address-book"></i>
        },
    ]
    const [smNav, setSmNav] = useState(false)
    return (
        <header className="min-h-12  ">
            <div className="h-12">
                <div className="fixed h-12 z-40 bg-gray-200  w-full lg:px-5 md:p-5 sm:p-3 p-2 flex items-center" >
                    <div className="flex justify-between items-center  w-full">

                        <div className="w-32 h-10 flex items-center ">
                            <img src="/src/assets/images/Logo.png" alt="" />
                        </div>
                        <nav className='lg:flex md:flex sm:flex hidden'>
                            {
                                navItems.map((item, index) => {
                                    return (
                                        <div key={index} className="inline-block  rounded-md  hover:shadow focus:text-blue-700 hover:border-2 border-white ">
                                            <a href={item.path} className=" w-full h-full px-4 py-2" >{item.name}</a>
                                        </div>
                                    )
                                })
                            }
                        </nav>
                        <button className='mr-5 lg:hidden md:hidden sm:hidden flex' onClick={()=>setSmNav(!smNav)} ><i className="fa-solid fa-bars"></i></button>
                    </div>
                </div>
            </div>
            { smNav &&
                <div>
                   <div onClick={()=>setSmNav(false)} className="w-csreen h-screen absolute inset-0  z-40">
                    </div>
                    <div className="bg-gray-200 absolute z-40 right-0 flex flex-col w-48 p-2 rounded-bl-md ">
                        {
                            navItems.map((item, index) => {
                                return (
                                    <div key={index} className="border-t  rounded m-1  shadow ">
                                        <a href={item.path} className="w-full h-full flex items-center justify-between px-4" >{item.name} {item.icon} </a>
                                        
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            }
        </header>
    )
}