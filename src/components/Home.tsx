import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const welcomeFunc = () => {
    console.log("Welcome Mor");
  };

  const welcomeByName = (name: string) => {
    console.log(`Welcome ${name}`);
  };

  return (
    <>
      <h3>Home Page</h3>
      <button className="btn btn-primary" onClick={welcomeFunc}>
        Welcome
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => welcomeByName("Adi")}
      >
        WelcomeByName
      </button>
    </>
  );
};

export default Home;
