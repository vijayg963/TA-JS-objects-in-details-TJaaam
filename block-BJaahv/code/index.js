// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

function createUser(name, id, noOfProjects) {
  let data = {};
  data.name = name;
  data.id = id;
  data.noOfProjects = noOfProjects;
  data.changeName = function (newName) {
    return (data.name = newName);
  };
  data.getProjects = function (noOfProjects) {
    return (data.noOfProjects = noOfProjects);
  };
  data.incrementProject = function (num = 1) {
    return (data.noOfProjects = noOfProjects + num);
  };
  data.decrementProject = function (num = 1) {
    return (data.noOfProjects = noOfProjects - num);
  };
}

// - [ ] Using Object.create (prototypal pattern)
let userMethods = {
  changeName: function (newName) {
    return (data.name = newName);
  },
  getProjects: function (noOfProjects) {
    return (data.noOfProjects = noOfProjects);
  },
  incrementProject: function (num = 1) {
    return (data.noOfProjects = noOfProjects + num);
  },
  decrementProject: function (num = 1) {
    return (data.noOfProjects = noOfProjects - num);
  },
};

function UserData(name, id, noOfProjects) {
  let user = Object.create(userMethods);
  data.name = name;
  data.id = id;
  data.noOfProjects = noOfProjects;

  return user;
}

// - [ ] Using Pseudoclassical Way
function UserData(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

UserData.prototype = {
  changeName: function (newName) {
    return (data.name = newName);
  },
  getProjects: function (noOfProjects) {
    return (data.noOfProjects = noOfProjects);
  },
  incrementProject: function (num = 1) {
    return (data.noOfProjects = noOfProjects + num);
  },
  decrementProject: function (num = 1) {
    return (data.noOfProjects = noOfProjects - num);
  },
};

// - [ ] Using Class

class UserData {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  changeName(newName) {
    return (data.name = newName);
  }
  getProjects(noOfProjects) {
    return (data.noOfProjects = noOfProjects);
  }
  incrementProject(num = 1) {
    return (data.noOfProjects = noOfProjects + num);
  }
  decrementProject(num = 1) {
    return (data.noOfProjects = noOfProjects - num);
  }
}
