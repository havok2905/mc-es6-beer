'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Ingredient = (function () {
  function Ingredient(name) {
    _classCallCheck(this, Ingredient);

    this.name = name;
  }

  _createClass(Ingredient, [{
    key: 'classname',
    value: function classname() {
      return 'Ingredient';
    }
  }]);

  return Ingredient;
})();

var Hop = (function (_Ingredient) {
  function Hop(name) {
    _classCallCheck(this, Hop);

    _get(Object.getPrototypeOf(Hop.prototype), 'constructor', this).call(this, name);
  }

  _inherits(Hop, _Ingredient);

  _createClass(Hop, [{
    key: 'ingredientName',
    value: function ingredientName() {
      return 'Hop';
    }
  }]);

  return Hop;
})(Ingredient);

var Malt = (function (_Ingredient2) {
  function Malt(name) {
    _classCallCheck(this, Malt);

    _get(Object.getPrototypeOf(Malt.prototype), 'constructor', this).call(this, name);
  }

  _inherits(Malt, _Ingredient2);

  _createClass(Malt, [{
    key: 'ingredientName',
    value: function ingredientName() {
      return 'Malt';
    }
  }]);

  return Malt;
})(Ingredient);

var Yeast = (function (_Ingredient3) {
  function Yeast(name, type) {
    _classCallCheck(this, Yeast);

    _get(Object.getPrototypeOf(Yeast.prototype), 'constructor', this).call(this, name);

    this.type = type;
  }

  _inherits(Yeast, _Ingredient3);

  _createClass(Yeast, [{
    key: 'ingredientName',
    value: function ingredientName() {
      return 'Yeast';
    }
  }]);

  return Yeast;
})(Ingredient);

var Beer = (function () {
  function Beer(args) {
    _classCallCheck(this, Beer);

    this.name = args.name;
    this.ingredients = args.ingredients;
  }

  _createClass(Beer, [{
    key: 'ingredientByName',
    value: function ingredientByName(name) {
      return this.ingredients.filter(function (i) {
        return i.ingredientName() === name;
      });
    }
  }], [{
    key: 'drinkable',
    value: function drinkable() {
      return true;
    }
  }]);

  return Beer;
})();

var ingredients = [new Hop('Cascade'), new Hop('Chinook'), new Hop('Centenial'), new Malt('Pale Ale'), new Malt('Crystal'), new Yeast('American 05', 'ale')];

var beerArgs = {
  ingredients: ingredients,
  name: 'McLean Ale'
};

var beer = new Beer(beerArgs);

console.log(Beer.drinkable());
console.log(beer.ingredientByName('Hop'));
console.log(beer.ingredientByName('Malt'));
console.log(beer.ingredientByName('Yeast'));
