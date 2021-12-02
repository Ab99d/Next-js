import React from 'react'
import errorstyle from './../styles/error.module.css'

const errorMassage = () => {
    return (
        <div className={errorstyle.error}>
            <h1>
                i am abood and this page is not found
            </h1>
        </div>
    )
}

export default errorMassage
