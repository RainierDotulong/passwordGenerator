document.querySelector('#generate').addEventListener('click', writePassword)
// User Input Vars
var passwordLength
var specialCharacter
var number
var uppercase
var lowercase

//Conditions
var characterArray = [
	'!',
	'#',
	'$',
	'%',
	'&',
	"'",
	'(',
	')',
	'*',
	'+',
	',',
	'-',
	'.',
	'/',
	':',
	';',
	'<',
	'=',
	'>',
	'?',
	'@',
	'[',
	']',
	'^',
	'_',
	'`',
	'{',
	'|',
	'}',
	'~',
]
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var alphabetLowerArray = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
]
var alphabetUpperArray = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
]
// Prompts
function generatePassword() {
	console.log('Generate Password button clicked')
	//length of password check
	let length = prompt('Please enter your password Length')
	console.log(`length is: ${length}`)
	while (length <= 7 || length >= 129) {
		alert('PASSWORD LENGTH NOT IN RANGE MUST BE 8-128 CHARACTERS')
		let length = prompt('Please enter your password Length')
	}
	alert(`password will be ${length} characters long`)
	//parameters
	let specialCharacter = confirm(
		'Would you like to include special characters?'
	)
	let number = confirm('Would you like to include numbers?')
	let uppercase = confirm('Would you like to include uppercase letters?')
	let lowercase = confirm('Would you like to include lowercase letters?')
	//Must contain at least 1 parameter otherwise generated password would be empty
	while (
		specialCharacter === false &&
		number === false &&
		uppercase === false &&
		lowercase === false
	) {
		alert('Password must contain at least 1 parameter to generate.')
		let specialCharacter = confirm(
			'Would you like to include special characters?'
		)
		let number = confirm('Would you like to include numbers?')
		let uppercase = confirm('Would you like to include uppercase letters?')
		let lowercase = confirm('Would you like to include lowercase letters?')
	}
	var parameters
	if (specialCharacter && number && uppercase && lowercase) {
		parameters = characterArray.concat(
			numberArray,
			alphabetLowerArray,
			alphabetUpperArray
		)
	} //3 parameters
	else if (specialCharacter && number && uppercase) {
		parameters = characterArray.concat(numberArray, alphabetUpperArray)
	} else if (specialCharacter && number && lowercase) {
		parameters = characterArray.concat(numberArray, alphabetLowerArray)
	} else if (specialCharacter && lowercase && uppercase) {
		parameters = characterArray.concat(alphabetLowerArray, alphabetUpperArray)
	} else if (number && lowercase && uppercase) {
		parameters = numberArray.concat(lowercase, uppercase)
	} //2 parameters
	else if (specialCharacter && number) {
		parameters = characterArray.concat(numberArray)
	} else if (specialCharacter && lowercase) {
		parameters = characterArray.concat(alphabetLowerArray)
	} else if (specialCharacter && uppercase) {
		parameters = characterArray.concat(alphabetUpperArray)
	} else if (lowercase && number) {
		parameters = alphabetLowerArray.concat(numberArray)
	} else if (lowercase && uppercase) {
		parameters = alphabetLowerArray.concat(alphabetUpperArray)
	} else if (uppercase && number) {
		parameters = alphabetUpperArray.concat(numberArray)
	} //1 parameters
	else if (specialCharacter) {
		parameters = characterArray
	} else if (number) {
		parameters = numberArray
	} else if (lowercase) {
		parameters = alphabetLowerArray
	} else if (uppercase) {
		parameters = alphabetUpperArray
	}

	var password = []
	// Random Variable Selection
	for (var i = 0; i < length; i++) {
		var pickedParameters =
			parameters[Math.floor(Math.random() * parameters.length)]
		password.push(pickedParameters)
	}
	// convert password to string
	var passwordString = password.join('')
	asdf(passwordString)
	return passwordString
}

function asdf(passwordString) {
	document.getElementById('password').textContent = passwordString
}
function writePassword() {
	var password = generatePassword()
	var passwordText = document.querySelector('#password')

	passwordText.value = password
}
