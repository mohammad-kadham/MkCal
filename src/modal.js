export const state ={
    numArr:[],
    numDisplay:'0',
    num:[],
    op:undefined
}
export const controlInput = function(data){
   const op = ['*','÷','C','+','-']
  
   state.numArr.push(data)
   state.numDisplay= state.numArr.toString().replaceAll(',','');
   state.num.push(+state.numDisplay);

 
}

const mathOp = function(num){
let num =num;

}