let map = null;

class HasMap {
  constructor(keyGen) {
    map = Object.create(null);
  }

  add(key, value) {
    map[key] = value;
    return value;
  }

  remove(key) {
    if (this.contains(key)) {
      delete map[key];
      return key;
    }
    return null;
  }

  get(key) {
    return this.contains(key) ? map[key] : null;
  }

  contains(key) {
    return map[key] !== undefined;
  }
}

module.exports = HasMap;
