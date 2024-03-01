function ustalTlo() {
    var wartoscPola = document.getElementById("pole").value;
    var komorki = document.querySelectorAll("td");
    var h = 100;
    for (var i = 0; i < komorki.length; i++) {
        komorki[i].style.background = "hsl(" + wartoscPola + " " + h + "% 50%)";
        h = h - 20;
    }
}
