import './category.css'
import categoryList from "./banner"
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa";
function Category(){

    return(
        <div className='support-wrapper'>
            <div className='support'>

                <div className='icon-wrapper'>
                     <CiDeliveryTruck  className='icon'/>

                     <h3>FREE SHIPPING</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam?</p>
                </div>
                <div className='icon-wrapper'>
                     <RiCustomerService2Fill className='icon'/>
                    <h3>ONLINE SUPPORT 24/7</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, labore?</p>

                </div>
                <div className='icon-wrapper'>
                    <FaDollarSign className='icon'/>
                    <h3>MONEY BACK GURANTEE</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, dolor.</p>
                </div>
            </div>
            <div className='category-wrapper'>
                <div  className='category-details'>
                <h3>Product Category</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit fugiat quos!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nemo.</p><br />
                <h3>View all Products</h3>     
                </div>
                    {categoryList.map((details, index)=><div key={index} className='category-img'>
                     <img src={details.banner} alt="" />
            </div>
                              
        )}
            </div>
         
        </div>
       
        
    )
}

export default Category;