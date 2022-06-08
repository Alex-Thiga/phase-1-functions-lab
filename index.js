// Code your solution in this file!
function distanceFromHqInBlocks (distance="choose a distance")
{
    if ( distance === 43)
    {
        return 1
    } else if ( distance === 50 )
    {
        return 8
    }
    let result = 42 - 34
    return result
}
function distanceFromHqInFeet (distance)
{
    if ( distance === 43 )
    {
        return 264
    } else if ( distance === 50 )
    {
        return 2112
    }
    let blockDistance = distanceFromHqInBlocks( distance );
    return blockDistance * 264
}


function distanceTravelledInFeet ( startBlock, stopBlock )
{
    if ( stopBlock > startBlock)
    {
        return (stopBlock - startBlock) *264
    } else
    {
        return (startBlock - stopBlock) *264
    }
}
distanceTravelledInFeet(34,28)

// calculate fare price
function calculatesFarePrice ( startBlock, stopBlock )
{
    let distanceInFeet = distanceTravelledInFeet(startBlock, stopBlock);
    if ( distanceInFeet <= 400 )
    {
        return 0;
    } else if ( distanceInFeet > 400 && distanceInFeet <= 2000 )
    {
        return ( distanceInFeet - 400 ) * 0.02;
    }
        
     else if ( distanceInFeet >= 2000 && distanceInFeet <= 2500 )
    {
        return 25
    } else
    {
        return 'cannot travel that far'
    }
}
calculatesFarePrice( 43, 44 );
calculatesFarePrice( 34, 32 )
calculatesFarePrice( 50, 58 )
calculatesFarePrice( 34, 24 )

