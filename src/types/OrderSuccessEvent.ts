import { Customer, RawCustomer } from './Customer'
import { EventMode, EventType } from './Event'
import { Order, RawOrder } from './Order'

export interface RawOrderSuccessEvent {
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
  subscription_ids?: Record<string, string>
  order_date: string
  order_timestamp: string
  currency: string
  customer_id: string
  customer_identifier: string
  customer: RawCustomer
  affiliate?: string
  order: RawOrder
  transactions: Record<string, string>
  subscriptions: Record<string, string>
  purchases: string[]
  purchase_map: string[]
  purchase_map_flat: string
  accessible_purchases?: string[]
  accessible_purchase_map?: string[]
  accessible_purchase_map_flat?: string
  fulfillment: { url: string }
}

export interface OrderSuccessEvent {
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
  subscriptionIds?: Record<string, string>
  orderDate: Date
  orderTimestamp: number
  currency: string
  customerId: string
  customerIdentifier?: string
  customer: Customer
  affiliate?: string
  order: Order
  transactions: Record<string, string>
  subscriptions: Record<string, string>
  purchases: string[]
  purchaseMap: string[]
  purchaseMapFlat: string
  accessiblePurchases?: string[]
  accessiblePurchaseMap?: string[]
  accessiblePurchaseMapFlat?: string
  fulfillment: { url: string }
}
