class Product {
    constructor(nameOfProduct, calories) {
        if(calories <= 0 || typeof nameOfProduct === 'undefined' || 
        typeof calories === 'undefined' || typeof calories === 'string' || 
        nameOfProduct.length === 0 || typeof nameOfProduct === 'number') console.log('Enter the correct product name or the correct number of calories');
        else {
            this.title = nameOfProduct;
            this.calories = calories;
        }
    }
}

class Dish {
    constructor(nameOfDish) {
        if(typeof nameOfDish === 'undefined' || typeof nameOfDish === 'number' || 
        nameOfDish.length === 0) console.log('Enter the correct dish name');
        else {
            this.title = nameOfDish;
            this.products = [];
        }
    }
    addProduct(ingredient, quantity) {
        if(quantity <= 0 || typeof ingredient === 'undefined' || typeof quantity === 'undefined' || 
        ingredient.length === 0 || typeof ingredient === 'number' ||  typeof quantity === 'string') {
            console.log('Enter the correct ingredient name or the correct number of quantity');
        }
        else {
            this.products.push([ingredient, quantity]);
        }
    }
    getCalories() {
        let calories = 0;
        let amount = 0;
        for (let i = 0; i <  this.products.length; i++) {
            amount = this.products[i][1]/100 * this.products[i][0].calories;
            calories += amount;
            
        }
        return calories;
    }
}

class CaloriesCalculator {
    constructor() {
        this.nameOfDish = [];
    }
    
    addDish(nameOfDish) {
        if(typeof nameOfDish === 'undefined' || typeof nameOfDish === "number") console.log('Enter the correct dish name');
        else this.nameOfDish.push(nameOfDish);
    }
    
    getTotalCalories() {
        let calories = 0;
        let amount = 0;
        for (let i = 0; i < this.nameOfDish[0].products.length; i++) {
            amount =  this.nameOfDish[0].products[i][1]/100 * this.nameOfDish[0].products[i][0].calories;
            calories += amount;
            
        }
        return calories;
        
    }
    getAllDishesInfo() {
        let dish = this.nameOfDish[0].products;
        let footerString = `=========================================`;
        let headString = footerString + `\n ${this.nameOfDish[0].title} - 1 порция, ${calories} ккал:`;
        
        for (let i = 0; i < dish.length; i++) {
            headString += (`\n   * ${dish[i][0].title}, ${dish[i][1]} гр., ` + dish[i][0].calories * dish[i][1]/100 + ' ккал\n');
        }
        return(headString + footerString);
    }
    
}

const meat = new Product('Филе говядина', 158);
const rice = new Product('Рис', 130);
const onion = new Product('Лук', 40);
const carrot = new Product('Морковь', 41);

const meat1 = new Product('', -158);
const meat2 = new Product(138);
const meat3 = new Product();
const meat4 = new Product(158, 'Рис');

const plov = new Dish('Плов');

const plovTest1 = new Dish('');
const plovTest2 = new Dish();
const plovTest3 = new Dish(-15);

plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);

plov.addProduct();
plov.addProduct('', -20);
plov.addProduct(meat, -20);
plov.addProduct(20);


const calculator = new CaloriesCalculator();
calculator.addDish(plov);

calculator.addDish();
calculator.addDish(-20);

const calories = calculator.getTotalCalories();
console.log(calories);
const totals = calculator.getAllDishesInfo();
console.log(totals);
