export interface RawCharge {
  name: string
  label: string
  reference: string
  item_type: string
  item_identifier: string
  amount: string
  amount_str: string
  original_amount: string
  original_amount_str: string
  type: string
  defer: string
  amount_gross: string
  amount_gross_str: string
  tax_paid: string
  tax_paid_str: string
  payment_plan_id: string
  payment_plan_name: string
  quantity?: string
  unit_price?: string
  unit_price_str?: string
  related_to_recur?: string
  frequency?: string
  frequency_days?: string
  due?: string
  defer_date?: string
}

export interface Charge {
  name: string
  label?: string
  reference: number
  itemType: string
  itemIdentifier: string
  amount: number
  amountStr: string
  originalAmount: number
  originalAmountStr: string
  type: string
  defer: boolean
  amountGross: number
  amountGrossStr: string
  taxPaid: number
  taxPaidStr: string
  paymentPlanId: string
  paymentPlanName: string
  quantity?: number
  unitPrice?: number
  unitPriceStr?: string
  relatedToRecur?: boolean
  frequency?: string
  frequencyDays?: number
  due?: Date
  deferDate?: Date
}
