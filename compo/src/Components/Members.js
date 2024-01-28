const Members = ({name, src}) => {
    return(
      
        <>
          
       <div className="w-full">
 
        <div className="members w-1/2 m-auto ">
             
             <img className="rounded-lg border-green-500 border-4 cursor-pointer scale-100 ease-in duration-700 hover:scale-110 shadow-green-400 shadow-md" src = {src} />
             <h2 className="text-white font-bold mt-6">{name}</h2> 
             
      </div>
      </div>
      </>
    )
}

export default Members;
