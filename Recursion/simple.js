function takeShower() {
    return "Showering";
}

function eatBreakfast () {
    let meal = cookeFood();
    return `Eating ${meal}`;
}

function cookeFood () {
    let items = ["Oatmeal", "Eggs", "Chiken", "Salat"];
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp () {
    takeShower();
    eatBreakfast();
    console.log('ok ready to go to work');
}

wakeUp();