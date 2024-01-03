function solve(speed, area) {
    let speedLimit = 0;
    let status;
    let difference = 0;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            difference = speed - speedLimit;

            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }

            if (speed >= speedLimit) {

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status} `);
                
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            };

            break;

        case 'interstate':
            speedLimit = 90;
            difference = speed - speedLimit;


            if (speed >= speedLimit) {

                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status} `);
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            };

            break;

        case 'city':
            speedLimit = 50;
            difference = speed - speedLimit;


            if (speed >= speedLimit) {

                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status} `);
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            };

            break;

        case 'residential':
            speedLimit = 20;
            difference = Math.abs(speed - speedLimit);


            if (speed >= speedLimit) {

                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status} `);
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            };

            break;


        default:
            break;
    }
}

solve(50, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')
