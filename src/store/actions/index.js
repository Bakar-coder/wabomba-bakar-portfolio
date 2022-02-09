const downloadData = () => async (dispatch, getState, api) => {
  const res = await api.post('/resume/download');
  console.log(res)
};

export {
  downloadData
}