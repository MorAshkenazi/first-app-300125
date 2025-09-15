import { FunctionComponent, useEffect, useState } from "react";

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  // let inputName: string = "Udy";
  let [inputName, setInputName] = useState<string>("Udy");
  let [booli, setBooli] = useState<boolean>(false);
  let [age, setAge] = useState<number>(25);

  const printInput = (input: string) => {
    setInputName(input);
  };

  const handleChange = () => {
    setBooli(!booli);
  };

  // כל פעם שמשתנה סטייס ישתנה תופעל הפונקציה האנונימית
  useEffect(() => {
    console.log("Component was rendered");
  });

  // הפונקציה האנונימית תופעל רק בשינוי של סטייס מסוים
  useEffect(() => {
    console.log("Only rendered by booli");
  }, [booli]);

  // הפונקציה האנונימית תופעל חד פעמי ברנדור הראשוני
  useEffect(() => {
    console.log("Only in first render");
  }, []);

  return (
    <>
      <label htmlFor="username">Enter your name:</label>
      <input
        type="text"
        id="username"
        onChange={(e) => printInput(e.target.value)}
      />
      <p>{inputName}</p>
      <button onClick={handleChange}>Change</button>
      <p>{booli ? "true" : "false"}</p>
      <input type="text" onChange={(e) => setAge(+e.target.value)} />
      <div className="text-danger">Age: {age}</div>
    </>
  );
};

export default Details;
