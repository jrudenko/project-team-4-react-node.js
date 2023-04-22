import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-rest-api.yurgo.fun/api';

export const signUpUserAPI = user => {
  return axios.post('/auth/signup', user).then(({ data }) => {
    return data;
  });
};

export const logInUserAPI = user => {
  return axios.post('/auth/login', user).then(({ data }) => {
    return data;
  });
};

export const logOutUserAPI = () => {
  return axios.post('/auth/logout').then(({ data }) => {
    return data;
  });
};

export const getUserInfoAPI = id => {
  return axios.get(`/auth/user-data/${id}`).then(({ data }) => {
    return data;
  });
};

export const updateUserInfoAPI = body => {
  return axios.patch('/auth/user-data', body).then(({ data }) => {
    return data;
  });
};

export const updateUserAvatarAPI = body => {
  return axios.patch('/auth/user-data', body).then(({ data }) => {
    return data;
  });
};

export const getCurrentUserAPI = () => {
  return axios.get('/auth/user-data').then(({ data }) => {
    return data;
  });
};

export const subscribeEmail = email => {
  return axios.post('/auth/user-data/subscribe', email).then(({ data }) => {
    return data;
  });
};

export const subscribeEmailConfirmation = token => {
  return axios
    .get(`auth/user-data/subscribe?token=${token}`)
    .then(({ data }) => {
      return data;
    });
};
