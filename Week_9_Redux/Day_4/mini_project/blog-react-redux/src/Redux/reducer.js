const initState = {
  posts: [
    {id: '1', title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '2', title: 'Dolorem eum magni eos aperiam quia', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '3', title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
  ]
}

 const reducer = (state = initState, action={}) =>{
  switch (action.type) {
    case 'DISPLAY':
      return {...state, posts: state.posts.id.action.payload}
    case 'DELETE':
      const objWithIdIndex = state.posts.findIndex((obj) => obj.id === action.payload);
      console.log('objindex', objWithIdIndex)
      if (objWithIdIndex > -1) {
        console.log('inside if', objWithIdIndex)
        state.posts.splice(objWithIdIndex, 1);
        return {...state, posts: [...state.posts]}
      }
      return {...state}
    default:
      return {...state}
  }
}

export default reducer;