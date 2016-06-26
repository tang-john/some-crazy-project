import axios from 'axios';

export const USER_GET_ALL = 'userGetAll';
export const USER_SAVE = 'userSave';

const ROOT_URL = 'http://localhost:3001';

export function userGetAll() {
  const request = axios.get(`${ROOT_URL}/${USER_GET_ALL}`);

  return {
    type: USER_GET_ALL,
    payload: request
  };
}


export function userSave() {
  const request = axios.get(`${ROOT_URL}/${USER_SAVE}`);

  return {
    type: USER_SAVE,
    payload: request
  };
}