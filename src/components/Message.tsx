// conditional rendering - if statement
import { FunctionComponent } from "react";

interface MessageProps {
  isAdmin: boolean;
}

const Message: FunctionComponent<MessageProps> = ({ isAdmin }) => {
  if (isAdmin)
    return (
      <>
        <h3>Welcome back admin</h3>
        <button>Add products</button>
      </>
    );
  return (
    <>
      <h3>Welcome back user</h3>
      <button>Show products</button>
    </>
  );
};

export default Message;
