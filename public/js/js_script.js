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