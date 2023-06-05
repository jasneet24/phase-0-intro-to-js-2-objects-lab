// Write your solution in this file!
const employee = {
    name: "Jasneet",
    streetAdress: "12 Headset Street",
    key: "value"
}
function updateEmployeeWithKeyAndValue(employee,key,value){
//This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!
const updatedEmployee = {...employee}
updatedEmployee[key] = value
return updatedEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
//  updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee:
{employee[key]=value
return employee}

function  deleteFromEmployeeByKey(employee, key)
//deletes `key` from a clone of employee and returns the new employee (it is non-destructive):
{const deleteKey = {...employee}
delete deleteKey[key]
return deleteKey
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    //returns employee without the deleted key/value pair:
delete employee[key]
return employee}