export const allowed_headers =
  "Content-Type, Authorization, offline_mode, uo-device-type, uo-os, uo-os-version, uo-is-mobile, uo-is-tablet, uo-is-desktop, uo-browser-version, uo-browser, uo-client-id";

export const CACHE_TTL = {
  SHORT: 15 * 60,
  MID: 60 * 60,
  PAYMENT_LINK: 2 * 60 * 30,
  LONG: 24 * 60 * 60,
};

export const SUPPORT_REQUEST_STATUS = {
  OPEN: 0,
  ASSIGNED: 1,
  ATTENDED: 2,
  UNATTENDED: 3,
  USER_NOT_RESPONDED: 4,
  CLOSED: 5,
  CLOSED_BY_USER: 6,
};

export const SUPPORT_AVAILABILITY_STATUS = {
  OFFLINE: 0,
  ONLINE: 1,
  AWAY: 2,
  DO_NOT_DISTURB: 3,
  IN_MEETING: 4,
};

export const SUPPORT_RECORDING_STATUS = {
  ACTIVE: 0,
  DELETED: 1,
};

export const SUPPORT_FEEDBACK = {
  VERY_BAD: 1,
  BAD: 2,
  GOOD: 3,
  VERY_GOOD: 4,
  EXCELLENT: 5,
};

export const DURATION_TYPE = {
  TODAY: 1,
  YESTERDAY: 2,
  LAST_15_DAYS: 3,
  LAST_30_DAYS: 4,
  ALL: 5,
};

export const CRON_DISTRIBUTION_LOCK = {
  key: 'CRON_LOCK',
  value: 'CRON_LOCK_VALUE'
}

export const PAGE_SIZE = 10;
