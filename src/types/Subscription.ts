
export interface RawSubscription {
  type: string
  id: string
  product_id: string
  name: string
  label: string
  processor: string
  currency: string
  invoice_id: string
  amount: string
  amount_str: string
  original_amount: string
  original_amount_str: string
  amount_gross: string
  amount_gross_str: string
  tax_paid: string
  tax_paid_str: string
  frequency: string
  frequency_days: string
  remaining_rebills: string
  billing_period_end: string
  billing_period_end_iso8601: string
}

export interface Subscription {
  type: string
  id: string
  productId: string
  name: string
  label?: string
  processor: string
  currency: string
  invoiceId: string
  amount: number
  amountStr: string
  originalAmount: number
  originalAmountStr: string
  amountGross: number
  amountGrossStr: string
  taxPaid: number
  taxPaidStr: string
  frequency?: string
  frequencyDays?: string
  remainingRebills?: number
  billingPeriodEnd: Date
  billingPeriodEndIso8601: string
}
