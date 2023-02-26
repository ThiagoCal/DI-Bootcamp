const firstDay = new Date('January 01, 2024 00:00:01');

const dateNow = new Date ()


let diffTime = Math.abs(new Date().valueOf() - firstDay.valueOf());
let days = diffTime / (24*60*60*1000);
let hours = (days % 1) * 24;
let minutes = (hours % 1) * 60;
let secs = (minutes % 1) * 60;
[days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]

console.log('the next holiday is in '+days+'d', 'and '+hours+'h', minutes+'m', secs+'s');