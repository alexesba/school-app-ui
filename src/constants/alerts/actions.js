export const SHOW_ALERT = 'SHOW_ALERT';
export const CLOSE_ALERT = 'CLOSE_ALERT';

export const showAlert = payload => ({
  type: SHOW_ALERT,
  payload,
});

export const closeAlert = () => ({
  type: CLOSE_ALERT,
});
