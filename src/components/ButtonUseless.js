import React, {useState} from 'react'

const Button = (props) => {

    const [txtBtn, setTxtBtn] = useState(props.children)
    const [isClicked, setIsClicked] = useState(false)
    const [colorBtn, setColorBtn] = useState("SecondColor")
    const [transitionColor, setTransitionColor] = useState("bg-yellow-400")

    const handleOver = () => {
        if(!isClicked){
            setTxtBtn("Attention, ce bouton est inutile !")
        }
    }

    const handleExit = () => {
        if(!isClicked){
            setTxtBtn(props.children)
        }
        setColorBtn("SecondColor")
        setTransitionColor("bg-yellow-400")
    }

    const handleClick = () => {
        setTxtBtn("Je vous l'avais bien dit !")
        setTransitionColor("bg-red-600")
    }

    // transition duration-50 ease-in-out
    const css = `${colorBtn}
                rounded-3xl border-4 p-2
                hover:${transitionColor} transform hover:scale-110`

    return(
        <span className={css} onMouseOver={()=>handleOver()} onMouseLeave={()=>handleExit()} onClick={()=>handleClick()}>{txtBtn}</span>
    )
}

export default Button