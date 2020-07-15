const TenantService = require('../Services/TenantService');

module.exports = {
  index: TenantService.all,
  show: TenantService.find,
  store: TenantService.create,
  invoices: TenantService.invoices
}
