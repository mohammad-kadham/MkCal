export const state ={
    numHistory:[],
    values:[],
    opHistory:[],
    Display:'0',
    preResult:0,
    curResult:0
   
}
export const controlInput = function(data){
   
   const op = ['*','÷','C','+','-','X']
   switch(data ) {
    case 'equel':
        addValue();
        calculate(state.opHistory[state.opHistory.length-1]);
      break;
    case '+':
        if(state.numHistory.length === 0)return;
       
     addValue();
     state.opHistory.push('+')
     clear()
     if (state.values.length >= 2 ){
        console.log('______________');
        calculate(state.opHistory[state.opHistory.length-1])
        display(state.values[0])
     }
      break;
    case '-':
      console.log('add');
      break;
    case 'C':
      console.log('add');
      break;
    case '*':
        console.log('mul');
        break;
    default:
     if(['1','2','3','4','5','6','7','8','9','0','.'].includes(data)){
        console.log(data);
      if(data !== '.'){
        state.numHistory.push(+data)
      }else  state.numHistory.push(data)
        update()
     }
  }
}



const update= function(){
    console.log(state);
    state.Display= state.numHistory.toString().replaceAll(',','')
}
const display= function(data){
    console.log(state);
    state.Display= data.toString()
}


const clear = function(){
    state.Display=''
    state.numHistory=[];
    console.log(state);
    
}


const calculate = function(data){
switch (data){
  case '+':
    state.values[0] = state.values[0] + state.values[state.values.length-1];
    break
  case '-':
    state.values[0] = state.values[0] - state.values[state.values.length-1];
    break
    default :
    console.log('default');
}

display(state.values[0])
}

const addValue = function(){
    state.values.push(+state.numHistory.toString().replaceAll(',',''))
}

