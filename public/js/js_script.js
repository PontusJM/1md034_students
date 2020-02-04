// function menuItem(name, kcal, gluten, lactose, image){
// 	this.name = name;
// 	this.kcal = kcal;
// 	this.gluten = gluten;
// 	this.lactose = lactose;
// 	this.image =  image;

// 	this.burgerInfo = function() {
// 		return this.name + ' ' + this.kcal;
// 	}

// }

// let mcBanger = new menuItem('McBanger', 2000, 'yes','yes','https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg');
// let mcFisker = new menuItem('McFisker',1000,'yes','no','https://sifu.unileversolutions.com/image/en-AU/recipe-topvisual/2/1260-709/crispy-fish-burger-with-jalapeno-tartare-sauce-50486970.jpg');
// let mcBland = new menuItem('McBland',150, 'no','yes','https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg');
// let mcBacon = new menuItem('McBland',1250,'yes','yes','https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg');
// let mcBigSalad = new menuItem('McBigSalad',120,'no','no','https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg');

// let menu = [mcBanger,mcFisker,mcBland,mcBacon,mcBigSalad];

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