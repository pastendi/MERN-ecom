export const formatprice = (price) => {
  const formattedPrice = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100)
  return formattedPrice
}
