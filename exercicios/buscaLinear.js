class ColorList {
  constructor(colors = []) {
    this.colors = colors;
  }

  set setColor(color) {
    this.colors.push(color);
  }

  get getColors() {
    return this.colors;
  }

  addNewColor(color) {
    this.colors.push(color);
  }

  removeLastColor() {
    this.colors.pop();
  }

  searchColor(color) {
    for(var i = 0; i <= this.colors.length; i++) {
      if(color === this.colors[i]) {
        return console.log(`A posição da cor na lista é ${i}`);
      } 
    }
    return console.log('Esta cor não existe na lista');
  }
}

const colors = new ColorList();
colors.addNewColor('blue');
colors.addNewColor('yellow');
colors.addNewColor('red');
colors.addNewColor('pink');
colors.addNewColor('purple');
colors.addNewColor('black');
colors.addNewColor('white');
colors.searchColor('yellow');
console.log(colors.getColors);