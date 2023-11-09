import { EventMode, EventType } from '../types/Event'
import { OrderSubscriptionCancelledEvent, RawOrderSubscriptionCancelledEvent } from '../types/OrderSubscriptionCancelledEvent'
import { mapCustomer } from './mapCustomer'
import { mapOrder } from './mapOrder'
import { mapNullString } from './mapScalar'
import { mapSubscription } from './mapSubscription'

export function mapOrderSubscriptionCancelledEvent(data: RawOrderSubscriptionCancelledEvent): OrderSubscriptionCancelledEvent {
  return {
    event: data.event as EventType,
    mode: data.mode as EventMode,
    modeInt: +data.mode_int,
    thrivecartAccount: data.thrivecart_account,
    thrivecartSecret: data.thrivecart_secret,
    baseProduct: +data.base_product,
    baseProductName: data.base_product_name,
    baseProductLabel: mapNullString(data.base_product_label),
    baseProductOwner: data.base_product_owner,
    orderId: +data.order_id,
    invoiceId: data.invoice_id,
    subscriptionId: data.subscription_id,
    currency: data.currency,
    customerId: data.customer_id,
    customer: mapCustomer(data.customer),
    affiliate: mapNullString(data.affiliate),
    date: new Date(data.date),
    dateIso8601: data.date_iso8601,
    dateUnix: +data.date_unix,
    order: mapOrder(data.order),
    subscription: mapSubscription(data.subscription)
  }
}
