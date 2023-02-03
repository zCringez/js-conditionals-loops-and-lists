



function example_list_creation() {
    let orig = "Miran" // ursprüngliche Zeichenkette
    let res = []; // Neue leere Liste. Hier hängen wir die Zeichen von orig an.

    // Über jedes Zeichen von orig iterieren
    for ( let i = 0; i < orig.length; i++ ) {
        res.push( orig[i] ) // Zeichen am Ende anhängen
    }

    // Liste in Zeichenkette umwandeln
    //res = res.join("")
    print(res)


}

function checkForXAufgabe12() {
    let orig = read()
    let res = [];
    
    for (let i = 0; i < orig.length; i++) {
        res.push(orig[i]);
    }
    
    res = res.join("");
    if (res.includes("x")) {
        console.log("x is present in the input");
    } else {
        console.log("x is not present in the input");
    }
    }
    
    function checkForLengthAufgabe13() {
        let input = read();
        if (input.length > 0 && input.length < 12) {
          console.log("Input is between 0 and 12 characters long.");
        } else {
          console.log("Input is not between 0 and 12 characters long.");
        }
      }
      function doubleInputAufgabe14() {
        let input = read();
        let result = "";
        for (let i = 0; i < input.length; i++) {
          result += input[i] + input[i];
        }
        console.log(result);
      }
      //Ist keine  Zeichenkette als bei 14 wäre es 1144 und nicht 1414
      function countSpacesAufgabe15() {
        let input = read();
        let count = 0;
        for (let i = 0; i < input.length; i++) {
          if (input[i] === " ") {
            count++;
          }
        }
        console.log("Anzahl der Leerzeichen: " + count);
      }
      function replaceSpacesAufgabe16() {
        let input = read();
        let result = "";
        for (let i = 0; i < input.length; i++) {
          if (input[i] === " ") {
            result += "_";
          } else {
            result += input[i];
          }
        }
        console.log(result);
      }
      function checkPeriodsAufgabe17() {
        let input = read();
        let valid = true;
        for (let i = 0; i < input.length - 1; i++) {
          if (input[i] === "." && input[i + 1] !== " ") {
            valid = false;
            break;
          }
        }
        console.log("Eingabe ist gültig: " + valid);
      }
      
      function reverseInputAufgabe18() {
        let input = read();
        let result = "";
        for (let i = input.length - 1; i >= 0; i--) {
          result += input[i];
        }
        console.log(result);
      }
      function checkPalindromeAufgabe19() {
        let input = read();
        let valid = true;
        for (let i = 0; i < input.length / 2; i++) {
          if (input[i] !== input[input.length - i - 1]) {
            valid = false;
            break;
          }
        }
        console.log("Eingabe ist ein Palindrom: " + valid);
      }

      function toUppercaseAufgabe20() {
        let input = read();
        let result = "";
        for (let i = 0; i < input.length; i++) {
          result += input[i].toUpperCase();
        }
        console.log(result);
      }
      
      function toLowercaseAufgabe21() {
        let input = read();
        let result = "";
        for (let i = 0; i < input.length; i++) {
          result += input[i].toLowerCase();
        }
        console.log(result);
      }
    
      function replaceUntilKAufgabe22() {
        let input = read();
        let result = "";
        let i;
        for (i = 0; i < input.length; i++) {
          if (input[i] === "k") {
            break;
          }
          result += "$";
        }
        console.log(result + input.substring(i));
      }
        
      
      function replaceUntilUppercaseAufgabe23() {
        let input = read();
        let result = "";
        let i;
        for (i = 0; i < input.length; i++) {
          if (input[i] === input[i].toUpperCase()) {
            break;
          }
          result += input[i].toUpperCase();
        }
        console.log(result + input.substring(i));
      }
      function repeatFirstCharacterAufgabe24() {
        let input = read();
        console.log(input[0] + input + input[0]);
      }
      
      


      




      
      





      
      
      
      
      
    

      




