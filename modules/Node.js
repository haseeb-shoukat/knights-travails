const Node = class {
  constructor(value) {
    this.value = value;
    this.nextNodes = [];
    this.parent = null;
  }
};

export { Node };
