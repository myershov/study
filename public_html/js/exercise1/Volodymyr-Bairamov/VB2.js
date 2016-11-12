for (var i = 10, s; i <= 119; i++) {
    s = Math.pow(i, 2);
    if (i === 12 || i === 15 || i === 55) {
       continue;
    }
    document.write(s + "; ");
}
