import { Customer } from './Customer'
import { EventMode, EventType } from './Event'
import { Order } from './Order'

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
