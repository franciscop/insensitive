import insensitive from './insensitive';

describe('insensitive', () => {
  it('removes uppercase', () => {
    const obj = insensitive();
    expect(typeof obj.hello).toBe('undefined');
    obj.heLLo = 'world';
    expect(obj.hello).toBe('world');
    delete obj.heLLo;
    expect(typeof obj.hello).toBe('undefined');
  });

  it('removes dashes', () => {
    const obj = insensitive();
    expect(typeof obj.hello).toBe('undefined');
    obj['he--L-Lo'] = 'world';
    expect(obj.hello).toBe('world');
    delete obj['he--L-Lo'];
    expect(typeof obj.hello).toBe('undefined');
  });

  it('removes underscores', () => {
    const obj = insensitive();
    expect(typeof obj.hello).toBe('undefined');
    obj['he__L_Lo'] = 'world';
    expect(obj.hello).toBe('world');
    delete obj['he__L_Lo'];
    expect(typeof obj.hello).toBe('undefined');
  });

  it('removes numbers', () => {
    const obj = insensitive();
    expect(typeof obj.hello).toBe('undefined');
    obj.hell11o0 = 'world';
    expect(obj.hello).toBe('world');
    delete obj.hell11o0;
    expect(typeof obj.hello).toBe('undefined');
  });

  describe('normalizes an argument', () => {
    it('removes uppercase', () => {
      const obj = insensitive({ heLLo: 'world' });
      expect(obj.hello).toBe('world');
      delete obj.heLLo;
      expect(typeof obj.hello).toBe('undefined');
    });

    it('removes dashes', () => {
      const obj = insensitive({ 'he--L-Lo': 'world' });
      expect(obj.hello).toBe('world');
      delete obj['he--L-Lo'];
      expect(typeof obj.hello).toBe('undefined');
    });

    it('removes underscores', () => {
      const obj = insensitive({ 'he__L_Lo': 'world' });
      expect(obj.hello).toBe('world');
      delete obj['he__L_Lo'];
      expect(typeof obj.hello).toBe('undefined');
    });

    it('removes numbers', () => {
      const obj = insensitive({ hell11o0: 'world' });
      expect(obj.hello).toBe('world');
      delete obj.hell11o0;
      expect(typeof obj.hello).toBe('undefined');
    });
  });
});
