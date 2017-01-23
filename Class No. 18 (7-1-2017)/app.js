function Plan(name, price, space, transfer, pages) {
     this.name = name; 
     this.price = price;
     this.space = space;
     this.transfer = transfer;
     this.pages = pages;
    }
    var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
console.log(plan1);