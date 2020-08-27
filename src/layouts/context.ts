import React from 'react';

export type FusionContextValue = {
  nolayout: boolean;
};
export const FusionContext = React.createContext<FusionContextValue>({
  nolayout: false,
});
