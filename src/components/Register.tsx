import { FormEvent, FunctionComponent, useState } from "react";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-1">REGISTER</h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email} // ts -> html
        onChange={(e) => setEmail(e.target.value)} // html -> ts
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
