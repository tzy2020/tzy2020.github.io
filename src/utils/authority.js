// eslint-disable-next-line
export function getAuthority() {
  let authority = ['user'];
  try {
    // eslint-disable-next-line
    authority = window.g_app._store.getState().global.currentUser.authority;
  } catch (e) {
    authority = ['user'];
  }
  return authority;
}

export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  return localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority));
}
