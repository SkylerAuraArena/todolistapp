import {useEffect} from 'react'

const ButtonUsefull = (props) => {

    useEffect(() => {
        props.children !== "Bouton utile" && props.css[2]("redColor")
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [props.children])

    const handleClick = () => {
        props.children !== "Bouton utile" ? console.log('Puisque je vous dis que c\'est cassé !') : console.log('Vous y avez vraiment cru ?')
    }

    return(
        <span className={props.css[0]} onClick={()=>handleClick()}>{props.children}</span>
    )
}

export default ButtonUsefull