export const my_logger = (store) => (next) => (action) =>{
  // console.log(store)
  // console.log(action)
  console.log('prev state=>', store.getState())
  console.log('action=>', action)
  next(action)
  console.log('next state=>', store.getState())
}