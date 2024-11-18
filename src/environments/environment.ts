export const environment = {
  production: true,
  msalConfig: {
    auth: {
      clientId: '13cd173a-2f30-45a1-8ee8-9b0028cf7f37',
      authority:
        'https://login.microsoftonline.com/5b751804-232f-410d-bb2f-714e3bb466eb',
      redirectUri: 'https://security-mngmt-fe.vercel.app',
      postLogoutRedirectUri: 'https://security-mngmt-fe.vercel.app',
    },
  },
  apiConfig: {
    scopes: ['user.read'],
    uri: 'https://graph.microsoft.com/v1.0/me',
  },
  serverConfig: {
    // baseUrl: 'http://172.16.4.89:9000',
    baseUrl: 'https://security-mngmt-be.onrender.com',
  },
};
