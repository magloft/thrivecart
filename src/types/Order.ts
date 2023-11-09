import { Charge, RawCharge } from './Charge'

export interface RawOrder {
  id: string
  invoice_id: string
  processor: string
  total: string
  total_str: string
  total_gross: string
  total_gross_str: string
  date: string
  date_iso8601: string
  date_unix: string
  tracking_id: string
  tax: string
  charges?: RawCharge[]
  future_charges?: RawCharge[]
}

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
  charges?: Charge[]
  futureCharges?: Charge[]
}
