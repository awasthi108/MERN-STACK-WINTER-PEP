const car ={
    engine: "va",
    model: "E6",
    brand: "Audi"
};

car.mileage = 25;

const car2 = { ...car };
car2.model = "Square";

console.log(car2);