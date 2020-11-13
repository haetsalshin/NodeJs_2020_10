import BackImg from "./photo-1544212415-85fec3f52087.jpg";
import "./App.css";
import BBsMain from "./main/BBsMain";

function App() {
  const background = {
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
  };
  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h3>REACT BBS 2020</h3>
        <p>React로 구현하는 BBS Project</p>
      </header>
      <BBsMain />
      <footer className="footer">
        <address>CopyRight &copy; sinsin09022@gmail.com</address>
      </footer>
    </div>
  );
}

export default App;
