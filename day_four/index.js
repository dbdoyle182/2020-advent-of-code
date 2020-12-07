const test_data = require('./test_data.json');
const data = require('./data.json');


let valid_tickets = 0;

const checkIfValid = (ticket) => {
  let keys = Object.keys(ticket);
  if (keys.length === 8) {
    for (let item in ticket) {
      if (!validation(item, ticket[item])) {
        return false;
      }
    }
    return true;
  } else if (keys.length === 7 && !keys.includes('cid')) {
    for (let item in ticket) {
      if (!validation(item, ticket[item])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

const between = (value, start, end) => {
  if (value <= end && value >= start) {
    return true;
  } else {
    return false;
  }
}

const checkLength = (value, variableLength) => {
  if (value.length === variableLength) {
    return true;
  } else {
    return false;
  }
}

const checkHeight = (value) => {
  if (value.includes('cm')) {
    let num = parseInt(value.split('cm')[0]);
    if (between(num, 150, 193)) {
      return true;
    } else {
      return false;
    }
  } else if (value.includes('in')) {
    let num = parseInt(value.split('in')[0]);
    if (between(num, 59, 76)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const checkHairColor = (value) => {
  const regEx = /#[0-9a-z]{6}/;
  return regEx.test(value);
}

const checkPid = (value) => {
  const regEx = /[0-9]{9}/;
  return regEx.test(value);
}

const validation = (key, value) => {
  console.log(key, value)
  switch (key) {
    case 'byr': 
      let byr = parseInt(value);
      if (checkLength(byr, 4) && between(byr, 1920, 2002)) {
        return true;
      } else {
        return false;
      }
    case 'iyr':
      let iyr = parseInt(value);
      if (checkLength(iyr, 4) && between(iyr, 2010, 2020)) {
        return true;
      } else {
        return false;
      }
    case 'eyr':
      let eyr = parseInt(value);
      if (checkLength(eyr, 4) && between(eyr, 2020, 2030)) {
        return true;
      } else {
        return false;
      }
    case 'hgt':
      if (checkHeight(value)) {
        return true;
      } else {
        return false;
      }
    case 'hcl':
      return checkHairColor(value);
    case 'ecl':
      return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);
    case 'pid':
      return checkPid(value);
    case 'cid':
      return true;
    default:
      console.log('no')
  }
}

for (let i = 0; i < data.length; i++) {
  let valid = checkIfValid(data[i]);
  if (valid) {
    valid_tickets++;
  } else {
    console.log('invalid ticket');
  }
}

console.log(valid_tickets);