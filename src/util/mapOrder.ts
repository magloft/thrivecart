import { Order, RawOrder } from '../types/Order'
import { mapCharge } from './mapCharge'
import { mapNullNumber, mapNullString } from './mapScalar'

export function mapOrder(data: RawOrder): Order {
  return {
    id: data.id,
    invoiceId: data.invoice_id,
    processor: data.processor,
    total: +data.total,
    totalStr: data.total_str,
    totalGross: +data.total_gross,
    totalGrossStr: data.total_gross_str,
    date: new Date(data.date),
    dateIso8601: data.date_iso8601,
    dateUnix: +data.date_unix,
    trackingId: mapNullString(data.tracking_id),
    tax: mapNullNumber(data.tax),
    charges: data.charges.map(mapCharge),
    futureCharges: data.future_charges.map(mapCharge)
  }
}
