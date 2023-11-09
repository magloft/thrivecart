import { EventMode, EventType } from '../types/Event'
import { OrderSuccessEvent, RawOrderSuccessEvent } from '../types/OrderSuccessEvent'
import { mapCustomer } from './mapCustomer'
import { mapOrder } from './mapOrder'
import { mapNullString } from './mapScalar'

export function mapOrderSuccessEvent(data: RawOrderSuccessEvent): OrderSuccessEvent {
  return {
    event: data.event as EventType,
    mode: data.mode as EventMode,
    modeInt: +data.mode_int,
    thrivecartAccount: data.thrivecart_account,
    thrivecartSecret: data.thrivecart_secret,
    baseProduct: +data.base_product,
    baseProductName: data.base_product_name,
    baseProductLabel: data.base_product_label ? data.base_product_label : undefined,
    baseProductOwner: data.base_product_owner,
    orderId: +data.order_id,
    invoiceId: data.invoice_id,
    subscriptionIds: data.subscription_ids,
    orderDate: new Date(data.order_date),
    orderTimestamp: +data.order_timestamp,
    currency: data.currency,
    customerId: data.customer_id,
    customerIdentifier: mapNullString(data.customer_identifier),
    customer: mapCustomer(data.customer),
    affiliate: data.affiliate,
    order: mapOrder(data.order),
    transactions: data.transactions,
    subscriptions: data.subscriptions,
    purchases: data.purchases,
    purchaseMap: data.purchase_map,
    purchaseMapFlat: data.purchase_map_flat,
    accessiblePurchases: data.accessible_purchases,
    accessiblePurchaseMap: data.accessible_purchase_map,
    accessiblePurchaseMapFlat: data.accessible_purchase_map_flat,
    fulfillment: data.fulfillment
  }
}
