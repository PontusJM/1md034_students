function menuItem(name, kcal, gluten, lactose, image){
	this.name = name;
	this.kcal = kcal;
	this.gluten = gluten;
	this.lactose = lactose;
	this.image =  image;

	this.burgerInfo = function() {
		return this.name + ' ' + this.kcal;
	}

}

let mcBanger = new menuItem('McBanger', 2000, 'yes','yes','https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg');
let mcFisker = new menuItem('McFisker',1000,'yes','no','https://sifu.unileversolutions.com/image/en-AU/recipe-topvisual/2/1260-709/crispy-fish-burger-with-jalapeno-tartare-sauce-50486970.jpg');
let mcBland = new menuItem('McBland',150, 'no','yes','https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg');
let mcBacon = new menuItem('McBland',1250,'yes','yes','https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg');
let mcBigSalad = new menuItem('McBigSalad',120,'no','no','https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg');

console.log(mcBanger.burgerInfo());

console.log(mcFisker.burgerInfo());

console.log(mcBland.burgerInfo());

console.log(mcBacon.burgerInfo());

console.log(mcBigSalad.burgerInfo());