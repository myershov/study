function ontouch() {
  var isGoBackVisble,
      isMouseDown,
      myTimeout,
      startX
      
  var goBackButton = document.querySelector('.back-button')

  var getVisibleButtonStyle = function(top, left) {
    return  'visibility: visible;top:' + top + 'px;left:'+ left +'px;'
  }

  var getHiddenButtonStyle = function() {
    return 'visiblity: hidden'
  }
   
  document.body.addEventListener('mousedown', function (e) {
    isMouseDown = true
    startX = e.pageX
    
    e = e.originalEvent
  })

  document.body.addEventListener('mousemove', function (e) {
    var distX
    
    if (isMouseDown) {
      distX = e.pageX - startX

      if (distX < -100) {
        isGoBackVisble = true
      }
    }
    
    e = e.originalEvent
  })


  document.body.addEventListener('mouseup', function(e) {
    isMouseDown = false
    if (isGoBackVisble) {
      isGoBackVisble = false
      goBackButton.style.cssText = getVisibleButtonStyle(e.clientY, e.clientX)
      goBackButton.onmouseleave = function() {
        myTimeout = setTimeout(function() {
            goBackButton.style.cssText = getHiddenButtonStyle()
            goBackButton.onmouseover = function() {
              clearTimeout(myTimeout)
            }
        }, 1000)
        goBackButton.onclick = function() {
          window.history.back(-1)
        }
      }
    }
    
    e = e.originalEvent
  })
 }

window.addEventListener('load', ontouch)