
// Insert angka ke textview
function insert(num){
	if (document.form.textarea.value.charAt(document.form.textarea.value.length - 1) !== num && /[+-/*]/gi.test(document.form.textarea.value.charAt(document.form.textarea.value.length - 1)) && /[+-/*]/gi.test(num)) {
		document.form.textarea.value = document.form.textarea.value.slice(0, -1);
	} else if (document.form.textarea.value.charAt(document.form.textarea.value.length - 1) == num && /[+-/*]/gi.test(num)) {
		return false;
	}
	let separate = document.form.textarea.value.split(/[\+\-\/\*]/);
	console.log(separate)
	if (separate[separate.length - 1].includes(".") && num == ".") {
		return false;
	}

	document.form.textarea.value += num
}

// Fungsi Hitung
function equal(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}

// Clean
function clean(){
	document.form.textarea.value = "";
}

// Delete
function back(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}