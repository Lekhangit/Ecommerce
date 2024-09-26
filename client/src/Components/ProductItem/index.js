import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import  productitem1 from "../../assets/images/productitem1.jpg";
import { useContext, useState } from 'react';
import { MyContext } from '../../App';

const ProductItem =(props)=>{

    const context = useContext(MyContext);

    const viewProductDetails =(id)=>{
        context.setisOpenProductModal(true);
    }

   


    return(
        <>
         <div className={`productItem ${props.itemView}`}>
                            <div className="imgWrapper">
                                <img src={productitem1} alt='productItem1' className="w-100"></img>

                                <span className="badge badge-primary"> 28%</span>

                            <div className="actions">
                                <Button onClick={()=> viewProductDetails(1)}><TfiFullscreen/></Button>
                                <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                            </div>


                            </div>

                            <div className="info">
                            <h4>Werther's Original Caramel Hard Candies</h4>
                            <span className="text-success d-block">In Stock</span>
                            <Rating name="read-only" value={5} readOnly size ="small" precision={0.5}></Rating>


                            <div className="d-flex">
                                <span className="oldPrice">$20.00</span>
                                <span className="netPrice text-danger ml-2">$14.00</span>
                            </div>
                            </div>
                        </div>


                  

                       
        </>

    )

}

export default ProductItem;