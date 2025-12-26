const xcord = document.getElementById('logX');
const ycord = document.getElementById('logY');

let dotArr = [];
let rmvArr = [];


document.addEventListener('click', (e) => {
    xcord.innerHTML = `x-cord: ${e.clientX}` //for finding x co-ordinate
    ycord.innerHTML = `y-cord: ${e.clientY}` //for finding y co-ordinate

    if (e.target.tagName != 'BUTTON') { //no dot on when we click on button

        const circ = document.createElement('div')

        circ.style.height = '20px'
        circ.style.width = '20px'
        circ.style.backgroundColor = 'red'
        circ.style.borderRadius = '50%'
        circ.style.position = 'absolute'
        circ.style.left = `${e.clientX}px`
        circ.style.top = `${e.clientY}px`
        circ.style.transform = 'translate(-50%, -50%)'

        document.body.appendChild(circ)

        dotArr.push(circ);
    }

})

//when we click on remove button
document.getElementById('rmv-btn').addEventListener('click', function (e) {

    if (dotArr.length != 0) {
        let lastEle = dotArr.pop()

        rmvArr.push(lastEle);

        document.body.removeChild(lastEle) //to make it disappear
    } else {
        alert('No dot is present on Screen')
    }

})

//when we click on undo button

//undo function
function undoFunc() {
    if (rmvArr.length != 0) {
        let lastEle = rmvArr.pop();

        dotArr.push(lastEle)

        document.body.appendChild(lastEle) //to make it re-appear
    } else {
        alert('there is nothing to undo')
    }
}

//undo from button
document.getElementById('undo-btn').addEventListener('click', undoFunc)

//keyboard shortcut for undo
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLocaleLowerCase() === 'z') {
        e.preventDefault()
        undoFunc()
    }
})