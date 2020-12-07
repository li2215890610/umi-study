import {
  DvaEffectError,
  BusinessError,
  HttpError,
  ErrorType,
  handleBusinessError,
  handleHttpError,
  handleDvaEffectError,
} from './errors';

export const dva = {
  config: {
    onError(
      err: DvaEffectError & BusinessError & HttpError,
      dispatch: Function,
      context: { key: any; effectArgs: Array<{ type: string; payload: any }> },
    ) {
      err.preventDefault && err.preventDefault();
      switch (err.type) {
        case ErrorType.BUSINESS:
          handleBusinessError(context, dispatch, err);
          break;
        case ErrorType.HTTP:
          handleHttpError(context, dispatch, err);
          break;
        default:
          handleDvaEffectError(context, dispatch, err);
          break;
      }
    },
    initialState: {},
  },
};

//https://umijs.org/zh-CN/docs/runtime-config#onroutechange-routes-matchedroutes-location-action-
// export function onRouteChange({ location: Locations
//   , routes, action }) {
//   console.log( location, routes, action);
// }
