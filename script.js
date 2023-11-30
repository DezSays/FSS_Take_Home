class MyClass {
  constructor() {
    this.foo = "foo";
  }

  getField() {
    return this.foo;
  }

  get getterExample() {
    return "foo";
  }
}

const myInstance = new MyClass();

console.log(myInstance.getField());
