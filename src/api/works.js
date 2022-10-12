import axios from 'axios';
export const fetchWorks = async () => {
  const url = 'https://api.github.com/users/leod-e1/repos';
  const works = await axios.get(url);
  return works.data;
};
