module.exports = function toReadable(number) {
  let oneToTwenty = [
    '',
    'one ',
    'two ',
    'three ',
    'four ',
    'five ',
    'six ',
    'seven ',
    'eight ',
    'nine ',
    'ten ',
    'eleven ',
    'twelve ',
    'thirteen ',
    'fourteen ',
    'fifteen ',
    'sixteen ',
    'seventeen ',
    'eighteen ',
    'nineteen ',
  ];
  let tenth = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  let num = number.toString();
  // console.log(num);
  let x = parseInt(num[1] + num[2]);
  console.log(x);
  console.log(num[1] + num[2]);
  // console.log(oneToTwenty[numNumber[num[1] + num[2]]], '@@@@@@');

  if (num.length > 3) return 'overlimit';
  if (number === 0) return 'zero';
  if (number < 20) return (oneToTwenty[number]).trim();
  if (num.length === 2) {
    return (tenth[num[0]] + ' ' + oneToTwenty[num[1]]).trim();
  }
  if (num.length === 3 && num[1] === '0' && num[2] === '0')
    return oneToTwenty[num[0]] + 'hundred';
  if (num.length === 3 && num[1] === '1')
    return (oneToTwenty[num[0]] + 'hundred' + ' ' + oneToTwenty[x]).trim();
  if (num.length === 3 && num[1] === '0')
   return (
      oneToTwenty[num[0]] +
      'hundred' +
      tenth[num[1]] + ' '+
      oneToTwenty[num[2]]
    ).trim();

  if (num.length === 3)
    return (
      oneToTwenty[num[0]] +
      'hundred ' +
      tenth[num[1]] + ' '+
      oneToTwenty[num[2]]
    ).trim();
};
