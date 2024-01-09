let count = 0
document.getElementById("buttonDec").onclick = function () {

    count -= 1
    document.getElementById("labelCount").innerHTML = count

}

document.getElementById("buttonReset").onclick = function () {

    count = 0
    document.getElementById("labelCount").innerHTML = count

}

document.getElementById("buttonInc").onclick = function () {
    count += 1
    document.getElementById("labelCount").innerHTML = count

}