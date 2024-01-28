const Header = () => {
    return(
        <div className = "w-full bg-black opacity-90 sticky relative top-0 left-0 z-50 p-8 shadow-lg shadow-green-800 flex items-center justify-between">
            <div class = "logo">
                <img className = "w-20 cursor-pointer ml-4" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFzfEdGPGdwvl76w-B95e8USL2mIVeR5viw&usqp=CAU"></img>
            </div>

            <div className = "nav text-white text-xl">
                <ul className = "flex mr-16">
                    <li className = "ml-8 border-2 p-2 border-green-800 rounded-lg ease-in-out duration-1000 hover:text-green-500  "><a href= "#">მთავარი</a></li>
                    <li className = "ml-8 border-2 p-2 border-green-800 rounded-lg ease-in-out duration-1000 hover:text-green-500  "><a href= "#">შესახებ</a></li>
                    <li className = "ml-8 border-2 p-2 border-green-800 rounded-lg ease-in-out duration-1000 hover:text-green-500  "><a href= "#">წევრები</a></li>
                    <li className = "ml-8 border-2 p-2 border-green-800 rounded-lg ease-in-out duration-1000 hover:text-green-500  "><a href= "#">სხვა</a></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;