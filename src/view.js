const btns =document.querySelector('.numpad__sides')
const screen = document.querySelector('.output_text')

export const inputHandler = function(handler){
    btns.addEventListener('click',function (e) {
      if(e.target.closest('.btn') !== null){
        handler(e.target.value)
      }
    })
}

export const render = function(data){
  
screen.innerText = data
}