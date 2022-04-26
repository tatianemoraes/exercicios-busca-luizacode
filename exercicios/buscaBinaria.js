class ListStudents {
  constructor(names = []) {
    this.names = names;
  }

  set setStudent(name) {
    this.names.push(name);
  }

  get getStudents() {
    return this.names;
  }

  listStudents() {
    return this.names;
  }

  addStudent(student) {
    this.names.push(student);
  }

  removeLastStudent() {
    this.names.pop();
  }

  findStudent(listStudents, student) {
    const orderedList = listStudents.sort();
    let start = 0, end = orderedList.length - 1;
      while (start <= end) {
        let middle = start + Math.floor((end - start) / 2);
  
        let response = student.localeCompare(orderedList[middle]);
          if (response == 0) {
            return middle;
          }
          if (response > 0) {
            start = middle + 1;
          }
          else {
            end = middle - 1;
          } 
      }
    return -1;
  }
}

const studentsLuizaCode = new ListStudents();

// array não ordenado
// ['Ana', 'Jéssica', 'Daniela','Maria', 'Larissa', 'Carla', 'Rafaela'];

// array ordenado
// ['Ana', 'Carla', 'Daniela', 'Jéssica','Larissa', 'Maria', 'Rafaela'];

studentsLuizaCode.addStudent('Ana');
studentsLuizaCode.addStudent('Jéssica');
studentsLuizaCode.addStudent('Daniela');
studentsLuizaCode.addStudent('Maria');
studentsLuizaCode.addStudent('Larissa');
studentsLuizaCode.addStudent('Carla');
studentsLuizaCode.addStudent('Rafaela');

const list = studentsLuizaCode.listStudents()
console.log(studentsLuizaCode.findStudent(list, 'Larissa')); // 4
console.log(studentsLuizaCode.findStudent(list, 'Carla')); // 1
