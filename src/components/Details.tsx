import { FunctionComponent } from "react";

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  const printInput = (input: string) => {
    console.log(input);
  };
  return (
    <>
      <label htmlFor="username">Enter your name:</label>
      <input
        type="text"
        id="username"
        onChange={(e) => printInput(e.target.value)}
      />
    </>
  );
};

export default Details;
