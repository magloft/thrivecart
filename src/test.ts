import { mapEvent } from '.'
import orderSuccessJson from './data/order.success.json'

async function main() {
  const event = mapEvent(orderSuccessJson)
  console.info(event)
}

main()
