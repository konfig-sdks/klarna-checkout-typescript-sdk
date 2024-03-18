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
 * @interface Attachment
 */
export interface Attachment {
    /**
     * The content of the extra merchant data which should be presented as a string inside this property. The body should be an object containing any of the keys and sub objects described below serialised to JSON. More information on that object can be found [here](https://docs.klarna.com/klarna-checkout/api/checkout-api/#tag/Attachment-Schema).
     * @type {string}
     * @memberof Attachment
     */
    'body': string;
    /**
     * The content type of the body. It is usually represented as \"application/vnd.klarna.internal.emd-v2+json\"
     * @type {string}
     * @memberof Attachment
     */
    'content_type': string;
}

