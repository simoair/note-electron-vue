export function SimpleDateFormat (params) {
  var date = new Date(params).toJSON()
  return (new Date(+new Date(date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''))
}
