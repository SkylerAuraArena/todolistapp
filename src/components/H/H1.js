import {useState, useEffect} from 'react'

const H1 = ({isBtnClicked, children}) => {

    const [animation, setAnimation] = useState("")
    const [displayElt, setDisplayElt] = useState(true)

    useEffect(() => {
        if(isBtnClicked){
            console.log("Fin du monde !")
            setAnimation("animation1")
            setTimeout(() => {
                setDisplayElt(false)
            }, 1400);
        }
    }, [isBtnClicked])

    const css = `my-8 ${animation}`

    return(
        displayElt && <h1 className={css}>{children}</h1>
    )
}

export default H1