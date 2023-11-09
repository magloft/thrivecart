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
