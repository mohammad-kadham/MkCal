import * as view from './view'
import * as Modal from './modal'

const controlHandler = function(input){

Modal.controlInput(input)

view.render(Modal.state.Display)
}










const init = function(){
    view.inputHandler(controlHandler)
}

init();