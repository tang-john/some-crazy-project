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


export function userSave(id, firstname, middlename, lastname, username, password, gender, dob) {
  const url = `${ROOT_URL}/${USER_SAVE}?id=${id}&firstname=${firstname}&middlename=${middlename}&lastname=${lastname}&username=${username}&password=${password}&gender=${gender}&dob=${dob}`;
  const request = axios.get(url);

  return {
    type: USER_SAVE,
    payload: request
  };
}