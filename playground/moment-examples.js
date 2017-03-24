var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current time', now.unix());

var timestamp = 1490316842;
var currentMoment = moment.unix(timestamp);
console.log(currentMoment.format('MMM D, YY @ h:mm a'));

console.log(currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
