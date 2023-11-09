import { Charge } from './Charge'

export interface Order {
  id: string
  invoiceId: string
  processor: string
  total: number
  totalStr: string
  totalGross: number
  totalGrossStr: string
  date: Date
  dateIso8601: string
  dateUnix: number
  trackingId?: string
  tax?: number
  charges: Charge[]
  futureCharges: Charge[]
}
