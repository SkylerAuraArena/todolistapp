import {useState, useEffect} from 'react'

const ButtonDanger = (props) => {

    const [txtBtn, setTxtBtn] = useState(props.children)
    const [showBtn, setShowBtn] = useState(true)

    useEffect(() => {
        const newTabEtats = {...props.tabEtats}
        newTabEtats[0].txt.push("Attention, ce bouton est va délencher la 3e guerre mondiale !","NONNNNNNNNNNN !!!!!!!!!!!")
        props.tabEtats[1](newTabEtats)
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    const handleOver = () => {
        setTxtBtn(props.tabEtats[0][0].txt[1])
        props.css[2](props.tabEtats[0][0].color[1])
    }

    const handleClick = () => {
        setTxtBtn(props.tabEtats[0][0].txt[2])
        props.css[2](props.tabEtats[0][0].color[2])
        props.setTxtBtnUtile("Pourquoi vous avez cliquez sur l'autre !? Tout est cassé !")
        props.isClicked[1](true)
    }

    const handleExit = () => {
        setTxtBtn(props.tabEtats[0][0].txt[0])
        props.css[2](props.tabEtats[0][0].color[0])
        props.isClicked[0] && setShowBtn(false)
    }


    return(
        showBtn && <span className={props.css[0]} onMouseOver={()=>handleOver()} onMouseLeave={()=>handleExit()} onClick={()=>handleClick()}>{txtBtn}</span>
    )
}

export default ButtonDanger