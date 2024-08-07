import "./App.css";
import ClassClick from "./components/ClassClick";
import ClickButton from "./components/ClickButton";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";

import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import Inline from "./components/Inline";
import Message from "./components/Message";
import NameList from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import StyleSheet from "./components/StyleSheet";
import UserGreeting from "./components/UserGreeting";
import Welcome from "./components/Welcome";

import styles from "./appStyles.module.css";
import "./appStyles.css";
import Form from "./components/Form";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";

function App() {
  return (
    <div className="App">
      <RefsDemo />
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <StyleSheet primary={true} /> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent /> */}
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
