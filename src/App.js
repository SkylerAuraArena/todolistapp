import {useState} from "react"
import H1 from "./components/H/H1";
import ButtonList from "./components/Buttons/ButtonList";
import getOut from './assets/images/getOut.png'


function App() {
  const [isBtnClicked, setIsBtnClicked] = useState(false)

  return (
    <div className="MainColor box-border m-0 text-center">
      <div className="min-h-screen flex flex-col justify-center items-center text-white text-3xl">
        <H1 isBtnClicked={isBtnClicked}>Un site comme un autre...</H1>
        <ButtonList isBtnClicked={isBtnClicked} setIsBtnClicked={setIsBtnClicked} />
        {
          isBtnClicked && <img className="imgOut" src={getOut} alt="Sors d'ici !"></img>
        }
      </div>
    </div>
  );
}

export default App;