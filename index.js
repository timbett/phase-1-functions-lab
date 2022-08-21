// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - 42)
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
    const feetTraveled =  distanceTravelledInFeet(start, destination)

    if(feetTraveled <=400){
       return 0
    }
    if(feetTraveled > 400 && feetTraveled <=2000){
        const billableFeets = feetTraveled - 400
        return billableFeets * 0.02
    }
    if(feetTraveled > 2000 && feetTraveled <=2500){
        return 25
    }

    if (feetTraveled > 2500){
        return 'cannot travel that far'
    }
}