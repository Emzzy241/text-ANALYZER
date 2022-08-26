
<!-- The README FOR PROJECT -->
# TEXT ANALYZER

#### made by Mojiboye Emmanuel

### A word counting website 

### Technologies Used
* Git
* Javascript
* Html
* CSS
* Bootstrap

# Description

_In this website, user is required to enter in any sentence the user wishes to enter and with my algorithm, the words will be counted, some words will be bolded and you get top three count words_

## Setup/Installation
* _Open the directory._
* _Click on the index.html file._
_Note: the website is designed to run on a web browser just be sure you have one. _
* _That's all the installation process you need to carry out. Have fun while communicating with the browser. If you like the website just be sure to give tge project a thumbs up_

## Known Bugs
_As at the launching of this Project there are zero bugs in it. But if you do find a bug in it, be sure to notify me via my various social media handles below_

## WEBSITE LINK
https://github.com/Emzzy241/FORM-LETTER

## License 
Licensed under the GNU General Public License 
© 2022 _by Mojiboye Emmanuel_ All Rights Reserved.

## Contact
_Connect with me @Emmanuel.9944 on instagram and on all other social media pages all @Emmanuel Oluwole_







## ALL THE MANUAL TESTS FOR MY APPLICATION








<!-- All of our tests -->

<!-- Our very first test -->

Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

<!-- First test passed, it spits in 1 when we enter one word into const but when we type in more than one word, our test 
    fails, we have to take a second test to count two words. so if the user enters in two words the function in our second test takes care of that
 -->

<!-- Our second test -->
<!-- In this test, we are checking for both one word and two words  -->

<!-- Our one word test -->
Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

<!-- Our two words test. -->
Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2


 <!-- Our test has been passed .After this test
when user enters 2 words expected Output =  2 words and when they enter 1 word, expected output = 1
-->

<!-- In Our third test 
We'll start by dealing with the fact our function will return 1 for an empty string. Here's the plain English test: -->

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

<!-- After this testwe noticed that our function is counting white spaces, we need to prevent this from happening so we need another test -->

<!-- Our fourth test: returning 0 for white spaces -->

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0


<!-- Our fifth test: not counting numbers as a string -->
Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

<!-- Now we are done with our test for first section, let us move on to writing a test for second function -->

<!-- First test under second test: we need a describe block because it is a new function -->

Describe: numberOfOccurrencesInText()
Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

<!-- Now the real test -->

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

<!-- New test verify that it doesn't return a match if the word and the text aren't the same first. -->

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

<!-- Our test passed if the text and the word are the same return 1 and if the text and the word are different return 0 -->


<!-- Next test: For multiple words: it should return the number of occurences of a word -->

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

<!-- another test that should return an expected output of 0 if there are zero occurences of a word for an empty string  -->

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0


<!-- Now everything is good to go. But what about...

"Red RED red"... we need a test for capital and small letters too because if we try it, it only sees one instead of three -->



Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3


<!-- Writing a new test to tell our algorithm that red! is the same as red. and red, -->


Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3


<!-- Done with this testing, our algorithm sees red!, red. and red, as the same thing but there is an  exception in that -->



<!-- The bug test -->

<!-- Here's the test. (This should be the last test in the Describe block for numberOfOccurrencesInText()). -->

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0


<!-- Here's the test. (This should be the last test in the Describe block for numberOfOccurrencesInText()). -->

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0


<!-- 
We just need to update the first conditional to account for both parameters (text and word): -->


<!-- This should be regarded as a fourth function on bolding a selected test the user wants to be bolded -->

<!-- Done with the application, the next thing is the bolded text section, but first we need to write a test for it. But do bear in mind that TDD is only for the business logic, you should use end to end tests for ui logic but for the simplicity of this project we are using TDD for UI Logic
 -->

<!-- First test for the bolded passage.
NOTE: we did not use html because That will make it too hard to test. Instead, the function will just return a formatted string. No need to interact with the DOM at all! We keep it very simple. Both parameters are one word and the strings don't match.
 -->
Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

<!-- We have passed the first test for our bolded passage next is to return a matching word for this in a <b></b> tag -->

Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

<!-- Our second test for bolded passage has been passed, up next we want to -->

Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"


<!-- The fourth function is on replacing some certain characters with an empty string("")... IN this functionn we are replacing the following characters and with the function with this regex [!#*$%(){}|~*,:;<=>@[|]._]/g, "" we are able to achieve that -->

Describe: The function for changing [!#*$%(){}|~*,:;<=>@[|]._ into an empty string "".

Test: "It should return an empty string("") if a character like the following is entered [!#*$%(){}|~*,:;<=>@[|]._"
Code:
const theSentence = %$!;
checkingSentence(theSentence)
Expected Output: ""( an empty string)

<!-- The fifth function is on changing offensive words into an ***** -->

Describe: The function for changing offensive words into ****.
Test: it should return ***** if one certain bad word from our badWordsArray is enterred
Code:
const passage = "loopdaloop";
changingBadWords(passage);
Expected Outpur: "*****"

<!-- This test now works, and it has successfully been passed  Note: the passage variable contains "loopdaloop" as a string but when I call the changingBadWords function on that string now I get ****-->




<!-- The second test should be on changing 2 or more offensive words into double ***** -->

<!-- Don't forget you need to update your previous functions for passing this two functions -->

Test: it should return ***** if two badWords from our badWordsArray is enterred
Code:
const passage = "loopdaloop";
changingBadWords(passage);
Expected Outpur: "*****"



