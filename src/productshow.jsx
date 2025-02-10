import './products.css'

let collection =[
    {
        img:"/images/product-1.png",
        rs:"5000"

    },
    {
        img:"/images/product-2.png",
        rs:"8000"
    },
    {
        img:"/images/product-3.png",
        rs:"15000"
    },
    {
        img:"/images/product-4.png",
        rs:"3500"
    },
    {
        img:"/images/product-5.png",
        rs:"9000"
    },
    {
        img:"/images/product-14.png",
        rs:"11000"
    }
    
]

function Products(){
    return(
        <div className='product-back'>
            <div >
                <div className='feature-text'>
                <h2>FEATURED PRODUCTS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, officia.</p>
                </div>
           
        <div className='product-wrapper'>
            
        {collection.map((info,index)=>
        <div className='product'  key={index}>
            <div >
                     <img src={info.img} alt="products" />
                     
         </div>
         <div>
            <p>Special Product</p>
            <p>{info.rs}Rs</p>
         </div>
        </div>
        )}      
        </div>
        
            </div>
        </div>
    )
}
export default Products;