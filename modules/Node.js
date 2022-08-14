const Node = class {
  constructor(value) {
    this.value = value;
    this.nextNodes = null;
    this.parent = null;
  }
};

export { Node };
