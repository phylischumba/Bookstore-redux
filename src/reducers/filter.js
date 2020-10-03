const filterReducer = (state = 'All', action) => {
  if (action.type === 'CHANGE_FILTER') {
    return `${action.category}`;
  }
  return state;
};

export default filterReducer;
