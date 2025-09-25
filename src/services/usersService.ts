import axios from "axios";

const api: string = "https://jsonplaceholder.typicode.com/users";

// register
export function addUser(newUser: any) {
  return axios.post(api, newUser);
}

// login

// get user details
