import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apiUrl: 'http://192.168.1.15:4200',
  apiBaseUrl: "http://192.168.1.15:8080/api/auth",
  imgUrl: "http://192.168.1.15:8080",
  wsEndpoint: 'http://192.168.1.15:8080/api/auth/ws'
};

// export const environment = {
//   appVersion: packageInfo.version,
//   production: true,
//   apiUrl: 'http://localhost:4200',
//   apiBaseUrl: "http://localhost:8080/api/auth",
//   imgUrl: "http://localhost:8080",
  
// };



/*
export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apiUrl: 'http://localhost:4200',
  apiBaseUrl: "https://xpertcash.tchakeda.com/api/v1/api/auth",
  imgUrl: "https://xpertcash.tchakeda.com",
};
*/
