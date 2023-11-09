import { RawOrderSuccessEvent } from './OrderSuccessEvent'

export type EventType =
  'order.success' |
  'order.refund' |
  'order.subscription_payment' |
  'order.subscription_cancelled' |
  'order.subscription_paused' |
  'order.subscription_resumed' |
  'order.rebill_failed'

export type EventMode = 'test' | 'live'

export type RawEvent = RawOrderSuccessEvent
