
import './App.css';
import Category from './category';
import Footer from './footer/Footer';
import ImgSlider from './ImgSlider';
import Navbar from './navbar/navbar';
import Newsletter from './news/newsletter';
import Products from './productshow';



function App() {
  return (
   
      <div className='back'>
         
      <Navbar/>
          
          <div className='backbanner'>
            <div className='banner-content'>
            <h1>MINIMALIZED</h1>
            <p>interial style</p>
            <button>Show Categories</button>
            </div>
            
      </div>
     
      <Category />
      <div className='collection-info'>
        <h2>SMART FURNITURE COLLECTIONN</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit fugiat quos!</p>
        <a href='#'>View Collection</a>
      </div>
      <Products/>
      <ImgSlider/>
      <Newsletter/>
      <Footer/>
      </div>
    
  );
}

export default App;
