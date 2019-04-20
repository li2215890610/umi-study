const base_url = 'http://154.8.147.238:8021';


// const base_url = 'http://10.1.8.165:8021';


export default {
  base_url: base_url,
  login: {
    logon: `${base_url}/login`
  },
  upload_img: `${base_url}`,
  store_restaurant: {
    list_restaurant: `${base_url}/store/restaurant/list`,
    create_restaurant_info: `${base_url}/store/restaurant/create`,
    update_restaurant_info: `${base_url}/store/restaurant/update`,
    get_restaurant_info: `${base_url}/store/restaurant/get`,
    deleted_restaurant: `${base_url}/store/restaurant/deleted`,
    shelf_switch_restaurant: `${base_url}/store/restaurant/shelf_switch`,


    restaurant_use_open_ant_close: `${base_url}/restaurant/dish/switch`,
    restaurant_product_list: `${base_url}/restaurant/dish/list`,
    restaurant_product_detail: `${base_url}/merchant/restaurant/dish/detail`,
  },
  store_table: {
    list_store_table: `${base_url}/store/table/list`,
    create_store_table: `${base_url}/store/table/create`,
    update_store_table: `${base_url}/store/table/update`,
    delect_store_table: `${base_url}/store/table/deleted`,
  },
  category: {
    category_create_main: `${base_url}/store/dish_type1/create`,
    category_update_main: `${base_url}/store/dish_type1/update`,
    category_deleted_main: `${base_url}/store/dish_type1/deleted`,
    category_list_main: `${base_url}/store/dish_type1/list`,
    category_update_seq_main: `${base_url}/store/dish_type1/update_seq`,

    category_create_sub: `${base_url}/store/dish_type2/create`,
    category_update_sub: `${base_url}/store/dish_type2/update`,
    category_delete_sub: `${base_url}/store/dish_type2/deleted`,
    category_list_sub: `${base_url}/store/dish_type2/list`,
    category_update_seq_sub: `${base_url}/store/dish_type2/update_seq`,
  },

  store_product: {
    product_create: `${base_url}/store/store_dish/create`,
    product_delete: `${base_url}/store/store_dish/delete`,
    product_update: `${base_url}/store/store_dish/update`,
    product_detail: `${base_url}/store/store_dish/detail`,
    product_list: `${base_url}/store/store_dish/list`,
    product_use_open_ant_close: `${base_url}/store/store_dish/shelf_switch`,
  },


}