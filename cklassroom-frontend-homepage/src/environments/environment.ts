// const BASE_URL = 'http://localhost';
// const DIRECT_BASE_URL = 'http://localhost';
// const API_CRM_PORT = `:5001`;

const BASE_URL = 'https://api.cklassrooms.com';
const DIRECT_BASE_URL = 'https://api.cklassrooms.com';
const API_CRM_PORT = ``;

export const environment = {
  production: false,
  crm_prefix_url: `${BASE_URL}${API_CRM_PORT}/api/v1/cklassroom/crm`,
  landing_page_prefix: 'http://localhost:4200/',
  ga: 'G-DHFBG5QNQ1'
};
