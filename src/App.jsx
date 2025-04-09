
// import { useState } from 'react';
import './App.css'
import Banner from './componants/Bannar/Banner';
import Footer from './componants/Footer/Footer';
import Navber from './componants/Navbar/Navber'
import Title from './componants/Title/Title'

function App() {
  
  // const [cart, setCart] = useState([]);

  return (
    <div className="">
      <Navber></Navber>
      <Banner></Banner>
      {/* <Title setCart={setCart} cart={cart}></Title> */}
      <Title/>
      <Footer></Footer>
    </div>
  );
}

export default App
