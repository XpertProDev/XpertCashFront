import packageInfo from '../../package.json';


// export const environment = {
//   appVersion: packageInfo.version,
//   production: false,
//   apiUrl: 'http://192.168.1.12:4200',
//   apiBaseUrl: 'http://192.168.1.12:8080/api/auth',
//   imgUrl: "http://192.168.1.12:8080",
//   wsEndpoint: 'http://192.168.1.12:8080/ws'
  
// };

// localhos
export const environment = {
  appVersion: packageInfo.version,
  production: false,
  apiUrl: 'http://localhost:4200',
  apiBaseUrl: 'http://localhost:8080/api/auth',
  imgUrl: "http://localhost:8080",
  wsEndpoint: 'ws://localhost:8080/ws'
};



