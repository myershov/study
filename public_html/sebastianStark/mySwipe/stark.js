var clickCounter = 0;

function ontouch() {
     document.body.addEventListener('mousedown', function (e) {
         window.mouseisdown = true
         window.startX = e.pageX
     })

     document.body.addEventListener('mousemove', function (e) {
         clickCounter++
         console.log(clickCounter)
         console.log(e)
         if (window.mouseisdown) {
             distX = e.pageX - window.startX
        
             if (distX < -100) {
                 window.isGoBackVisble = true;
             }
         }
     })

    $( "body" ).on( "mouseup", function(e) {
        window.mouseisdown = false
        if (window.isGoBackVisble) {
            window.isGoBackVisble = false;
            $('.back-button').css({"display":"block", 'top': e.clientY, 'left': e.clientX});
            $('.back-button').on('mouseout', function(e){
             var myTimeout = setTimeout(function() {
                 $('.back-button').css({"display":"none"})
                 $('.back-button').on('mouseover',function() {
                     clearTimeout(myTimeout);
                 }) 
             }, 1000)
            })
            $(".back-button").click(function(){
            history.back(-1)
            });

        }
    })
 }


window.addEventListener('load', ontouch)