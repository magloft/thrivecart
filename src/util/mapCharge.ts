import { Charge } from '../types/Charge'
import { RawCharge } from '../types/raw/RawCharge'
import { mapBoolean } from './mapScalar'

export function mapCharge(data: RawCharge): Charge {
  return {
    name: data.name,
    label: data.label || undefined,
    reference: +data.reference,
    itemType: data.item_type,
    itemIdentifier: data.item_identifier,
    amount: +data.amount,
    amountStr: data.amount_str,
    originalAmount: +data.original_amount,
    originalAmountStr: data.original_amount_str,
    type: data.type,
    defer: mapBoolean(data.defer),
    amountGross: +data.amount_gross,
    amountGrossStr: data.amount_gross_str,
    taxPaid: +data.tax_paid,
    taxPaidStr: data.tax_paid_str,
    paymentPlanId: data.payment_plan_id,
    paymentPlanName: data.payment_plan_name,
    quantity: data.quantity != null ? +data.quantity : undefined,
    unitPrice: data.unit_price != null ? +data.unit_price : undefined,
    unitPriceStr: data.unit_price_str,
    relatedToRecur: data.related_to_recur != null ? mapBoolean(data.related_to_recur) : undefined,
    frequency: data.frequency,
    frequencyDays: data.frequency_days != null ? +data.frequency_days : undefined,
    due: data.due != null ? new Date(data.due) : undefined,
    deferDate: data.defer_date != null ? new Date(+data.defer_date * 1000) : undefined
  }
}
