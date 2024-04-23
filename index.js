require('node-go-require');

var petGo = require('./main.go');

var pet = petGo.pet.New('my pet');
console.log(pet.Name());
pet.SetName('new name...');
console.log(pet.Name());