function sq() {
  var a = document.frm.a.value;
  var b = document.frm.b.value;
  var c = document.frm.c.value;
  var res = document.getElementById("sqres");
  var x1,x2;

  var d = (b * b) - (4 * a * c);
  if ( d > 0 ) {
      x1 = (-b+Math.sqrt(d))/(2*a);
      x2 = (-b-Math.sqrt(d))/(2*a);
      string = "x1 = " + x1 + "</br> x2 = " + x2;  
      res.innerHTML = string;
    
  } else {
      if ( d === 0 ) {
        x1 = x2 = -b / ( 2 * a );
        string = "x1 = " + x1 + "</br> x2 = " + x2;  
        res.innerHTML = string;
      } else {
        string = "Коренів немає";  
        res.innerHTML = string;;
      }
  }
  
}