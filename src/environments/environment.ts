import packageInfo from '../../package.json';


export const environment = {
  appVersion: packageInfo.version,
  production: false,
  apiUrl: 'http://localhost:4200',
  apiBaseUrl: 'http://localhost:8080/api/auth',
  imgUrl: "http://localhost:8080",
  wsEndpoint: 'http://localhost:8080/ws'
  
};
