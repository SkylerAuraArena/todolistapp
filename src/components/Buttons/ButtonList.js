import {useState} from 'react'
import Button from "./Button";

const ButtonList = () => {

    const [txtBtnUtile, setTxtBtnUtile] = useState("Bouton utile")
    const [isClicked, setIsClicked] = useState(false)
  
    return(
        // <div className="flex flex-col justify-center items-center md:flex-row md:justify-around">
        <div className="flex flex-col justify-center items-center">
            <Button typeBtn="useless">Bouton qui ne sert à rien</Button>
            <Button typeBtn="danger" setTxtBtnUtile={setTxtBtnUtile} isClicked={[isClicked, setIsClicked]}>Arme nucléaire</Button>
            <Button typeBtn="usefull">{txtBtnUtile}</Button>
        </div>
    )
}

export default ButtonList