const logger = (store) => (next) => (action) => {
  // Our middleware
  console.log("Caught in the middleware")
  console.log(`Previous age:`, store.getState())
  // call the next function
  next(action);
  console.log(`Actual Age:`, store.getState())
}

export {
  logger
}