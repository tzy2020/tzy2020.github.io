const env = window.location.origin.includes('localhost') ? 'dev' : 'prod';

const baseurl = env === 'prod' ? 'https://api.liushuaiqi.top' : 'http://127.0.0.1:7001';

export const serverHost = baseurl;

export const baseApi = {
  userApi: `${baseurl}/api/user`,
  notesApi: `${baseurl}/api/notes`,
  systemApi: `${baseurl}/api/system`,
  profileApi: `${baseurl}/api/profile`,
  passwordApi: `${baseurl}/api/password`,
  spiderApi: `${baseurl}/api/spider`,
  oplogApi: `${baseurl}/api/oplog`,
};
