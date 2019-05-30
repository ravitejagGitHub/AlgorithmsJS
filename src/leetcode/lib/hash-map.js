class HasMap {
  constructor(keyGen) {
    this.map = Object.create(null);
  }

  add(key, value) {
    this.map[key] = value;
    return value;
  }

  remove(key) {
    if (this.contains(key)) {
      delete this.map[key];
      return key;
    }
    return null;
  }

  get(key) {
    return this.contains(key) ? this.map[key] : null;
  }

  contains(key) {
    return this.map[key] !== undefined;
  }
}

module.exports = HasMap;
