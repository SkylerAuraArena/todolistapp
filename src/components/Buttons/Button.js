import {useState} from 'react'
import ButtonUseless from "./ButtonUseless";
import ButtonDanger from "./ButtonDanger";
import ButtonUsefull from "./ButtonUsefull";

const Button = (props) => {

    const btnGenerated = props.typeBtn
    const [colorBtn, setColorBtn] = useState("greenColor")
    const [tabEtats, setTabEtats] = useState({
        color: ["greenColor","yellowColor","redColor"],
        txt: [props.children]
    })

    const css = `${colorBtn}
    rounded-3xl border-4 p-2 m-5 w-40 lg:w-auto
    transform hover:scale-110`

    return(
        <>
            {
                btnGenerated === "usefull" && <ButtonUsefull tabEtats={[tabEtats, setTabEtats]} css={[css,colorBtn, setColorBtn]} isClicked={props.isClicked}>{props.children}</ButtonUsefull>
            }
            {
                btnGenerated === "useless" && <ButtonUseless tabEtats={[tabEtats, setTabEtats]} css={[css,colorBtn, setColorBtn]} isClicked={props.isClicked}>{props.children}</ButtonUseless>
            }
            {
                btnGenerated === "danger" && <ButtonDanger tabEtats={[tabEtats, setTabEtats]} css={[css,colorBtn, setColorBtn]} isClicked={props.isClicked} setTxtBtnUtile={props.setTxtBtnUtile}>{props.children}</ButtonDanger>
            }
        </>
    )
}

export default Button