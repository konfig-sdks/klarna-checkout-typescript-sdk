/* tslint:disable */
/* eslint-disable */
/*
Klarna Checkout API V3

The checkout API is used to create a checkout with Klarna and update the checkout order during the purchase. As soon as the purchase is completed the order should be read and handled using the [`Order Management API`](https://docs.klarna.com/api/ordermanagement).\\n\\nRead more on [Klarna checkout](https://docs.klarna.com/klarna-checkout/).

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Address } from '../models';
// @ts-ignore
import { Attachment } from '../models';
// @ts-ignore
import { Customer } from '../models';
// @ts-ignore
import { DiscountLine } from '../models';
// @ts-ignore
import { Gui } from '../models';
// @ts-ignore
import { MerchantRequested } from '../models';
// @ts-ignore
import { MerchantUrls } from '../models';
// @ts-ignore
import { Options } from '../models';
// @ts-ignore
import { Order } from '../models';
// @ts-ignore
import { OrderLine } from '../models';
// @ts-ignore
import { PaymentProvider } from '../models';
// @ts-ignore
import { ShippingOption } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * OrderApi - axios parameter creator
 * @export
 */
export const OrderApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Mark an order as aborted.
         * @summary Abort an order
         * @param {string} orderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        abortOrder: async (orderId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderId' is not null or undefined
            assertParamExists('abortOrder', 'orderId', orderId)
            const localVarPath = `/checkout/v3/orders/{order_id}/abort`
                .replace(`{${"order_id"}}`, encodeURIComponent(String(orderId !== undefined ? orderId : `-order_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/checkout/v3/orders/{order_id}/abort',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * To create a new order simply provide a JSON object with the applicable properties.<br>The location of the newly created checkout order can be found in the location header of the response.<br>Please note: This is the url that should be used for future interactions (read and update) with the order, i.e. do not construct the order url based on the order id.
         * @summary Create an order
         * @param {string} [klarnaPartner] 
         * @param {Order} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewOrder: async (klarnaPartner?: string, order?: Order, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/checkout/v3/orders`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (klarnaPartner != null) {
                localVarHeaderParameter['Klarna-Partner'] = String(klarnaPartner);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: order,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/checkout/v3/orders',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(order, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the full details of a Klarna checkout order.
         * @summary Get order details
         * @param {string} orderId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrderDetails: async (orderId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderId' is not null or undefined
            assertParamExists('getOrderDetails', 'orderId', orderId)
            const localVarPath = `/checkout/v3/orders/{order_id}`
                .replace(`{${"order_id"}}`, encodeURIComponent(String(orderId !== undefined ? orderId : `-order_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/checkout/v3/orders/{order_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * To update an order simply provide a JSON object with the properties you want to update. Properties not provided in the request will stay the same.<br>Please note: an order can only be updated when the status is checkout_incomplete
         * @summary Update an order
         * @param {string} orderId 
         * @param {Order} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOrder: async (orderId: string, order?: Order, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orderId' is not null or undefined
            assertParamExists('updateOrder', 'orderId', orderId)
            const localVarPath = `/checkout/v3/orders/{order_id}`
                .replace(`{${"order_id"}}`, encodeURIComponent(String(orderId !== undefined ? orderId : `-order_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: order,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/checkout/v3/orders/{order_id}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(order, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrderApi - functional programming interface
 * @export
 */
export const OrderApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrderApiAxiosParamCreator(configuration)
    return {
        /**
         * Mark an order as aborted.
         * @summary Abort an order
         * @param {OrderApiAbortOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async abortOrder(requestParameters: OrderApiAbortOrderRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Order>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.abortOrder(requestParameters.orderId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * To create a new order simply provide a JSON object with the applicable properties.<br>The location of the newly created checkout order can be found in the location header of the response.<br>Please note: This is the url that should be used for future interactions (read and update) with the order, i.e. do not construct the order url based on the order id.
         * @summary Create an order
         * @param {OrderApiCreateNewOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewOrder(requestParameters: OrderApiCreateNewOrderRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Order>> {
            const order: Order = {
                tags: requestParameters.tags,
                order_id: requestParameters.order_id,
                name: requestParameters.name,
                purchase_country: requestParameters.purchase_country,
                purchase_currency: requestParameters.purchase_currency,
                locale: requestParameters.locale,
                status: requestParameters.status,
                billing_address: requestParameters.billing_address,
                shipping_address: requestParameters.shipping_address,
                order_amount: requestParameters.order_amount,
                order_tax_amount: requestParameters.order_tax_amount,
                order_lines: requestParameters.order_lines,
                customer: requestParameters.customer,
                merchant_urls: requestParameters.merchant_urls,
                html_snippet: requestParameters.html_snippet,
                merchant_reference1: requestParameters.merchant_reference1,
                merchant_reference2: requestParameters.merchant_reference2,
                started_at: requestParameters.started_at,
                completed_at: requestParameters.completed_at,
                last_modified_at: requestParameters.last_modified_at,
                options: requestParameters.options,
                attachment: requestParameters.attachment,
                external_payment_methods: requestParameters.external_payment_methods,
                external_checkouts: requestParameters.external_checkouts,
                shipping_countries: requestParameters.shipping_countries,
                shipping_options: requestParameters.shipping_options,
                merchant_data: requestParameters.merchant_data,
                gui: requestParameters.gui,
                merchant_requested: requestParameters.merchant_requested,
                selected_shipping_option: requestParameters.selected_shipping_option,
                recurring: requestParameters.recurring,
                recurring_token: requestParameters.recurring_token,
                recurring_description: requestParameters.recurring_description,
                billing_countries: requestParameters.billing_countries,
                discount_lines: requestParameters.discount_lines
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewOrder(requestParameters.klarnaPartner, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the full details of a Klarna checkout order.
         * @summary Get order details
         * @param {OrderApiGetOrderDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOrderDetails(requestParameters: OrderApiGetOrderDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Order>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOrderDetails(requestParameters.orderId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * To update an order simply provide a JSON object with the properties you want to update. Properties not provided in the request will stay the same.<br>Please note: an order can only be updated when the status is checkout_incomplete
         * @summary Update an order
         * @param {OrderApiUpdateOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOrder(requestParameters: OrderApiUpdateOrderRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Order>> {
            const order: Order = {
                tags: requestParameters.requestBody.tags,
                order_id: requestParameters.requestBody.order_id,
                name: requestParameters.requestBody.name,
                purchase_country: requestParameters.requestBody.purchase_country,
                purchase_currency: requestParameters.requestBody.purchase_currency,
                locale: requestParameters.requestBody.locale,
                status: requestParameters.requestBody.status,
                billing_address: requestParameters.requestBody.billing_address,
                shipping_address: requestParameters.requestBody.shipping_address,
                order_amount: requestParameters.requestBody.order_amount,
                order_tax_amount: requestParameters.requestBody.order_tax_amount,
                order_lines: requestParameters.requestBody.order_lines,
                customer: requestParameters.requestBody.customer,
                merchant_urls: requestParameters.requestBody.merchant_urls,
                html_snippet: requestParameters.requestBody.html_snippet,
                merchant_reference1: requestParameters.requestBody.merchant_reference1,
                merchant_reference2: requestParameters.requestBody.merchant_reference2,
                started_at: requestParameters.requestBody.started_at,
                completed_at: requestParameters.requestBody.completed_at,
                last_modified_at: requestParameters.requestBody.last_modified_at,
                options: requestParameters.requestBody.options,
                attachment: requestParameters.requestBody.attachment,
                external_payment_methods: requestParameters.requestBody.external_payment_methods,
                external_checkouts: requestParameters.requestBody.external_checkouts,
                shipping_countries: requestParameters.requestBody.shipping_countries,
                shipping_options: requestParameters.requestBody.shipping_options,
                merchant_data: requestParameters.requestBody.merchant_data,
                gui: requestParameters.requestBody.gui,
                merchant_requested: requestParameters.requestBody.merchant_requested,
                selected_shipping_option: requestParameters.requestBody.selected_shipping_option,
                recurring: requestParameters.requestBody.recurring,
                recurring_token: requestParameters.requestBody.recurring_token,
                recurring_description: requestParameters.requestBody.recurring_description,
                billing_countries: requestParameters.requestBody.billing_countries,
                discount_lines: requestParameters.requestBody.discount_lines
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOrder(requestParameters.orderId, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrderApi - factory interface
 * @export
 */
export const OrderApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrderApiFp(configuration)
    return {
        /**
         * Mark an order as aborted.
         * @summary Abort an order
         * @param {OrderApiAbortOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        abortOrder(requestParameters: OrderApiAbortOrderRequest, options?: AxiosRequestConfig): AxiosPromise<Order> {
            return localVarFp.abortOrder(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * To create a new order simply provide a JSON object with the applicable properties.<br>The location of the newly created checkout order can be found in the location header of the response.<br>Please note: This is the url that should be used for future interactions (read and update) with the order, i.e. do not construct the order url based on the order id.
         * @summary Create an order
         * @param {OrderApiCreateNewOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewOrder(requestParameters: OrderApiCreateNewOrderRequest, options?: AxiosRequestConfig): AxiosPromise<Order> {
            return localVarFp.createNewOrder(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the full details of a Klarna checkout order.
         * @summary Get order details
         * @param {OrderApiGetOrderDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrderDetails(requestParameters: OrderApiGetOrderDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<Order> {
            return localVarFp.getOrderDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * To update an order simply provide a JSON object with the properties you want to update. Properties not provided in the request will stay the same.<br>Please note: an order can only be updated when the status is checkout_incomplete
         * @summary Update an order
         * @param {OrderApiUpdateOrderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOrder(requestParameters: OrderApiUpdateOrderRequest, options?: AxiosRequestConfig): AxiosPromise<Order> {
            return localVarFp.updateOrder(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for abortOrder operation in OrderApi.
 * @export
 * @interface OrderApiAbortOrderRequest
 */
export type OrderApiAbortOrderRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof OrderApiAbortOrder
    */
    readonly orderId: string
    
}

/**
 * Request parameters for createNewOrder operation in OrderApi.
 * @export
 * @interface OrderApiCreateNewOrderRequest
 */
export type OrderApiCreateNewOrderRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof OrderApiCreateNewOrder
    */
    readonly klarnaPartner?: string
    
} & Order

/**
 * Request parameters for getOrderDetails operation in OrderApi.
 * @export
 * @interface OrderApiGetOrderDetailsRequest
 */
export type OrderApiGetOrderDetailsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof OrderApiGetOrderDetails
    */
    readonly orderId: string
    
}

/**
 * Request parameters for updateOrder operation in OrderApi.
 * @export
 * @interface OrderApiUpdateOrderRequest
 */
export type OrderApiUpdateOrderRequest = {
    /**
    * 
    * @type {string}
    * @memberof OrderApiUpdateOrder
    */
    readonly orderId: string
    /**
    * 
    * @type {Order}
    * @memberof OrderApiUpdateOrder
    */
    readonly requestBody?: Order
}

/**
 * OrderApiGenerated - object-oriented interface
 * @export
 * @class OrderApiGenerated
 * @extends {BaseAPI}
 */
export class OrderApiGenerated extends BaseAPI {
    /**
     * Mark an order as aborted.
     * @summary Abort an order
     * @param {OrderApiAbortOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderApiGenerated
     */
    public abortOrder(requestParameters: OrderApiAbortOrderRequest, options?: AxiosRequestConfig) {
        return OrderApiFp(this.configuration).abortOrder(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * To create a new order simply provide a JSON object with the applicable properties.<br>The location of the newly created checkout order can be found in the location header of the response.<br>Please note: This is the url that should be used for future interactions (read and update) with the order, i.e. do not construct the order url based on the order id.
     * @summary Create an order
     * @param {OrderApiCreateNewOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderApiGenerated
     */
    public createNewOrder(requestParameters: OrderApiCreateNewOrderRequest, options?: AxiosRequestConfig) {
        return OrderApiFp(this.configuration).createNewOrder(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the full details of a Klarna checkout order.
     * @summary Get order details
     * @param {OrderApiGetOrderDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderApiGenerated
     */
    public getOrderDetails(requestParameters: OrderApiGetOrderDetailsRequest, options?: AxiosRequestConfig) {
        return OrderApiFp(this.configuration).getOrderDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * To update an order simply provide a JSON object with the properties you want to update. Properties not provided in the request will stay the same.<br>Please note: an order can only be updated when the status is checkout_incomplete
     * @summary Update an order
     * @param {OrderApiUpdateOrderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderApiGenerated
     */
    public updateOrder(requestParameters: OrderApiUpdateOrderRequest, options?: AxiosRequestConfig) {
        return OrderApiFp(this.configuration).updateOrder(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}