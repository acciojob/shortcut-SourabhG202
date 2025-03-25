function shortcut(str1, str2) {
  // your
	if(!str1.trim() || !str2.trim()){
		return "";
	}
	return str1.trim()[0]+str2.trim()[0];
}

// Do not change the code below.
const str1 = prompt("Enter str1:");
const str2 = prompt("Enter str2:");
alert(shortcut(str1, str2));
