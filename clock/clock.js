;

function clock() {
    var now = new Date()
    var y = now.getFullYear()
    var mo = now.getMonth() + 1
    var d = now.getDate()
    var h = now.getHours()
    var m = now.getMinutes()
    var s = now.getSeconds()

    if (h < 10) h = "0" + h
    if (m < 10) m = "0" + m
    if (s < 10) s = "0" + s

    document.getElementById("js-clock-date").innerHTML = y + "年" + mo + "月" + d + "日"
    document.getElementById("js-clock-time").innerHTML = h + ":" + m + ":" + s

    /*
    document.getElementById("clock-frame").style.fontSize = window.innerWidth / 10 + "px"
    */
}

setInterval(clock, 1000)
