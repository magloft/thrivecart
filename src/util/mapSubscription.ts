import { RawSubscription, Subscription } from '../types/Subscription'
import { mapNullNumber, mapNullString } from './mapScalar'

export function mapSubscription(data: RawSubscription): Subscription {
  return {
    type: data.type,
    id: data.id,
    productId: data.product_id,
    name: data.name,
    label: mapNullString(data.label),
    processor: data.processor,
    currency: data.currency,
    invoiceId: data.invoice_id,
    amount: +data.amount,
    amountStr: data.amount_str,
    originalAmount: +data.original_amount,
    originalAmountStr: data.original_amount_str,
    amountGross: +data.amount_gross,
    amountGrossStr: data.amount_gross_str,
    taxPaid: +data.tax_paid,
    taxPaidStr: data.tax_paid_str,
    frequency: mapNullString(data.frequency),
    frequencyDays: data.frequency_days,
    remainingRebills: mapNullNumber(data.remaining_rebills),
    billingPeriodEnd: new Date(+data.billing_period_end * 1000),
    billingPeriodEndIso8601: data.billing_period_end_iso8601
  }
}
