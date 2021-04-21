import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const cart=props.cart;
    let name = cart.map(pd=> {
        let fullname=pd.name;
        let nameOr ='';
        let count=0;
        for(let i=0; i<fullname.length; i++){
            if(fullname[i]===','&&count<1){
                count +=1;
            }
            else if(count<1){
                nameOr+=fullname[i];
            }
        }
        return nameOr+', ';
    });
    
    let total = cart.reduce((total, prd)=> total+prd.price,0);
    let shippingCost = 12.99;
    if (total>50){
        shippingCost= 0;
    } else if(total>25){
        shippingCost=10;
    }else if (cart.length===0){
        shippingCost =0;
    }
    let tax = (((total+shippingCost)/100)*25).toFixed(3);
    let grandTotal = (total+shippingCost+parseFloat(tax)).toFixed(3);

    return (
        <div>
            <h3>Order Summery</h3>
            <h6>Items Ordered:{cart.length}</h6>
            <p>Items:{name}</p>
            <p>Shipping Cost :{shippingCost}</p>
            <p>Total before tax :{total}</p>
            <p>Estimated Tax :{tax}</p>
            <h4>Order Total :{grandTotal}</h4>
            <button className='reviewYorOrder'onClick={console.log(cart)}>Review your order</button>
        </div>
    );
};

export default Cart;