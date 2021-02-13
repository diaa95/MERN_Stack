import React from 'react'
const List = props => {
    return (
        <div>
            {props.product.map((product, idx)=>{
                return <p key={idx}>{product.title}, {product.description}, {product.price}</p>
            })}
        </div>
    )
}
export default List;