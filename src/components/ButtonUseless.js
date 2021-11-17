import React, {useState} from 'react'

const Button = (props) => {

    const [txtBtn, setTxtBtn] = useState(props.children)
    const [colorBtn, setColorBtn] = useState("SecondColor")

    const handleOver = () => {
        setTxtBtn("Attention, ce bouton est inutile !")
        setColorBtn("bg-yellow-400")
    }

    const handleExit = () => {
        setTxtBtn(props.children)
        setColorBtn("SecondColor")
    }

    const handleClick = () => {
        setTxtBtn("Je vous l'avais bien dit !")
        setColorBtn("bg-red-600")
    }

    // transition duration-50 ease-in-out
    const css = `${colorBtn}
                rounded-3xl border-4 p-2
                transform hover:scale-110`

    return(
        <span className={css} onMouseOver={()=>handleOver()} onMouseLeave={()=>handleExit()} onClick={()=>handleClick()}>{txtBtn}</span>
    )
}

export default Button