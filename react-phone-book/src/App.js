import "./App.css";
import PhoneMain from "./phone-book/PhoneMain";
import PhoneList from "./phone-book/PhoneList";

function App() {
  return (
    <>
      <PhoneMain />
      <PhoneList />
    </>
  );
  // 항상 box태그를 만들고 그안에 우리가 만들고 싶은
  // 태그들을 넣어야 한다 (단독으로 <p>태그는 못 단다.)
}

export default App;
