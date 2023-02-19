console.log([2] === [2]) //false
console.log({} === {}); //false


class Animal{
  constructor(name, type, color){
    this.name = name,
    this.type = type,
    this.color = color
  }
}

const firstUser = new Animal("Harry", "dog", "caramel");
console.log(firstUser);

class Mamal extends Animal{
  constructor(nameMamal, typeMamal, colorMamal, sound){
    super(nameMamal, typeMamal, colorMamal),
    this.sound = sound
  }
  soundLike(soundPassed){
    this.sound = soundPassed;
    // Moooo I'm a cow, named Lily and I'm brown and white
    return ` ${this.sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
  }
}

let myAnimal = new Mamal('Binfao', 'dog', 'caramel')
console.log(myAnimal.soundLike('auau'));
