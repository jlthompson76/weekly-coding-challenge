let x, y, char;

for (x = 1; x <= 6; x++) {
    chr = "";
    for (y = 1; y < x; y++) {
        chr = chr + ("*");
        console.log(chr);
    } 
}
