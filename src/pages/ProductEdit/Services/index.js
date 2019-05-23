import { requestHttpGET, } from '@services/request';
// requestHttpPOST
import urlConfig from "@services/urlConfig";

export function getMainCategoryList(data) {
  return requestHttpGET({ url: urlConfig.category.category_list_main, data: { page_size: 999999999, ...data } });
}

export function getRestaurantProductDetail(data) {
  return requestHttpGET({ url: urlConfig.store_restaurant.restaurant_product_detail, data });
}
