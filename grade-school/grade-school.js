//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.students = {};
  }

  roster() {
    // Returns a DEEP copy of students OBJECT
    return JSON.parse(JSON.stringify(this.students));
  }

  add(name, grade) {
    if (!this.students[grade]) {
      this.students[grade] = [];
    }
    this.students[grade].push(name);
    this.students[grade].sort();
  }

  grade(grade) {
    // Returns a SHALLOW copy of students ARRAY
    return this.students[grade] ? [...this.students[grade]] : [];
  }
}
