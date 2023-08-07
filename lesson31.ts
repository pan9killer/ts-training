enum Directions {
  Top = 'top',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}

enum TimingFunc {
  EASE = 'ease',
  EASE_IN = 'ease-in',
  LINEAR = 'linear'
}

function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
  if (dir === Directions.Right) {
    console.log(tFunc);
  }
}

frame('id', Directions.Right, TimingFunc.LINEAR);
