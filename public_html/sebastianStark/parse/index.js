function ontouch() {
  var allItems = document.querySelector('body')
  var standardPath = 'http://komoorki.pl'
  var newArray = []
  var newItem = {}
  var priceString
  var itemArray
  var item
  
  for (var prop in allItems.children) {
    item = allItems.children[prop]
    if (item.innerText && +prop >= 0) {
      itemArray = item.innerText.split('VAT 23%')
      
      priceString = itemArray[1].replace(/\D+/g,"")
      
      newItem = {
        img: standardPath + item.querySelector('img').attributes[1].textContent,
        linkToOriginalSite: standardPath + item.querySelector('a').pathname,
        priceFull: +priceString.slice(0, -2),
        priceZlot: +priceString.slice(-2),
        price: priceString,
        text: itemArray[0]
      }

      newArray.push(newItem)
    }
  }
  
  
  ///search functionality
  
  var searchItem = 'Lumia'
  var filteredArray = []
  var searchItemLowerCase = searchItem.toLowerCase()
  var textLowerCase
  
  
  newArray.forEach(function(obj) {
    textLowerCase = obj.text.toLowerCase()
    if (textLowerCase.indexOf(searchItemLowerCase) >= 0) {
      filteredArray.push(obj)
    }
  })
  
}

window.addEventListener('load', ontouch)