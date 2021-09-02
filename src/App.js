import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./styles.css";

export default function App() {
  //App is split into 2 semantic sections: Header/Main
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
