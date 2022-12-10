# CLASS/STATIC PROPERTIES & METHODS

## INTRODUCTION [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)

This repository is a simple single file directory that shows how to create static properties and methods, as well as how to access and manipulate their values.

At this point, we should be conversant with what a `class` is. But for reference purpose, a `class` defines all the methods & properties of an object but doesn't give it any information. `Classes` can have a function inside of them which is called a `method`. Simply put, a `method` is a function within a class. An example is shown below

```js
class Economy {
  constructor(salary) {
    this.salary = salary;
  }


  calcTax() {
    // conditions and output
    // conditions and output
  }


//   calling the method
calcTax();
}
```

From the above example, we have a method called `calcTax` which is a function inside the class. This function can perform any operation according to whatever instruction it was given. A `static method` therefore makes use of the `static` keyword before the method name. Thus

```js
class Economy {
  constructor(salary) {
    this.salary = salary;
  }


 static calcTax() {
    // conditions and output
    // conditions and output
  }


//   calling the method
calcTax();
}
```

Because this method is static, it can only be accessed using the class name which in this case is `Economy`. Thus,

```js
class Economy {
  constructor(salary) {
    this.salary = salary;
  }


 static calcTax() {
    // conditions and output
    // conditions and output
  }


//   calling the method
Economy.calcTax();
}

```

With regards to static properties, they are also declared using the static keyword. Example,

```js
class Fund {
  static initialMoney = 0;
}
```

We have defined a static property of the class Fund with a name `initialMoney`. To access it, we use the class name.

```js
class Fund {
  static initialMoney = 0;
}
Fund.initialMoney += 100;

// The prop initialMoney was set to 0 and made to increase by 100 for addition.
```

The code in this repository just shows ways of declaring and accessing static properties and methods.

Thank you !
