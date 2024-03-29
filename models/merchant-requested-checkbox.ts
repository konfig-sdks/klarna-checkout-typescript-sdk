/*
Klarna Checkout API V3

The checkout API is used to create a checkout with Klarna and update the checkout order during the purchase. As soon as the purchase is completed the order should be read and handled using the [`Order Management API`](https://docs.klarna.com/api/ordermanagement).\\n\\nRead more on [Klarna checkout](https://docs.klarna.com/klarna-checkout/).

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface MerchantRequestedCheckbox
 */
export interface MerchantRequestedCheckbox {
    /**
     * 
     * @type {string}
     * @memberof MerchantRequestedCheckbox
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MerchantRequestedCheckbox
     */
    'checked'?: boolean;
}

