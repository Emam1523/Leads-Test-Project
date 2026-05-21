export const environment = {
  production: true,
  appName: 'Microfont POC',
  appId: '1',
  keycloak: {
    url: 'http://192.168.10.56:9080',
    realm: 'MicroCube_dev',
    clientId: 'Sentinel_FE'
  },
  loginUrl: 'http://localhost:4001',
  redirectUri: 'http://localhost:4001/landing/home',
  apiBaseUrl: 'http://192.168.10.56:8090',
  myBaseUrl: 'http://192.168.10.56:8090/sentinel/api',
  centrinoUrl: 'http://192.168.10.56:8090/centrino/api',
  sentinelUrl: 'http://192.168.10.56:8090/sentinel/api',
  reportManagementApiUrl: 'http://192.168.10.56:8090/centrino/api',
  reportGenerationApiUrl: 'http://192.168.10.56:8090',
  novu_identifier: '1uXpKIJUa3Rg',
  novu_socket: 'http://192.168.10.56:3002',
  novu_api: 'http://192.168.10.56:3000/novu/api',
};
