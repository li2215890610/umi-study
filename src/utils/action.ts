export const TNAME = (type: string, ns = '') => {
  return [ns, type].filter(p => !!p).join('/');
};
