var chd = document.getElementById("hd");
var chspan = chd.getElementsByTagName("span");
var cbd = document.getElementById("bd");
var cbspan = cbd.getElementsByTagName("span");
for (var i = 0; i < chspan.length; i++) {
    chspan[i].setAttribute("index", i);






    chspan[i].onmouseover = function() {
        for (var j = 0; j < chspan.length; j++) {
            chspan[j].removeAttribute("class");
        }
        this.className = "yc";
        var num = this.getAttribute("index");
        for (var k = 0; k < cbspan.length; k++) {
            cbspan[k].removeAttribute("class");
        }
        cbspan[num].className = "yc";
        cbspan[num].onmouseout = function() {
            cbspan[num].className = "";
            console.log("ok");
        }
    };

    // chspan[i].onmouseout = function() {
    //     this.className = "";
    //     var num = this.getAttribute("index");
    //     for (var k = 0; k < cbspan.length; k++) {
    //         cbspan[k].removeAttribute("class");
    //     }
    //     cbspan[num].className = "";
    // };
}