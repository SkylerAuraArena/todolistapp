import H1 from "./components/H/H1";
import ButtonList from "./components/Buttons/ButtonList";

function App() {
  return (
    <div className="MainColor box-border m-0 text-center">
      <div className="min-h-screen flex flex-col justify-center text-white text-3xl">
        <H1>Un site comme un autre...</H1>
        <ButtonList />
      </div>
    </div>
  );
}

export default App;