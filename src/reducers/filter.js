const filterReducer = (state = '', action) => {
  if (action.type === 'CHANGE_FILTER') {
    return `${action.category}`;
  }
  return state;
};

export default filterReducer;
