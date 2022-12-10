// Create a class Examination
class Examination {
  // static property
  static numberOfCandidates = 0;

  //   static methods
  static greet() {
    console.log(
      "Hey there ! " +
        this.name +
        " \n Ready for this Examination ? \n\n G O O D L U C K ! \n\n\n"
    );
  }
  static beginExam() {
    console.log("Examination has commenced");
  }

  constructor(name, legibility) {
    this.name = name;
    this.legibility = legibility;
  }

  calcAge(birthYear) {
    let age = console.log(new Date().getFullYear() - birthYear + "years");
  }

  calcLegibilty() {}
}

// console.log("Candidate is legible for this exam");

// to change property of the class(that is the static property).
// Here number of students is added at increment of 1.
Examination.numberOfCandidates += 1;

let student1 = new Examination("Chase");

console.log(
  // student1.calcAge(2007),
  // student1.calcLegibilty(),
  //   Examination.numberOfCandidates + " student"
  //   Examination.greet()
  Examination.beginExam()
);
