const rndmColorBtn = document.querySelector('.random-button')

const randomColor = ()=>{
    let random = Math.floor(Math.random() * 8)
    const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'cyan']
    console.log('click');
    let newColor = document.querySelector('.box-2')
    newColor.style.background = colors[random]
    document.querySelector('.box-2').appendChild(newColor)
}

rndmColorBtn.addEventListener('click', randomColor)