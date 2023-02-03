



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
      
      




