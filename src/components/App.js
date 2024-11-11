
import MovieList from "./MovieList";
import Navbar from "./Navbar"
import Test from "./Test";
import WelcomeMessage from "./WelcomeMessage";

const App = () =>{
  console.log('render App');
  return(
    <div>
      <Test/>
      <Navbar/>
      <MovieList/>
      {/* <WelcomeMessage  rollNo = {1}/>
      <WelcomeMessage name="vishal" /> */}

    </div>

  )
}

export default App;