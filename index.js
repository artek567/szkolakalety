var table = ["<img src=\"img/banner1.png\"/>","<img src=\"img/banner2.png\"/>","<img src=\"img/banner3.png\"/>"]
var i = -1;
var odp = document.getElementById("banner");

function zmienslajd()
{
    i++;
    if(i>2)
    {
        i=0;
    }
    odp.innerHTML = table[i];

    setTimeout("zmienslajd()", 10000);

}