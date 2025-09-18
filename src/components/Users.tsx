import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface UsersProps {}

const Users: FunctionComponent<UsersProps> = () => {
  let [users, setUsers] = useState<any>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {users.length ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user.id}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users </p>
      )}
    </>
  );
};

export default Users;
