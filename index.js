class Ingredient {
  constructor(name) {
    this.name = name;
  }
  
  classname() {
    return 'Ingredient';
  }
}

class Hop extends Ingredient {
  constructor(name) {
    super(name);
  }
  
  ingredientName() {
    return 'Hop';
  }
}

class Malt extends Ingredient {
  constructor(name) {
    super(name);
  }
  
  ingredientName() {
    return 'Malt';
  }
}

class Yeast extends Ingredient {
  constructor(name, type) {
    super(name);
    
    this.type = type;
  }
  
  ingredientName() {
    return 'Yeast';
  }
}

class Beer {
  constructor(args) {
    this.name        = args.name;
	  this.ingredients = args.ingredients; 
  }
  
  ingredientByName(name) {
    return this.ingredients.filter(i => i.ingredientName() === name);
  }
  
  static drinkable() {
    return true;
  }
}

let ingredients = [
  new Hop('Cascade'),
  new Hop('Chinook'),
  new Hop('Centenial'),
  new Malt('Pale Ale'),
  new Malt('Crystal'),
  new Yeast('American 05', 'ale')  
];

let beerArgs = {
  ingredients,
  name: 'McLean Ale'
};

let beer = new Beer(beerArgs);

console.log(Beer.drinkable());
console.log(beer.ingredientByName('Hop'));
console.log(beer.ingredientByName('Malt'));
console.log(beer.ingredientByName('Yeast'));