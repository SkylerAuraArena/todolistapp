import React from 'react'

const Button = (props) => {

    const css = `SecondColor
                rounded-3xl border-4 p-2
                transition duration-100 ease-in-out
                hover:bg-red-600 transform hover:scale-110`

    return(
        <span className={css}>{props.children}</span>
    )
}

export default Button