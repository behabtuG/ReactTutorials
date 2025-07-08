/*
How to create method chaining in JS?
*/

class MouseActions {
  constructor(sourceX, sourceY, targetX, targetY) {
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.targetX = targetX;
    this.targetY = targetY;
  }

  clickAndHold() {
    console.log(`Object click and hold at ${this.sourceX},${this.sourceY}`);
    return this;
  }

  dragAndDrop() {
    console.log(`Object drag and drop at ${this.targetX},${this.targetY}`);
    return this;
  }

  release() {
    console.log("Mouse Released");
    return this;
  }
}

let action1 = new MouseActions(1, 5, 3, 9);

action1.clickAndHold().dragAndDrop().release();
