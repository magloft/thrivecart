import { Customer, RawCustomer } from './Customer'
import { EventMode, EventType } from './Event'
import { Order, RawOrder } from './Order'
import { RawSubscription, Subscription } from './Subscription'

export interface RawOrderSubscriptionCancelledEvent {
  event: string
  mode: string
  mode_int: string
  thrivecart_account: string
  thrivecart_secret: string
  base_product: string
  base_product_name?: string
  base_product_label?: string
  base_product_owner?: string
  order_id: string
  invoice_id: string
  subscription_id: string
  currency: string
  customer_id: string
  customer: RawCustomer
  affiliate?: string
  date: string
  date_iso8601: string
  date_unix: string
  order: RawOrder
  subscription: RawSubscription
}

export interface OrderSubscriptionCancelledEvent {
  event: EventType
  mode: EventMode
  modeInt: number
  thrivecartAccount: string
  thrivecartSecret: string
  baseProduct: number
  baseProductName?: string
  baseProductLabel?: string
  baseProductOwner?: string
  orderId: number
  invoiceId: string
  subscriptionId: string
  currency: string
  customerId: string
  customer: Customer
  affiliate?: string
  date: Date
  dateIso8601: string
  dateUnix: number
  order: Order
  subscription: Subscription
}
