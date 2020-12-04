const expenses = require('./expense_report');

const test_list = [ 
  1721,
  979,
  366,
  299,
  675,
  1456,
];

const find_sum_of_two = (list) => {
  let final_value = 0;

  for (let i = 0; i < list.length; i++) {
    let starting_value = list[i];
    let starting_index = i;
    console.log(starting_value);
    console.log(i);
    for (let j = 0; j < list.length; j++) {
      let compare_value = list[j];
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
}

// find_sum_of_two(expenses);

const find_sum_of_three = (list) => {
  let final_value = 0;

  for (let i = 0; i < list.length; i++) {
    let starting_value = list[i];
    let starting_index = i;
    console.log(starting_value);
    console.log(i);
    for (let j = 0; j < list.length; j++) {
      let second_value = list[j];
      let second_index = j;
      if (j === starting_index) {
        console.log('skip the dupe');
      } else {
        for (let k = 0; k < list.length; k++) {
          let third_value = list[k];
          if (k === second_index || k === starting_index) {
            console.log('skip da dupe');
          } else {
            let sum = starting_value + second_value + third_value;
            if (sum === 2020) {
              final_value = starting_value * second_value * third_value;
            }
          }
        }
      }
    }
  }

  console.log(final_value);
}

find_sum_of_three(expenses);
