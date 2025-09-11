// conditional rendering - ternary if
import { FunctionComponent } from "react";

interface Message3Props {
  isAdmin: boolean;
}

const Message3: FunctionComponent<Message3Props> = ({ isAdmin }) => {
  return (
    <>
      {isAdmin ? (
        <>
          <h3>Welcome back admin</h3>
          <button>Add products</button>
        </>
      ) : (
        <>
          <h3>Welcome back user</h3>
          <button>Show products</button>
        </>
      )}
    </>
  );
};

export default Message3;
