import "./App.css";
import ClassClick from "./components/ClassClick";
import ClickButton from "./components/ClickButton";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";

import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import Message from "./components/Message";
import ParentComponent from "./components/ParentComponent";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter></Counter> */}
      {/* <Message />
      <ClickButton></ClickButton> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="SuperMan">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Women" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Women" /> */}
    </div>
  );
}

export default App;
