import { message } from 'antd';

export const dva = {
  onError(e: Error) {
    message.error(e.message, 3);
  },
};
type Locations = window.location;

//https://umijs.org/zh-CN/docs/runtime-config#onroutechange-routes-matchedroutes-location-action-
// export function onRouteChange({ location: Locations
//   , routes, action }) {
//   console.log( location, routes, action);
// }
