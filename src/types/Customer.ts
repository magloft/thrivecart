import { Address } from './Address'

export interface Customer {
  id: string
  clientUserAgent: string
  clientMetaFbp: string
  origin: string
  name: string
  email: string
  businessName?: string
  ipAddress: string
  address: Address
  firstName: string
  lastName: string
  checkboxConfirmation: boolean
}
