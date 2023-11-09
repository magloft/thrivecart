import { Address, RawAddress } from './Address'

export interface RawCustomer {
  id: string
  client_user_agent: string
  client_meta_fbp: string
  origin: string
  name: string
  email: string
  business_name?: string
  ip_address: string
  address: RawAddress
  first_name: string
  last_name: string
  checkbox_confirmation: string
}

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
