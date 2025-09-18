import "./App.css";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Message from "./components/Message";
import Message2 from "./components/Message2";
import Message3 from "./components/Message3";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Users from "./components/Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let devName: string = "Mor";
  let imgUrl: string =
    "https://cdn.sanity.io/images/cphrnle8/production/a9a440a90458d24d5c34e722094520110f5883df-1440x811.webp?w=1440&q=100";
  let year: number = 2025;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Footer dev={devName} year={year} />
      </Router>
    </div>
  );
}

export default App;

{
  /* <Navbar></Navbar> */
}
{
  /* <Products />
      <Message isAdmin={false} />
      <Message2 isAdmin={true} />
      <Message3 isAdmin={true} />
      <Home /> */
}
{
  /* <p>{devName}</p>
      <img src={imgUrl} alt="giraffe" width={500} />
      <div>{Math.random() * 100}</div> */
}
{
  /* <Users />

      <br />
      <Details /> */
}
