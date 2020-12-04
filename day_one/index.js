const expenses = require('./expense_report');

const test_list = [ 
  1721,
  979,
  366,
  299,
  675,
  1456,
];

let final_value = 0;

for (let i = 0; i < expenses.length; i++) {
  let starting_value = expenses[i];
  let starting_index = i;
  console.log(starting_value);
  console.log(i);
  for (let j = 0; j < expenses.length; j++) {
    let compare_value = expenses[j];
    if (j === starting_index) {
      console.log('skip the dupe');
    } else {
      let sum = starting_value + compare_value;
      if (sum === 2020) {
        final_value = starting_value * compare_value;
      }
    }
  }
}

console.log(final_value);
