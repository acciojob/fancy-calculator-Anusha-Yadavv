//your JS code here. If required.



function fancy_calculator(v1,v2) {
	
	v1=parseInt(v1)*2;
	v2=parseInt(v2);
	let result=v1+v2
	return `The final result is:+${result}`;;
	
}
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

alert(fancy_calculator(value1,value2));

