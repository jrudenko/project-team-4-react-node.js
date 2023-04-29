export const selectIsLoading = state => state.auth.isLoading;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

 //29.04 11.30 додала ці два рядки
export const selectEmail = state => state.auth.user.email;
export const selectIsSend = state => state.auth.isSent;
