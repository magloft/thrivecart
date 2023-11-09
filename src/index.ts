import { RawEvent } from './types/raw/RawEvent'
import { mapOrderSuccessEvent } from './util/mapOrderSuccessEvent'

export * from './types/Address'
export * from './types/Charge'
export * from './types/Customer'
export * from './types/Event'
export * from './types/Order'
export * from './types/OrderSuccessEvent'

export function mapEvent(data: RawEvent) {
  if (data.event === 'order.success') {
    return mapOrderSuccessEvent(data)
  } else {
    throw new Error(`Event ${data.event} not implemented`)
  }
}
