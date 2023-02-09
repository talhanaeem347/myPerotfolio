import { useState } from "react"

export default () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [messageErr, setMessageErr] = useState("")
    
    const chackName = (name) => {
        if (name.length < 3) {
            setNameErr("invalid name!" )
            return false
        }
        setNameErr( "" )
        return true
    }
    const chackEmail = (email) => {

        if (email.length < 3) {
            setEmailErr("invalid email")
            return false
        }
        setEmailErr( "")
        return true
    }
    const chackMessage = (message) => {
        if (message.length < 8) {
            setMessageErr("Message must be at least 8 characters")
            return false
        }
        setMessageErr("" )
        return true
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const nameValid = chackName(name)
        const messageValid = chackMessage(message)
        const emailValid = chackEmail(email)
        if (nameValid && emailValid && messageValid) {
            setMessage(" ");
            setName("");
            setEmail("");
            console.log("Form is valid")
        }
        else
        console.log("Form is Invalid")
    }

    
    return (
        <section className="w-secreen h-screen bg-teal-200 flex items-center justify-center">
            <section className="text-gray-600 body-font relative flex items-center   ">
                <div className="container p-5 py-2 mx-auto shadow-lg border-2 border-b-0 lg:w-3/5 md:w-3/5 w-full">
                    <form onSubmit={handleSubmit} >

                        <div className="flex flex-col text-center w-full mb-5">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font my-2 text-gray-900">Contact Us</h1>
                        </div>
                        <div className=" mx-auto shadow-md p-2 border-2 border-b-0">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 lg:w-1/2 md:w-1/2  w-full">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name </label>
                                        {nameErr && <p className="text-red-400 text-xs mb-1">{nameErr} </p>}
                                        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        {emailErr && <p className="text-red-400 text-xs mb-1">{emailErr}</p>}
                                        <input placeholder="someone@example.com" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                        {messageErr && <p className="text-red-400 text-xs mb-1">{messageErr}</p>}
                                        <textarea placeholder="Message" value={message}  onChange={(e) => setMessage(e.target.value)} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">send</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}