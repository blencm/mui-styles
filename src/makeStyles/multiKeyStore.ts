type Store = Map<any, Map<any, any>>;

const multiKeyStore = {
  set(cache: Store, key1: any, key2: any, value: any) {
    let subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },

  get(cache: Store | null | undefined, key1: any, key2: any) {
    const subCache = cache?.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },

  delete(cache: Store | null | undefined, key1: any, key2: any) {
    const subCache = cache?.get(key1);
    if (!subCache) return;
    subCache.delete(key2);
    if (subCache.size === 0) {
      cache?.delete(key1);
    }
  },
};

export default multiKeyStore;
