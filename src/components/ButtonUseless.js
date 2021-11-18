import React, {useState} from 'react'

const Button = (props) => {

    const tabEtats = {
        txt: [props.children,"Attention, ce bouton est inutile !","Je vous l'avais bien dit !"],
        color: ["SecondColor","bg-yellow-400","bg-red-600"]
    }
    const [txtBtn, setTxtBtn] = useState(tabEtats.txt[0])
    const [colorBtn, setColorBtn] = useState(tabEtats.color[0])

    const handleOver = () => {
        setTxtBtn(tabEtats.txt[1])
        setColorBtn(tabEtats.color[1])
    }

    const handleClick = () => {
        setTxtBtn(tabEtats.txt[2])
        setColorBtn(tabEtats.color[2])
    }

    const handleExit = () => {
        setTxtBtn(tabEtats.txt[0])
        setColorBtn(tabEtats.color[0])
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