import express from 'express';

class DonationRouter {
  constructor(donationController) {
    this.donationController = donationController;
  }

  getRouter() {
    const router = express.Router();
    router.route('/:id').get(this.donationController.getDonation);
    router.route('/').get(this.donationController.getAllDonations);
    return router;
  }
}

export default DonationRouter;
