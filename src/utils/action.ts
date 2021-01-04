export const TNAME = (type: string, ns = '') => {
  return [ns, type].filter(p => !!p).join('/');
};

export const removeNS = (
  action: {
    type: string;
    payload?: any;
  },
  ns: string,
) => {
  return {
    ...action,
    type: action.type.replace(new RegExp(`^${ns}\/`), ''),
  };
};
