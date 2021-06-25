import React from 'react';
import {ItemList} from './components/ItemList';

export const ItemListContainer = (props) => {
    return (
        <div>
            <h5 className="text-center font-italic">{ props.greating }</h5>
            <ItemList />
        </div>
    )
}
