// conditional rendering - && operator
import { FunctionComponent } from "react";

interface Message2Props {
  isAdmin: boolean;
}

const Message2: FunctionComponent<Message2Props> = ({ isAdmin }) => {
  return (
    <>
      {isAdmin && (
        <>
          <h3>Welcome back admin</h3>
          <button>Add products</button>
        </>
      )}
      {!isAdmin && (
        <>
          <h3>Welcome back user</h3>
          <button>Show products</button>
        </>
      )}
    </>
  );
};

export default Message2;
