import { useState } from "react";
import H1 from "./components/H/H1";
import Button from "./components/Buttons/Button";

function App() {

  const [txtBtnUtile, setTxtBtnUtile] = useState("Bouton utile")
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="MainColor box-border m-0 text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-white text-3xl">
        <H1>Un site comme un autre...</H1>
        <Button typeBtn="useless">Bouton qui ne sert à rien</Button>
        <Button typeBtn="danger" setTxtBtnUtile={setTxtBtnUtile} isClicked={[isClicked, setIsClicked]}>Arme nucléaire</Button>
        <Button typeBtn="usefull">{txtBtnUtile}</Button>
      </header>
    </div>
  );
}

export default App;