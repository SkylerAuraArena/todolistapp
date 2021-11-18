import {useState, useEffect} from 'react'

const ButtonUseless = (props) => {

    const [txtBtn, setTxtBtn] = useState(props.children)

    useEffect(() => {
        const newTabEtats = {...props.tabEtats}
        newTabEtats[0].txt.push("Puisque je vous dis qu'il sert à rien !","Je vous l'avais dit pourtant ! Respectez mon autorité !")
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
    }

    const handleExit = () => {
        setTxtBtn(props.tabEtats[0][0].txt[0])
        props.css[2](props.tabEtats[0][0].color[0])
    }

    return(
        <span className={props.css[0]} onMouseOver={()=>handleOver()} onMouseLeave={()=>handleExit()} onClick={()=>handleClick()}>{txtBtn}</span>
    )
}

export default ButtonUseless
