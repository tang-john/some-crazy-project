import axios from 'axios';

export const USER_GET_ALL = 'userGetAll';

const ROOT_URL = 'http://localhost:3001';

export function userGetAll() {
  var jt = "johntang1";
  jt = `${ROOT_URL}/${USER_GET_ALL}`;
  const request = axios.get(`${ROOT_URL}/${USER_GET_ALL}`);

  return {
    type: USER_GET_ALL,
    payload: request
  };
}