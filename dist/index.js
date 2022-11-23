"use strict";
// Basic types
let id = 5;
let company = "Traversy media";
let isPublished = true;
let x = "Hello";
let age;
let ids = [1, 2, 3, 4, 5];
// ids.push("Hello");
console.log(ids);
let arr = [1, true, "hello"];
// Tuple
let person = [1, "Brad", true];
console.log(person);
// Tuple Array
let employee;
employee = [
    [1, "brad"],
    [2, "brag"],
    [3, "dad"],
];
console.log(employee);
// Union
let pid = 22;
console.log(pid);
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 6] = "Up";
    Direction1[Direction1["Down"] = 7] = "Down";
    Direction1[Direction1["Left"] = 8] = "Left";
    Direction1[Direction1["Right"] = 9] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);
const user = {
    id: 1,
    name: "Harry",
};
console.log(user);
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
console.log(customerId);
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log(5);
const user1 = {
    id: 1,
    name: "john",
};
// user1.id = 6;
console.log(user1);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // methods (functions)
    register() {
        return `${this.name} is now registered`;
    }
}
const hari = new Person(1, "Hari Patil");
const pratik = new Person(2, "Pratik Patil");
console.log(hari.register());
console.log(hari, pratik);
// public - Access property (variable) from anywhere. no need to write as every property is default set to public
// private - You can only access this property within this class
// protected - You can access within either this class or within the class that is extended from this class
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shree", "Care Taker");
console.log(emp.register());
// Generics (basicaly used to build reusable components)
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["john", "johny", "janardhan"]);
numArray.push(8);
strArray.push("Tara ram pam ram pam pam");
console.log(numArray);
console.log(strArray);
