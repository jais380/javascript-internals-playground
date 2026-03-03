// Body mass index challenge.

const markHeight1 = 1.69;
const markMass1 = 78;
const johnHeight1 = 1.95;
const johnMass1 = 92;

const markHeight2 = 1.88;
const markMass2 = 95;
const johnHeight2 = 1.76;
const johnMass2 = 85;

// Body mass function
function bodyMassIndex(markmass, markheight, johnmass, johnheight) {

    // calculations
    const markBMI = markmass / markheight ** 2;
    const johnBMI = johnmass / johnheight ** 2;

    // Boolean condition
    const markHigherBMI = markBMI > johnBMI;
    console.log(markHigherBMI);

    // To get the correct message
    if (markHigherBMI) {
        console.log(`Mark's BMI ${markBMI} is greater than John's ${johnBMI}`);
    }
    else {
        console.log(`John's BMI ${johnBMI} is greater than Mark's ${markBMI}`);
    }
}

bodyMassIndex(markMass1, markHeight1, johnMass1, johnHeight1);


bodyMassIndex(markMass2, markHeight2, johnMass2, johnHeight2);