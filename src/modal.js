export const state ={
    numHistory:[],
    opHistory:[],
    numDisplay:'0',
    num:[],
    op:undefined
}
export const controlInput = function(data){
   const op = ['*','÷','C','+','-','X']
  if(!op.includes(data) && data !== '='){
    state.num.push(+data)
    state.numDisplay= state.num.toString().replaceAll(',','');
  }else if(op.includes(data)){
    state.opHistory.push(data)
    mathOp(data)
  }else{
    mathOp(data)
  }
  
  
   
  
  
console.log(state);
 
}

const mathOp = function(data){
    state.numHistory.push(state.num)
    state.num = []
    state.numDisplay='';


}