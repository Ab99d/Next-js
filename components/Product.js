import React from 'react'
import Image from 'next/image'
import productstyle from './../styles/product.module.css'
import Link from 'next/link'

const Product = ({product}) => {
    const {title, price, image, id} = product 
    return ( 
        <div className={productstyle.product}>
            <div>
                <Image src={image} width="200px" height="200px"/>
            </div>
            <div>
                <ul>
                    <li>
                        {title}
                    </li>
                    <li>
                        {price}
                    </li> 
                    <li>
                        {id}
                    </li> 
                </ul>
                {/* <Link href={`/products/${id}`}><a className="button"></a></Link> */}
            </div>
        </div>
    )
}

export default Product