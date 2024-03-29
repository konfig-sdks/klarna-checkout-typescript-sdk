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
 * @interface PaymentProvider
 */
export interface PaymentProvider {
    /**
     * Short description of the payment method. This is displayed below the selected payment method. (max 500 characters)
     * @type {string}
     * @memberof PaymentProvider
     */
    'description'?: string;
    /**
     * The name of the payment provider. (max 255 characters)
     * @type {string}
     * @memberof PaymentProvider
     */
    'name': string;
    /**
     * Minor units. Includes tax.
     * @type {number}
     * @memberof PaymentProvider
     */
    'fee'?: number;
    /**
     * If specified, limits the method to the listed countries (alpha 2 codes).
     * @type {Array<string>}
     * @memberof PaymentProvider
     */
    'countries'?: Array<string>;
    /**
     * Controls label of buy button<ul><li>continue</li><li>complete</li></ul>
     * @type {string}
     * @memberof PaymentProvider
     */
    'label'?: string;
    /**
     * URL to redirect to. (must be https, min 7, max 2000 characters)
     * @type {string}
     * @memberof PaymentProvider
     */
    'redirect_url': string;
    /**
     * URL to an image to display. (must be https, max 2000 characters)
     * @type {string}
     * @memberof PaymentProvider
     */
    'image_url'?: string;
}

