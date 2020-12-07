const fs = require('fs');

let data = fs.readFileSync('./data.txt', { encoding: 'utf-8' });

data = data.split('\n');
let ticketArray = [];
let ticketObj = {};
data.forEach((lineItem, index) => {
  console.log(lineItem);
  if (lineItem === '') {
    console.log('skip it')
    ticketArray.push(ticketObj);
    ticketObj = {};
  } else {
    lineItem.split(' ').forEach(item => {
      let ticketValue = item.split(':');
      ticketObj[ticketValue[0]] = ticketValue[1];
    })
    if (data.length - 1 === index) {
      ticketArray.push(ticketObj);
    }
  }
})
console.log(ticketArray);

fs.writeFileSync('./data.json', JSON.stringify(ticketArray));