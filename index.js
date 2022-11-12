const employee = {
    name : "Chris Bonet",
    streetAddress : "74-12 35th Avenue",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployees = { ...object};
    newEmployees[key] = value;
    return newEmployees;
}; //DONE//

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}; //DONE//

function deleteFromEmployeeByKey(object, key) {
    const newEmployees = { ...object };
    delete newEmployees[key];
    return newEmployees;
};

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
};