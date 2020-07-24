const logger = store => next => action => {
  console.group(action.type);
  console.log("the action: ", action);
  const returnedResult = next(action);
  console.log("the new state: ", store.getState());
  console.groupEnd();

  return returnedResult;
}

export default logger;