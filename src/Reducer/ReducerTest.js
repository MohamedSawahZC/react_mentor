const reducer = (state,action)=>{
    switch(action.type){
      case '+':
        return {count:state.count+1};
      case '-':
        return {count:state.count-1};
      case 'reset':
        return {count:0} ;
      default : 
        return {state};
    }
  }

  export default reducer;