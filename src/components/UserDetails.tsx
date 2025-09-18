import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface UserDetailsProps {}

const UserDetails: FunctionComponent<UserDetailsProps> = () => {
  let [user, setUser] = useState<any>({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        console.log(user);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
      <p>city: {user.address?.city}</p>
      <p>phone: {user.phone}</p>
      <p>website: {user.website}</p>
      <p>company: {user.company?.name}</p>
      <button className="btn btn-primary me-2" onClick={() => navigate("/")}>
        Home
      </button>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default UserDetails;
