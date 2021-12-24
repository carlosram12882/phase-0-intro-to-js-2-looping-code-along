const thanksCards = ["Charlis", "Samip", "Ali"]

function writeCards(thanksCards) {
   const newArray =[];
    for (let i = 0; i < thanksCards.length; i++) {
      console.log(`Thank you, ${thanksCards[i]}, for the wonderful surprise gift!`);
      newArray.push(`Thank you, ${thanksCards[i]}, for the wonderful surprise gift!`);
      debugger;
    }
  
    return newArray;
  }
  
  writeCards(thanksCards);

function countDown(){
    let i = 10;
    while (i > -1)
    console.log(i--)

}









