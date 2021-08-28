const	mapping = {
	"1": "1",
	"2": "abc",
	"3": "def",
	"4": "ghi",
	"5": "jkl",
	"6": "mno",
	"7": "pqrs",
	"8": "tuv",
	"9": "wxyz",
	"0": "0",
};

function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
	let reVal = [];
	phoneNumberHelper(phoneNumber, 0, "", reVal);
  return reVal;
}

function phoneNumberHelper(phoneNumber, index, currentValue, reVal) {
	if (index === phoneNumber.length) {
		reVal.push(currentValue);
		return;
	}
	let possibleLetters = mapping[phoneNumber[index]];
	
	for (let i = 0;  i <  possibleLetters.length; i++)  {
		phoneNumberHelper(phoneNumber, index + 1, currentValue + possibleLetters[i], reVal);
	}
}
const phoneNumber = '1905';
console.log(`PhoneNumberMneumonics: ${JSON.stringify(phoneNumberMnemonics(phoneNumber))} EQ  ['1w0j', '1w0k', '1w0l', '1x0j', '1x0k', '1x0l', '1y0j', '1y0k', '1y0l', '1z0j', '1z0k', '1z0l']`);
