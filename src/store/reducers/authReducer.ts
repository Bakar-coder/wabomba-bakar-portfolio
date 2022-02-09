const authState = {
  user: null,
  isAuth: false,
};

export default (state = authState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
