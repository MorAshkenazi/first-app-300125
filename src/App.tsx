import "./App.css";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Message from "./components/Message";
import Message2 from "./components/Message2";
import Message3 from "./components/Message3";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  let devName: string = "Mor";
  let imgUrl: string =
    "https://cdn.sanity.io/images/cphrnle8/production/a9a440a90458d24d5c34e722094520110f5883df-1440x811.webp?w=1440&q=100";
  let year: number = 2025;

  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Navbar />
      <Products />
      <Message isAdmin={false} />
      <Message2 isAdmin={true} />
      <Message3 isAdmin={true} />
      <Home />
      <br />
      <Details />
      <p>{devName}</p>
      <img src={imgUrl} alt="giraffe" width={500} />
      <div>{Math.random() * 100}</div>
      <Footer dev={devName} year={year} />
    </div>
  );
}

export default App;
