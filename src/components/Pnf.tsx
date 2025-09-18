import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface PnfProps {}

const Pnf: FunctionComponent<PnfProps> = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>404 - Page Not Found</h3>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Home
      </button>
    </>
  );
};

export default Pnf;
