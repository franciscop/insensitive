const insensitive = (init, regex = /[^a-z]/g) => {
  // Cast it to string, lowercase it and replace anything else
  const normal = name => ('' + name).toLowerCase().replace(regex, '');

  if (init) {
    const obj = insensitive(undefined, regex);
    for (let key in init) {
      obj[key] = init[key];
    }
    return obj;
  }

  return new Proxy({}, {
    get: (orig, key) => orig[normal(key)],
    set: (orig, key, value) => {
      orig[normal(key)] = value;
      return true;
    },
    deleteProperty: (obj, key) => {
      delete obj[normal(key)];
      return true;
    }
  });
};

export default insensitive;
