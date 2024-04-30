import DonationController from './donations.controller.js';
import DonationRouter from './donations.router.js';
import DonationService from './donations.service.js';

const donationService = new DonationService();
const donationController = new DonationController(donationService);
const donationRouter = new DonationRouter(donationController);

export default {
  service: donationService,
  controller: donationController,
  router: donationRouter.getRouter(),
};
