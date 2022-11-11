const DAYS = 'DAYS';
const HOURS = 'HOURS';
const MINUTES = 'MINUTES';
const SECONDS = 'SECONDS';

function timeDifference (startDate = new Date('1995-11-17'), endDate = new Date(), type = DAYS) {
    let result = Math.abs((Date.parse(endDate) - Date.parse(startDate)) / 1000);
    switch (type) {
        case SECONDS:
            result = Math.floor(result);
            break;
        case MINUTES:
            result = Math.floor(result / 60);
            break;
        case HOURS:
            result = Math.floor(result / 3600);
            break;
        case DAYS:
            result = Math.floor(result / 86400);
            break;
    }
    return `${result} ${type.toLowerCase()}`;
};

console.log(timeDifference('31 Jan 2022', '03 Feb 2021', DAYS));
console.log(timeDifference('02 Aug 1985', '03 Aug 1985', 'SECONDS'));
