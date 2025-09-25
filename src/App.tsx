import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pnf from "./components/Pnf";
import Products from "./components/Products";
import Register from "./components/Register";
import Register2 from "./components/Register2";
import UserDetails from "./components/UserDetails";
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
          <Route path="/users">
            <Route index element={<Users />} />
            {/* /users/:id */}
            <Route path=":id" element={<UserDetails />} />
            {/* /users/new */}
            {/* <Route path="new" element={<NewUser />} /> */}
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="*" element={<Pnf />} />
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
