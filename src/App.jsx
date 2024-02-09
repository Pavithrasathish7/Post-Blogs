import { useState } from "react";
import MainHeader from "./components/Mainheader";
import Postlist from "./components/Postlist";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function modalopenhandler() {
    setModalVisible(true);
  }
  function modalclosehandler() {
    setModalVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={modalopenhandler} />
      <main>
        <Postlist isPosting={modalVisible} onClosed={modalclosehandler} />
      </main>
    </>
  );
}

export default App;
