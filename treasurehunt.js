const treasure = (clickedItem) => {
  if(clickedItem === goldPile) {
    document.getElementById(clickedItem).innerHTML = "🌟"
    countClicked = countClicked + 1
    } else if(clickedItem === explosive) {
      document.getElementById(clickedItem).innerHTML = "💣"
      countClicked = countClicked + 1
    } else {document.getElementById(clickedItem).innerHTML = "❌"
    countClicked = countClicked + 1
  }
  document.getElementById("counter").innerHTML = `${countClicked}`
  countRemain = countRemain - 1
  document.getElementById("countRemain").innerHTML = `${countRemain}`
}

const goldPile = Math.floor(Math.random()* 9)

var explosive = Math.floor(Math.random() * 9)
if (explosive === goldPile) {
  explosive = Math.floor(Math.random()* 9)
}


var countClicked =  0
var countRemain = 8 