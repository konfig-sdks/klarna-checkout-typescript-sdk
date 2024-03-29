/*
Klarna Checkout API V3

The checkout API is used to create a checkout with Klarna and update the checkout order during the purchase. As soon as the purchase is completed the order should be read and handled using the [`Order Management API`](https://docs.klarna.com/api/ordermanagement).\\n\\nRead more on [Klarna checkout](https://docs.klarna.com/klarna-checkout/).

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DeliveryDetailsV1 } from './delivery-details-v1';
import { SelectedAddon } from './selected-addon';

/**
 * 
 * @export
 * @interface ShippingOption
 */
export interface ShippingOption {
    /**
     * Description.
     * @type {string}
     * @memberof ShippingOption
     */
    'description'?: string;
    /**
     * id
     * @type {string}
     * @memberof ShippingOption
     */
    'id': string;
    /**
     * Name.
     * @type {string}
     * @memberof ShippingOption
     */
    'name': string;
    /**
     * Promotion name. To be used if this shipping option is promotional.
     * @type {string}
     * @memberof ShippingOption
     */
    'promo'?: string;
    /**
     * Price including tax.
     * @type {number}
     * @memberof ShippingOption
     */
    'price': number;
    /**
     * If true, this option will be preselected when checkout loads. Default: false
     * @type {boolean}
     * @memberof ShippingOption
     */
    'preselected'?: boolean;
    /**
     * Tax amount.
     * @type {number}
     * @memberof ShippingOption
     */
    'tax_amount': number;
    /**
     * Non-negative. In percent, two implicit decimals. I.e 2500 = 25%.
     * @type {number}
     * @memberof ShippingOption
     */
    'tax_rate': number;
    /**
     * Shipping method. Possible values:<ul><li>PickUpStore</li><li>Home</li><li>BoxReg</li><li>BoxUnreg</li><li>PickUpPoint</li><li>Own</li><li>Postal</li><li>DHLPackstation</li><li>Digital</li></ul> If DHLPackstation is selected the correct form will be displayed.
     * @type {string}
     * @memberof ShippingOption
     */
    'shipping_method'?: string;
    /**
     * 
     * @type {DeliveryDetailsV1}
     * @memberof ShippingOption
     */
    'delivery_details'?: DeliveryDetailsV1;
    /**
     * TMS reference. Required to map completed orders to shipments reserved in TMS.
     * @type {string}
     * @memberof ShippingOption
     */
    'tms_reference'?: string;
    /**
     * 
     * @type {Array<SelectedAddon>}
     * @memberof ShippingOption
     */
    'selected_addons'?: Array<SelectedAddon>;
}

