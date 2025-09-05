import packageInfo from '../../package.json';


export const environment = {
  appVersion: packageInfo.version,
  production: false,
  apiUrl: 'http://192.168.1.10:4200',
  apiBaseUrl: 'http://192.168.1.10:8080/api/auth',
  imgUrl: "http://192.168.1.10:8080",
  wsEndpoint: 'http://192.168.1.10:8080/ws'
  
};
