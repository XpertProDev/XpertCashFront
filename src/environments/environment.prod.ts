import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apiUrl: 'http://localhost:4200',
 apiBaseUrl: "https://xpertcash.tchakeda.com/api/v1/api/auth",
  
};
