const hq = 42;
const distanceFromHqInBlocks = (startBlock) => {
    if (startBlock > hq) {
        return (startBlock - hq);
    } else {
        return (hq - startBlock);
    }
}

const feetInABlock = 264; // 264 feet in a NYC block
const distanceFromHqInFeet = (startBlock) => {
    //  Calling the previous function from within this function
    let distanceFromHq = distanceFromHqInBlocks(startBlock);

    if (distanceFromHq > hq) {
        return (distanceFromHq * feetInABlock);
    } else {
        return (distanceFromHq * feetInABlock);
    }
}

const start = 42;
const destination = 50;
const distanceTravelledInFeet = (start, destination) => {
    if (start > destination) {
        return (start - destination) * feetInABlock;
    } else {
        return (destination - start) * feetInABlock;
    }   
}
distanceTravelledInFeet(start, destination);


const base = 400;
const middle = 2000;
const high = 2500;
const calculatesFarePrice = (start, destination) => {
    //  Calling the previous function from within this function
    let distanceTravelled = distanceTravelledInFeet(start, destination);

    if (distanceTravelled < base) {
        return 0;
    } else if (distanceTravelled >= base && distanceTravelled <= middle) {
        return ((distanceTravelled - base) * .02); // 2 cents per foot
    } else if (distanceTravelled > middle && distanceTravelled <= high) {
        return 25;  // flat fee of $25
    } else if (distanceTravelled > high) {
        return 'cannot travel that far'
    }
}
calculatesFarePrice(start, destination);
