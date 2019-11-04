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
    constructor(dishes) {
        if(typeof dishes === 'undefined' || typeof dishes === 'number' || 
        dishes.length === 0) console.log('Enter the correct dish name');
        else {
            this.title = dishes;
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
        let caloriesOfDish = 0;
        let amount = 0;
        for (let i = 0; i <  this.products.length; i++) {
            amount = this.products[i][1]/100 * this.products[i][0].calories;
            caloriesOfDish += amount;
            
        }
        return caloriesOfDish;
    }
}

class CaloriesCalculator {
    constructor() {
        this.dishes = [];
    }
    
    addDish(dish) {
        if(typeof dish === 'undefined' || typeof dish === "number") console.log('Enter the correct dish');
        else this.dishes.push(dish);
    }
    
    getTotalCalories() {
        let calories = 0;
        let amount = 0;
        
        for (let j = 0; j < this.dishes.length; j++) {
            
            for (let i = 0; i < this.dishes[j].products.length; i++) {
                amount =  this.dishes[j].products[i][1]/100 * this.dishes[j].products[i][0].calories;
                calories += amount;
            }
        }
        return `Total calories: ${calories}`;
    }
    
    getAllDishesInfo() {
        let allCaloriesInfo = '';
        let dish;
        const footerString = `\n=========================================\n`;
        let headString;
        for (let j = 0; j < this.dishes.length; j++) {
            dish = this.dishes[j].products;
            headString = footerString + ` ${this.dishes[j].title} - 1 порция, ${this.dishes[j].getCalories()} ккал:`;
            
            for (let i = 0; i < dish.length; i++) {
                headString += `\n   * ${dish[i][0].title}, ${dish[i][1]} гр.,  ${dish[i][0].calories * dish[i][1]/100} ккал\n`;
            }
            allCaloriesInfo += (headString + footerString);
        }
        return allCaloriesInfo;
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

plov.getCalories();

const pork = new Product('Филе свинина', 170);
const potatoes = new Product('Картофель', 150);
const pepper = new Product('Перец', 20);

const roast = new Dish('Жаркое');

roast.addProduct(pork, 150);
roast.addProduct(potatoes, 200);
roast.addProduct(pepper, 100);
roast.addProduct(carrot, 100);

roast.getCalories();

const calculator = new CaloriesCalculator();

calculator.addDish(plov);
calculator.addDish(roast);

calculator.addDish();
calculator.addDish(-20);

const totals = calculator.getAllDishesInfo();
console.log(totals);
const calories = calculator.getTotalCalories();
console.log(calories);
