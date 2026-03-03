// Body mass index challenge.

let markHeight1 = 1.69;
let markMass1 = 78;
let johnHeight1 = 1.95;
let johnMass1 = 92;

let markHeight2 = 1.88;
let markMass2 = 95;
let johnHeight2 = 1.76;
let johnMass2 = 85;

function bodyMassIndex(markmass, markheight, johnmass, johnheight) {
    const markBMI = markmass / markheight ** 2;
    const johnBMI = johnmass / johnheight ** 2;

    const markHigherBMI = markBMI > johnBMI;
    console.log(markHigherBMI);

    if (markHigherBMI) {
        console.log(`Mark's BMI ${markBMI} is greater than John's ${johnBMI}`);
    }
    else {
        console.log(`John's BMI ${johnBMI} is greater than Mark's ${markBMI}`);
    }
}

bodyMassIndex(markMass1, markHeight1, johnMass1, johnHeight1);


bodyMassIndex(markMass2, markHeight2, johnMass2, johnHeight2);