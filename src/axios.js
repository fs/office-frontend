import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://flatstack-office.firebaseio.com/',
});

export default instance;
