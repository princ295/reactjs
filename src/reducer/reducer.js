
const initialState = {
  ary: [
       { _id: 1,
        title: 'Code Nicely',
        body: 'hi i m prince working as front end devloper in code nicely'
       },
       {
        _id: 2,
        title: 'Smileboat',
        body: 'hi i m prince working as front end devloper in code nicely'
       },
  ]
}

const reducer = (state=initialState,action)=>{

  switch(action.type){

    case "add_note" : 
      Object.assign(action.value,{_id: state.ary.length+1})
      
      return{
        ary: state.ary.concat(action.value)
      }
    case "update_note" :
      console.log(action.key)

      console.log(state.ary[action.key-1])


      state.ary[action.key-1].title = action.value.title 
      state.ary[action.key-1].body = action.value.body 

      // let _= state.ary.filter((res)=>{
      //   console.log(res._id + "==========" + action.value)
      //  return res._id == action.value
      // })

      // console.log(_)
      // return{
      //   ary : _
      // }
      console.log('----------------------')
      console.log(state.ary[action.key-1])

      return {
        ary: state.ary
      }
  
    case "delete_note":
      let du_array= [...state.ary]
      
      const ind = du_array.findIndex((element,index)=>{
        if(element._id == action.value){
          return index
        }
      })
    
      du_array.splice(ind, 1)

      return{
        ary: du_array
      }

    default:  
       return state  
  }
}
export default reducer