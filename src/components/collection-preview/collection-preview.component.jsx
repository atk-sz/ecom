import React from "react";
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title,items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((col,idx)=>( idx<4 )).map( ({id , ...others}) => {
                        return (<CollectionItem key={id} {...others} />)
                    }  
                    )
                }
            </div>
        </div>
    )
}

export default CollectionPreview;