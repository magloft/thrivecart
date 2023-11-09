import { Customer, RawCustomer } from '../types/Customer'
import { mapBoolean } from './mapScalar'

export function mapCustomer(data: RawCustomer): Customer {
  return {
    id: data.id,
    clientUserAgent: data.client_user_agent,
    clientMetaFbp: data.client_meta_fbp,
    origin: data.origin,
    name: data.name,
    email: data.email,
    businessName: data.business_name,
    ipAddress: data.ip_address,
    address: data.address,
    firstName: data.first_name,
    lastName: data.last_name,
    checkboxConfirmation: mapBoolean(data.checkbox_confirmation)
  }
}
