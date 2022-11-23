// Basic types
let id: number = 5;
let company: string = "Traversy media";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
// ids.push("Hello");
console.log(ids);

let arr: any[] = [1, true, "hello"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];

console.log(person);

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "brad"],
  [2, "brag"],
  [3, "dad"],
];

console.log(employee);

// Union
let pid: string | number = 22;
console.log(pid);

// Enum
enum Direction1 {
  Up = 6,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Harry",
};

console.log(user);

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

console.log(customerId);

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

function log(message: string | number): void {
  console.log(message);
}

log(5);

// Interfaces
interface UserInterFace {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterFace = {
  id: 1,
  name: "john",
};

// user1.id = 6;
console.log(user1);

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Interfaces
interface PersonInterFace {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterFace {
  id: number; // You can write public, private or protected properties (variables) here eg. private id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shree", "Care Taker");

console.log(emp.register());

// Generics (basicaly used to build reusable components)
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["john", "johny", "janardhan"]);

numArray.push(8);
strArray.push("Tara ram pam ram pam pam");

console.log(numArray);
console.log(strArray);
