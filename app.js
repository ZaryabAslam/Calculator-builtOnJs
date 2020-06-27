function clearBtn() {
    var clear = document.getElementById('screen');
    clear.value = '';
}

function numberBtn(num) {
    var integer = document.getElementById('screen');
    integer.value += num
}

function result() {
    var result = document.getElementById('screen');
    result.value = eval(result.value);

}

function sqrt() {
    var squareRoot = document.getElementById('screen')
    squareRoot.value = Math.sqrt(squareRoot.value)
}

function square() {
    var square = document.getElementById('screen');
    square.value = Math.pow(square.value, 2);
}

function cube() {
    var cube = document.getElementById('screen');
    cube.value = Math.pow(cube.value, 3);
}