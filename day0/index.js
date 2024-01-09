let a, b, c

// a = window.prompt("enter length of side a : ")
// a = Number(a)

// b = window.prompt("enter length of side a : ")
// b = Number(a)

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

//console.log("length of hypo ie. side c = ", c)

document.getElementById("submit").onclick = function () {

    a = document.getElementById("textA").value
    a = Number(a)

    b = document.getElementById("textB").value
    b = Number(a)

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    document.getElementById("labelC").innerHTML = "Hypo Length ie Side C : " + c

}



