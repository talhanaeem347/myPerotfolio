export default () => {
    return (
        <div className="bg-gray-600 h-12">
            <div className="p-2 w-full text-center flex justify-around items-center">
                <p className="leading-normal"><i className="fa-regular fa-copyright"></i> Talha</p>
                <span className="flex  ">
                    <a className="bg-gray-200 border rounded-full p-1 px-3">
                    <i className="fa-brands fa-facebook-f fa-lg"></i>
                    </a>
                    <a className="ml-4 bg-gray-200 border rounded-full p-1 px-2">
                    <i className="fa-brands fa-twitter fa-lg"></i>
                    </a>
                    <a className="ml-4 bg-gray-200 border rounded-full p-1 px-2">
                    <i className="fa-brands fa-instagram fa-lg"></i>
                    </a>
                    <a className="ml-4 bg-gray-200 border rounded-full p-1 px-2">
                    <i className="fa-brands fa-linkedin-in fa-lg"></i>
                    </a>
                </span>
            </div>
        </div>
    )
}