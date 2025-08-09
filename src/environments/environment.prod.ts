import packageInfo from '../../package.json';


export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apiUrl: 'https://tchakeda.com',
  apiBaseUrl: "https://xpertcash.tchakeda.com/api/v1/api/auth",
  imgUrl: "https://xpertcash.tchakeda.com",
  wsEndpoint: 'https://xpertcash.tchakeda.com/ws'
  
};