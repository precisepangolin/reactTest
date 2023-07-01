import logo from './logo.svg';
import './App.css';
import HelloWorldClass from './HelloWorld/HelloWorldClass';
import HelloWorldArrow from './HelloWorld/HelloWorldArrow';
import Greeting from './Greeting/Greeting';
import GreetingArrow from './Greeting/GreetingArrow';
import Header from './Buystuff/Header';
import InventoryItem from './Buystuff/InventoryItem';
import CounterClass from './Counter/CounterClass';
import LoginForm from './LoginForm/LoginForm';
import BlogPost from './BlogPost/BlogPost';

function App() {
  var i = 1;
  return (
    <div className="App">
      {/*{i}{i++}{++i}*/}

      {/*<HelloWorldClass />*/}
      {/*<HelloWorldArrow />*/}
      {/*<h1 style={{"color": "red"}}>Test</h1>
      <Greeting name="Anna"/>
      <Greeting name="Irena" />
  <GreetingArrow name="Izabela" />*/}
  <Header title="BuyStuff"/>
  <InventoryItem name="Apple" price="3" />
  <InventoryItem name="Banana" price="5" />

  <CounterClass/>

{/*<LoginForm/>*/}

<BlogPost/>


    </div>
  );
}

export default App;
