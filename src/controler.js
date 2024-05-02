import * as view from './view'
import * as Modal from './modal'

const controlHandler = function(input){

Modal.controlInput(input)
console.log(Modal.state.numDisplay);
view.render(Modal.state.numDisplay)
}










const init = function(){
    view.inputHandler(controlHandler)
}

init();