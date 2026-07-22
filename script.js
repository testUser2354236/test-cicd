// Intentionally messy file — used to show SonarCloud catching real issues live.

var counter = 0; // code smell: use let/const instead of var

function checkStatus(x) {
    if (x == 1) { // code smell: use === instead of ==
        console.log("status one");
    } else {
        if (x == 2) {
            console.log("status two");
        } else {
            if (x == 3) {
                console.log("status three");
            } else {
                if (x == 4) { // high cognitive complexity: too many nested if/else
                    console.log("status four");
                }
            }
        }
    }
}

function addNumbers(a, b) {
    var unusedVariable = 42; // code smell: unused variable
    return a + b;
    console.log("this line never runs"); // bug: unreachable code
}

function addNumbersAgain(a, b) {
    // duplicated logic (near-identical to addNumbers above) -> code duplication
    return a + b;
}

function riskyParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        // empty catch block: swallows errors silently, code smell
    }
}

function calculateDiscount(price) {
    return price * 0.85; // magic number: 0.85 should be a named constant
}

checkStatus(counter);
