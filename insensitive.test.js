import insensitive from './insensitive';

describe('insensitive', () => {
  it('removes uppercase', () => {
    const obj = insensitive();
    expect(typeof obj.hello).toBe('undefined');
    expect(Object.keys(obj)).toEqual([]);
    obj.heLLo = 'world';
    expect(obj.hello).toBe('world');
    expect(Object.keys(obj)).toEqual(['hello']);
    delete obj.heLLo;
    expect(typeof obj.hello).toBe('undefined');
    expect(Object.keys(obj)).toEqual([]);
  });

  it('removes dashes', () => {
    const obj = insensitive();
    expect(typeof obj.hello).toBe('undefined');
    expect(Object.keys(obj)).toEqual([]);
    obj['he--L-Lo'] = 'world';
    expect(obj.hello).toBe('world');
    expect(Object.keys(obj)).toEqual(['hello']);
    delete obj['he--L-Lo'];
    expect(typeof obj.hello).toBe('undefined');
    expect(Object.keys(obj)).toEqual([]);
  });

  it('removes underscores', () => {
    const obj = insensitive();
    expect(typeof obj.hello).toBe('undefined');
    expect(Object.keys(obj)).toEqual([]);
    obj['he__L_Lo'] = 'world';
    expect(obj.hello).toBe('world');
    expect(Object.keys(obj)).toEqual(['hello']);
    delete obj['he__L_Lo'];
    expect(typeof obj.hello).toBe('undefined');
    expect(Object.keys(obj)).toEqual([]);
  });

  it('removes numbers', () => {
    const obj = insensitive();
    expect(typeof obj.hello).toBe('undefined');
    expect(Object.keys(obj)).toEqual([]);
    obj.hell11o0 = 'world';
    expect(obj.hello).toBe('world');
    expect(Object.keys(obj)).toEqual(['hello']);
    delete obj.hell11o0;
    expect(typeof obj.hello).toBe('undefined');
    expect(Object.keys(obj)).toEqual([]);
  });

  describe('normalizes an argument', () => {
    it('removes uppercase', () => {
      const obj = insensitive({ heLLo: 'world' });
      expect(obj.hello).toBe('world');
      expect(Object.keys(obj)).toEqual(['hello']);
      delete obj.heLLo;
      expect(typeof obj.hello).toBe('undefined');
    });

    it('removes dashes', () => {
      const obj = insensitive({ 'he--L-Lo': 'world' });
      expect(obj.hello).toBe('world');
      expect(Object.keys(obj)).toEqual(['hello']);
      delete obj['he--L-Lo'];
      expect(typeof obj.hello).toBe('undefined');
    });

    it('removes underscores', () => {
      const obj = insensitive({ 'he__L_Lo': 'world' });
      expect(obj.hello).toBe('world');
      expect(Object.keys(obj)).toEqual(['hello']);
      delete obj['he__L_Lo'];
      expect(typeof obj.hello).toBe('undefined');
    });

    it('removes numbers', () => {
      const obj = insensitive({ hell11o0: 'world' });
      expect(obj.hello).toBe('world');
      expect(Object.keys(obj)).toEqual(['hello']);
      delete obj.hell11o0;
      expect(typeof obj.hello).toBe('undefined');
    });
  });
});
