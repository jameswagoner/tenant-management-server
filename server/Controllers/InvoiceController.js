const InvoiceService = require('../Services/InvoiceService');

module.exports = {
  index: InvoiceService.all,
  show: InvoiceService.find,
  store: InvoiceService.create
}
