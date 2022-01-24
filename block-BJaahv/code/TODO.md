# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object

```js
function createUser(name, id, noOfProjects) {
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  user.getProjects = function () {
    return user.noOfProjects;
  };
  user.changeName = function (newName) {
    let prevName = user.name;
    user.name = newName;
    return prevName;
  };
  user.incrementProject = function () {
    user.noOfProjects += 1;
    return user.noOfProjects;
  };
  user.decrementProject = function (num = 1) {
    user.noOfProjects -= 1;
    return user.noOfProjects;
  };
  return user;
}

let arya = createUser("Arya", 102, 23);
let john = createUser("John", 113, 37);
```

- [ ] Using Object.create (prototypal pattern)

```js
let userMethods = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },
  incrementProject: function () {
    this.noOfProjects += 1;
    return this.noOfProjects;
  },
  decrementProject: function () {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  },
};

function createUser(name, id, noOfProjects) {
  let user = Object.create(userMethods);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;

  return user;
}
```

- [ ] Using Pseudoclassical Way

```js
function CreateUser(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreateUser.prototype = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },
  incrementProject: function () {
    this.noOfProjects += 1;
    return this.noOfProjects;
  },
  decrementProject: function () {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  },
};
```

- [ ] Using Class

```js
class CreateUser {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
CreateUser.prototype = {
  getProjects() {
    return this.noOfProjects;
  },
  changeName(newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },
  incrementProject() {
    this.noOfProjects += 1;
    return this.noOfProjects;
  },
  decrementProject() {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  },
}
```

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
