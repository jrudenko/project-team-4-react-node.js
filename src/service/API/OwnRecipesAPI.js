import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-rest-api.yurgo.fun/';

// // ------------- FAVORITE -------------
// export const addFavoriteAPI = body => {
//   return axios.post('/favorite', body).then(({ data }) => {
//     return data;
//   });
// };

// export const getFavoriteAPI = (page, per_page) => {
//   if (page && per_page) {
//     return axios
//       .get(`/favorite?page=${page}&per_page=${per_page}`)
//       .then(({ data }) => {
//         return data;
//       });
//   }
//   return axios.get(`/favorite`).then(({ data }) => {
//     return data;
//   });
// };

// export const removeFavoriteAPI = id => {
//   return axios.delete(`/favorite/${id}`).then(({ data }) => {
//     return data;
//   });
// };
