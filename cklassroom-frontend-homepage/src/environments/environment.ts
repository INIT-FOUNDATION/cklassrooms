const BASE_URL = 'http://localhost';
const DIRECT_BASE_URL = 'http://localhost';
const API_MEETING_PORT = `:5001`;

// const BASE_URL = 'https://apivc-lb.aieze.in';
// const DIRECT_BASE_URL = 'https://apivc-lb.aieze.in';
// const API_MEETING_PORT = ``;

// const BASE_URL = 'https://apivcbeta-lb.aieze.in';
// const DIRECT_BASE_URL = 'https://apivcbeta-lb.aieze.in';
// const API_MEETING_PORT = ``;

export const environment = {
  production: false,
  meeting_prefix_url: `${BASE_URL}${API_MEETING_PORT}/api/v1/bambinos/meeting`,
};
