function truthCheck(collection, pre) {
    let result = true;
    //Check if truthy
    collection.forEach(element => {
        if (!element[pre] === true) {
            result = false;
        }
    });
    return result;
}

console.log(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true, "alias": "Repete" }, { "name": "FastFoward", "onBoat": true }], "onBoat"));