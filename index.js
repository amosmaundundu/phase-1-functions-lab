const scuberHeadquarter = 42;
function distanceFromHqInBlocks(pickUpLocation){
    const distanceInBlocks=pickUpLocation>scuberHeadquarter? pickUpLocation-scuberHeadquarter:scuberHeadquarter-pickUpLocation;
    return distanceInBlocks;

} 
//return distance in feet
function distanceFromHqInFeet(pickUpLocation){
    let distanceInBlocks=distanceFromHqInBlocks(pickUpLocation);
    return distanceInBlocks*264;
}
//distance travelled in feet given starting block and ending block
function distanceTravelledInFeet(startingBlock, endingBlock){
    let distanceTravelled= endingBlock>startingBlock?(endingBlock-startingBlock)*264: (startingBlock-endingBlock)*264;
    return distanceTravelled;
}

//customer return fare
function calculatesFarePrice(startingBlock,endingBlock){
    let distanceInFeet = distanceTravelledInFeet(startingBlock,endingBlock);
    if (distanceInFeet<=400){
    return 0;
}
    else if(distanceInFeet >400 && distanceInFeet < 2000){
    return (distanceInFeet-200)*0.02;
}
else if(distanceInFeet2000){
    if(distanceInFeet>2500){
        return "cannot travel that far";
    }
    return 25;
}
}

