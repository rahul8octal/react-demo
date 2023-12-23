import { createContext } from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import Route from "./routes/index";
// import Demo from './components/Demo'
// import Demo1 from './components/Demo1'
import Header from './components/Header';
import Http from "./Http";
const NameProvider = createContext();

function App() {

  const shopDetails = {
    user_name: 'octal',
    shop_name : 'octal team',
  };
  if(localStorage.getItem('token')){
    Http.setBearerToken(`${localStorage.getItem('token')}`);
  }
  return (


        <BrowserRouter>
        <NameProvider.Provider value={shopDetails}>
        <Header/>
        <Route />
        </NameProvider.Provider>
      </BrowserRouter>
  )
}

export default App;
export {NameProvider}