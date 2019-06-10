import axios from 'axios';

/**
 * @return {email, nickname}
 */
export const getUser = () => {
  return axios.get('/user/getUser');
};
/**
 * @param {email, password}
 * @return {email, nickname}
 */
export const userLogIn = ({ email, password }) => {
  return axios.post('/user/logIn', { email, password });
};
/**
 * @param {email, password, confirmPassword}
 * @return {email, nickname}
 */
export const userRegister = ({ email, password, confirmPassword }) => {
  return axios.post('/user/register', { email, password, confirmPassword });
};
/**
 * @return {}
 */
export const userLogOut = () => {
  return axios.get('/user/logOut');
};
/**
 *
 * @param {nickname}
 * @return {nickname}
 */
export const userPatch = ({ nickname }) => {
  return axios.patch('/user/patch', { nickname });
};

export const readPost = ({ page, category }) => {
  return axios.get(`/post/read/${category}?page=${page}`);
};

export const createPost = formData => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  return axios.post('/post/create', formData, config);
};

export const deletePost = ({ id, key }) => {
  return axios.delete('/post/delete', { data: { id, key } });
};

export const patchPost = ({ id, key, formData }) => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  formData.append('key', key);
  formData.append('id', id);
  return axios.patch('/post/updata', formData, config);
};

export const addLikePost = ({ id }) => {
  return axios.get(`/post/addLike/${id}`);
};

export const getPostLength = ({ category }) => {
  return axios.get(`/post/length/${category}`);
};
