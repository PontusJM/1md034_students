// let burgerList = document.getElementByClassName('burgerlist');

// for(var burger of menu){
// 	let burgerItem = document.createElement('div');
// 	let image = document.createElement('img');
// 	let name = document.createElement('h4');
// 	name.appendChild(document.createTextNode(burger.name));
// 	image.src = burger.image;
// 	let infoList = document.createElement('ul');
// 	let kcal = document.createElement('li');
// 	kcal.appendChild(document.createTextNode(burger.kcal + " kCal"));
// 	infoList.appendChild(kcal);
// 	if(burger.gluten == 'no'){
// 		let gluten = document.createElement('li');
// 		gluten.appendChild(document.createTextNode("Gluten Free"));
// 		infoList.appendChild(gluten);
// 	}
// 	if(burger.lactose == 'no'){
// 		let lactose = document.createElement('li');
// 		lactose.appendChild(document.createTextNode("Lactose Free"));
// 		infoList.appendChild(lactose);
// 	}

// 	burgerItem.appendChild(image);
// 	burgerItem.appendChild(name);
// 	burgerItem.appendChild(infoList);
// 	burgerList.appendChild(burgerItem);
// }

let myButton = document.getElementById('submitbutton');

myButton.onclick = function(){
	console.log("Button clicked");
	getFormData();
}

function getFormData(){
		let fullname = document.getElementById('fullname').value;
		let email = document.getElementById('email').value;
		let street = document.getElementById('street').value;
		let apartment = document.getElementById('apartment').value;
		let dropDown = document.getElementById('recipient');
		let recipient = dropDown.options[dropDown.selectedIndex].text;
		let genders = document.getElementsByName('gender');
		let selectedGender = "";
		for(var gender of genders){
			if(gender.checked){
				selectedGender = gender.value;
			}
		}
		console.log(fullname + email + street + apartment + recipient + selectedGender);
;}