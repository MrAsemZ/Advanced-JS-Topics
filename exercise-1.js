//code Output
//undefined
//20

//the issue was becouse of hoisting before assignment

// Create the variable first
let name = "Jone";

// Then use it
console.log(name); // Jone


function test() {

    // x belongs to the test() function
    let x = 10;

    if (true) {

        // y only belongs to this if block
        let y = 20;

        console.log(y); // 20
    }

    // y cannot be used here
    // console.log(y); // ERROR
}

test();

