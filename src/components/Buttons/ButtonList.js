import {useState} from 'react'
import Button from "./Button";

const ButtonList = ({isBtnClicked, setIsBtnClicked}) => {

    const [txtBtnUtile, setTxtBtnUtile] = useState("Bouton utile")
  
    return(
        // <div className="flex flex-col justify-center items-center md:flex-row md:justify-around">
        <div className="flex flex-col justify-center items-center">
            <Button typeBtn="useless">Bouton qui ne sert à rien</Button>
            <Button typeBtn="danger" setTxtBtnUtile={setTxtBtnUtile} isClicked={[isBtnClicked, setIsBtnClicked]}>Arme nucléaire</Button>
            <Button typeBtn="usefull">{txtBtnUtile}</Button>
        </div>
    )
}

export default ButtonList