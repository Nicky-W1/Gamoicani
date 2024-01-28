import "./app.css";
import Header from './Components/Header';
import About from './Components/About';
import Information from "./Components/Information";
import Members from "./Components/Members";
import { memberObject } from "./Components/Posts";
import Comments from "./Components/Comments";
import Footer from "./Components/footer";



function App() {
  return(
    <div className="App">
        <Header />
        <About />
         <Information />
         
         <div className="Members grid grid-cols-3 place-items-center gap-12 mt-80 ">
         {
          memberObject.map(value => {
            return <Members key = {value.id} 
                            name = {value.name}
                            src = {value.img}
            />
          })
        }
         </div>

         <Comments />
         <Footer />
      
    </div>
  
  )
  
}

export default App;
