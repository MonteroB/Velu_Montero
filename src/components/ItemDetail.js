import React from 'react';
import {ItemCount} from './ItemCount';

const ItemDetail = ({ title, description, price, pictureUrl}) => {
    return (
        <div className="container">
            <div className="row detailBox">
                <div className="col-sm-6">
                 <img src={pictureUrl} alt={title} className="img-fluid mx-auto"/>
                </div>
                <div className="col-sm-6 detailBox">
                 <h3>{title}</h3>
                 <h6>Precio: ${price}</h6>
                 <ItemCount stock={5} initial={1}/>
                 <h6>{description}</h6>
                </div>
            </div>            
        </div>
    )
}
export default ItemDetail
