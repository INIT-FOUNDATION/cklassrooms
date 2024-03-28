const BASE_URL = 'https://apivc-lb.aieze.in';
const DIRECT_BASE_URL = 'https://apivc-lb.aieze.in';
const API_VC_PORT = ``;
const API_ADMIN_PORT = ``;
const API_AUTH_PORT = ``;
const API_SUBSCRIPTION_PORT = ``;
const API_LIVESTREAM_PORT = ``;
const API_WEBINAR_PORT = '';

export const environment = {
  production: false,
  crm_prefix_url: `https://api-lb.aieze.in/api/v1/crm`,
  admin_prefix_url: `${BASE_URL}${API_ADMIN_PORT}/api/v1/admin`,
  meeting_prefix_url: `${BASE_URL}${API_VC_PORT}/api/v2/meeting`,
  auth_prefix_url: `${BASE_URL}${API_AUTH_PORT}/api/v1/auth`,
  subscription_prefix_url: `${BASE_URL}${API_SUBSCRIPTION_PORT}/api/v1/subscription`,
  livestream_prefix_url: `${BASE_URL}${API_LIVESTREAM_PORT}/api/v1/liveStream`,
  webinar_prefix_url: `${BASE_URL}${API_WEBINAR_PORT}/api/v2/webinar`,
  meeting_prefix_link: `https://link.aieze.in`,
  ga_id: 'G-JNSPKXF4K8',
  facebook: `https://www.facebook.com/aiezegroup`,
  linkedin: `https://www.linkedin.com/company/aieze/`,
  twitter: `https://twitter.com/AiezeV`,
  instagram: `https://www.instagram.com/aieze_group/`,
  glassdoor: `https://www.glassdoor.com/Overview/Working-at-Aieze-EI_IE7816837.11,16.htm`,
  youtube: `https://youtube.com/@aieze?si=MnFJ0O405tPNAkq1`,


  playstoreurl: {
    // aems: `https://play.google.com/store/apps/details?id=com.aems.doctor`,
    link: `https://play.google.com/store/apps/details?id=aieze.link.vc`
  },
  appstoreurl: {
    // aems: `https://apps.apple.com/in/app/aems-aieze/id1664708670`,
    link: `https://apps.apple.com/in/app/aieze-link/id1668022173`
  },

  RAZORPAY_KEY_ID: 'rzp_test_TS3fGSsmzamywR',
  PLANS: [
    {
      plan_id: 1,
      plan_name: 'Silver',
      price: 100,
      plan_duration: 'Month',
      active: 1,
    },
    {
      plan_id: 2,
      plan_name: 'Gold',
      price: 250,
      plan_duration: 'Quarterly',
      active: 0,
    },
    {
      plan_id: 3,
      plan_name: 'Platinum',
      price: 499,
      plan_duration: '6 Months',
      active: 0,
    },
    {
      plan_id: 4,
      plan_name: 'Diamond',
      price: 999,
      plan_duration: 'Yearly',
      active: 0,
    },
  ],
  app_link: {
    playstore: 'https://play.google.com/store/apps/details?id=aieze.link.vc',
    appStore: 'https://apps.apple.com/in/app/aieze-link/id1668022173',
  },
  socket_webinar_live_counter: `wss://wss.aieze.in`,
  socket_webrtc_ant_media_player: `wss://antmedia.aieze.in:5443/WebRTCAppEE/websocket`,
  internalMeetingID: 'ayodhyaInternalMeeting',
  participant_id: 'ayodhyaParticipantId',
  emojis: [
    {
      name: 'Smile',
      class: 'smiley',
      icon: 'custom-emoji-smile',
      reaction_id: '001',
    },
    {
      name: 'Namaste',
      class: 'heart',
      icon: 'custom-emoji-heart',
      reaction_id: '002',
    },
    {
      name: 'Thumbs Up',
      class: 'thumbsup',
      icon: 'custom-emoji-thumbsup',
      reaction_id: '003',
    },
    {
      name: 'Claps',
      class: 'claps',
      icon: 'custom-emoji-claps',
      reaction_id: '004',
    },
    {
      name: 'Celebration',
      class: 'celebration',
      icon: 'custom-emoji-celebration',
      reaction_id: '005',
    },
  ],
  socket_webrtc_ams: `wss://antmedia.aieze.in:5443/WebRTCAppEE/websocket`,
  stun_server: {
    iceServers: [{ urls: 'stun:stun1.l.google.com:19302' }],
  },
  sdp_constraints: {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false,
  },
  media_constraints: {
    audio: {
      noiseSuppression: true,
      echoCancellation: true,
    },
    video: {
      width: { min: 480, ideal: 1920, max: 1920 },
      height: { min: 360, ideal: 1080, max: 1080 },
    },
  },
  media_constraints_screen_share: {
    audio: false,
    video: {
      width: { min: 1920, ideal: 1920, max: 3840 },
      height: { min: 1080, ideal: 1080, max: 2160 },
    },
  },
  media_constraints_recording: {
    audio: false,
    video: false,
  },
  record_bot_participant_id: 'recording_bot_participant',
  enable_waiting_room_webinar: false,
};
