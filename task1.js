class Product {
    constructor(nameOfProduct, calories) {
        this.title = nameOfProduct;
        this.calories = calories;
    }
}

class Dish {
    constructor(nameOfDish) {
        this.title = nameOfDish;
        this.products = [];
    }
    addProduct(ingredient, quantity) {
        this.products.push([ingredient, quantity]);
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
        this.nameOfDish.push(nameOfDish);
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

const plov = new Dish('Плов');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);

const calculator = new CaloriesCalculator();
calculator.addDish(plov);

const calories = calculator.getTotalCalories();
console.log(calories);
const totals = calculator.getAllDishesInfo();
console.log(totals);
