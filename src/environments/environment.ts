import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apiUrl: 'http://localhost:4200',
  apiBaseUrl: "http://31.207.34.194:8080/api/auth",
  imgUrl: "http://31.207.34.194:8080",
  
};
