import axios from 'axios'

import { message } from "antd";

import { storageGetItem, storageRemoveItem } from "@utils/localStorage";

import baseURL from "./urlConfig";

import qs from 'qs';

let instance = axios.create({
    baseURL: baseURL.base_url,
    timeout: 5000,
    headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
    }
});

instance.interceptors.request.use(function (config) {
    // 发送之前  
    // debugger
    config.headers.Authorization = storageGetItem('loginSession') && storageGetItem('loginSession').authorization ? storageGetItem('loginSession').authorization : "authorization";

    return config;
}, function (error) {

    // 发送出错
    message.warning("刷新页面请重试")
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    // 响应成功
    return response;

}, function (error) {

    console.log(error.response);
    // 响应失败
    return Promise.reject(error);
});


export function requestHttpGET(options) {
    // debugger
    return instance.get(options.url, {
        params: {
            ...options.data,
            store_id: 1,
            restaurant_id: 1
        }
    })
        .catch(checkSession)
        .then(resultHandler)
        .catch(errorHandler);
}

export function requestHttpPOST(options) {
    return instance.post(options.url, qs.stringify({
        store_id: 1,
        restaurant_id: 1,
        ...options.data
    }, { indices: false }))
        .catch(checkSession)
        .then(resultHandler)
        .catch(errorHandler);
}

function checkSession(error) {
    // debugger
    console.log(error)
    if (error.response.status === 403 || error.response.status === 401) {
        storageRemoveItem('loginSession').then((data) => {
            window.location.href = 'http://passport-itg.baibulife.com:8080/login'
        })

        throw new Error('登录状态失效, 请重新登录');
    }
}

function resultHandler(result) {

    if (result && result.status === 200 && result.data) {
        if (result.data.status.code === 0) {
            // debugger
            return {
                err: null,
                data: result.data.result || "success"
            };
        }
        else {
            throw new Error(result.data.status.desc);
        }
    } else {
        throw new Error("网络超时");
    }
}

function errorHandler(err) {

    message.error(err.message);
    return {
        err,
        data: null
    }
}