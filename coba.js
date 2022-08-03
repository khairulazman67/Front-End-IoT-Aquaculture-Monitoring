let currentTime = new Date();
let currentHour = parseInt(currentTime.getHours());
let availableDates = ["10:00 PM", "08:00 AM", "12:00 AM", "01:00 AM", "12:00 PM", "02:40 AM", "07:00 AM", "06:00 PM"];
let convertedHours = availableDates.map((date) => {
    let time = parseInt(date.split(' ')[0]);
    let period = date.split(' ')[1];

    if(time === 12 && period === 'PM' )
        return time;
    if(time < 12 && period === 'AM')
        return time;
    return time + 12;
});

let getNearestTime = (convertedHours, currentHour) => {
    console.log('dasdas',convertedHours)
    let nearestTime;
    let minValue = convertedHours[0] > currentHour ? (convertedHours[0] - currentHour) : (currentHour - convertedHours[0]);
    convertedHours.reduce((minVal, hour) => {
        let hourDiff = (currentHour > hour) ? currentHour - hour : hour - currentHour;
        if(hourDiff <= minVal) {
            nearestTime = hour;
            return hourDiff;
        } else {
            return minVal;
        }
    }, minValue)

    return availableDates[convertedHours.indexOf(nearestTime)];
};

console.log(getNearestTime(convertedHours, currentHour));

// const timeString = '23:00:00'
// // Prepend any date. Use your birthday.
// const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
//     .toLocaleTimeString('en-US',
//         {timeZone:'GMT',hour12:true,hour:'numeric',minute:'numeric'}
// );
// console.log(timeString12hr)