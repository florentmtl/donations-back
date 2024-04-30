import donationsModule from '../components/donations/donations.module.js';

export default (app) => {
  app.use('/donations', donationsModule.router);
};
