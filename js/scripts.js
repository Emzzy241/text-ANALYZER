// Utility Logic

// function noInputtedWord(word, text) {
//   return ((text.trim().length === 0) || (word.trim().length === 0));
// }

// As it stands now our utility logic only takes in one argument, our function wordCounter()
// only works properly with 2 arguments, let us make our utility logic take in any number or arguments

function noInputtedWord() {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
      if (arguments[i].trim().length === 0) {
        return true;
      }
    }
    return false;
  }
  
  
  // With this update to noInputtedWords(), we can use this utility function regardless 
  // of the number of arguments passed into it. Our utility function just got more useful. 
  
  // Now we can update our wordCounter() function to use this utility function, too. This also DRYs up our code further.
  
  // After the update, our function still works so we have successfully been able to make our 
  // utility logic take in any number of arguments thanks to javascript documentation
  
  
  // Business Logic
  /*
  function wordCounter(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function (element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
  }*/
  
  
  // The function for our offensive words begin
  // We have a regex inside here for replacing the 
  // following characters into a white space ""
  // Note that in my regex I didn't use i I used only g(global)
  // And that is because there are no uppercase of the characters I 
  // Want to replace in the english alphabet
  function checkingSentence(theSentence){
    theSentence = theSentence.toLowerCase();
    theSentence = theSentence.replace(/[!#*$%(){}|~*,:;<=>@[|]._]/g, "");
    return theSentence;
  }
  
  
  // Updating the wordCounter function in business logic
  function wordCounter(text) {
    if (noInputtedWord(text)) {
      return 0;
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function(element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
  }
  
  
  // The changing offensive words function
  
  function changingBadWords(passage){
    passage = passage.toLowerCase();
    let badWordsArray = ["biffaroni", "loopdaloop", "zoinks", "muppeteer"];
    let changedArray = [];
    let myWordsArray = passage.split(" ");
    myWordsArray.forEach( function(dElement) {
      badWordsArray.forEach( function(myElement) {
        if (dElement === myElement) {
          dElement = "*****";
        }
      })
      changedArray.push(dElement);
    });
    return changedArray.join(' ');
  }
  
  
  function numberOfOccurrencesInText(word, text) {
    if (noInputtedWord(word, text)) {
      return 0;
    }
    const wordArray = text.split(" ");
    let wordCount = 0;
    wordArray.forEach(function (element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }
  
  
  
  
  // Updating the wordCounter function in UI logic
  function noInputtedWord() {
    for (let i=0; i < arguments.length; i++) {
      if (arguments[i].trim().length === 0) {
        return true;
      }
    }
    return false;
  }
  
  function matchingWord(firstWord, secondWord){
    firstWord = checkingSentence(firstWord)
    secondWord = checkingSentence(secondWord)
    return secondWord.toLowerCase().includes(firstWord.toLowerCase()) && firstWord.toLowerCase() === secondWord.toLowerCase()
  }
  
  function boldPassage(word, text) {
    if (noInputtedWord(word, text)) {
      return "";
    }
    // update for our bad words starts
    word = word.toLowerCase();
    text = text.toLowerCase();
    let badWordsArray = ["biffaroni", "loopdaloop", "zoinks", "muppeteer"];
  
  
    // update for our bad words ends
    let htmlString = "<p>";
    // update for our bad words starts
    text = checkingSentence(text);
    text = changingBadWords(text);
    
    
    // update for our bad words ends
    let textArray = text.split(" ");
    textArray.forEach(function (element, index) {
      // update for our bad words starts
      //   if (element.toLowerCase().includes(word.toLowerCase())) {
    //     htmlString = htmlString.concat("<b>" + element + "</b>");
    //   } else {
    //     htmlString = htmlString.concat(element);
    //   }
    //   if (index !== (textArray.length - 1)) {
    //     htmlString = htmlString.concat(" ");
    //   }
    // });
    // return htmlString + "</p>";
    // update for our bad words ends
  
    if(matchingWord(element, word)){
      htmlString = htmlString.concat("<b>" + element + "</b>");
    }
    else if(element.includes(word) && element !== word){
      newElement = element.replace(word, "<b>" + word + "</b>");
      htmlString = htmlString.concat(newElement);
    }
    else{
      htmlString = htmlString.concat(element);
    }
    badWordsArray.forEach(function(not){
      if (index !== (textArray.length - 1 && textArray.length - 1 !== not)){
        htmlString = htmlString.concat(" ");
      }
    });
  });
  return htmlString + "</p>"
  }
  
  function topThreeWords(text){
    if (noInputtedWord(text)){
      return 0;
    }
    text = checkingSentence(text);
    let textArray = text.split(" ");
    let highestWord = ""
    let highestCount = 0;
    let result = "";
    textArray.forEach(function (element) {
      let wordCount = numberOfOccurrencesInText(element, text);
      if(wordCount > highestCount) {
        highestCount = wordCount;
        highestWord = element;
      }
      result = highestWord + " " + highestCount;
    });
    return result;
  }
  
  // UI Logic
  
  // $(document).ready(function () {
  //   $("form#word-counter").submit(function (event) {
  //     event.preventDefault();
  //     const passage = $("#text-passage").val();
  //     const word = $("#word").val();
  //     const wordCount = wordCounter(passage);
  //     const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  //     $("#total-count").html(wordCount);
  //     $("#selected-count").html(occurrencesOfWord);
  //     $("#bolded-passage").html(boldPassage(word, passage));
  //   });
  // });
  
  
  $(document).ready( function(){
    $("form#word-counter").submit( function(event){
      event.preventDefault();
      let sentence1 = $("#text-passage").val();
      let word = $("#word").val();
      let boldedPassage = boldPassage(word, sentence1);
      let maskedBoldPassage = changingBadWords(boldedPassage);
      $("#bolded-passage").html(maskedBoldPassage);
      let topMostWord = topThreeWords(sentence1);
      let topMostWord1 = topMostWord.replace(/\s|[0-9]/g, "");
      topMostWord1 = topMostWord1.trim();
      let regexd = new RegExp(topMostWord1, "gi");
      let sentence2 = sentence1.replace(regexd, "");
      let secondWord = topThreeWords(sentence2);
      let secondWord1 = secondWord.replace(/\s|[0-9]/g, "");
      secondWord1 = secondWord1.trim();
      let regexd2 = new RegExp(secondWord1, "gi");
      let sentence3 = sentence2.replace(regexd2, "");
      let thirdWord = topThreeWords(sentence3);
      $("#top3Word").html(topMostWord + "<br>" + secondWord + "</br>" + thirdWord);
      $("#total-count").text(wordCounter(sentence1));
      $("#selected-count").text(numberOfOccurrencesInText(word, sentence1));
      sentence1 = $("#text-passage").val("");
      word = $("#word").val();
    });
  });


//   Finally done with both userInterface logic and business logic of application