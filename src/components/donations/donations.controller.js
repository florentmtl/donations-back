import TransactionWithDonationObject from './donations.entities.js';

class DonationController {
  constructor(donationService) {
    this.donationService = donationService;
  }

  createDonation = (req, res) => {
    const { type, refundedAmount, firstName, lastName, utcTime, amount, thankYouComment, isAnonymous, companyName } =
      req.body;
    const donation = new TransactionWithDonationObject(
      type,
      refundedAmount,
      firstName,
      lastName,
      utcTime,
      amount,
      thankYouComment,
      isAnonymous,
      companyName,
    );
    return res.status(201).send(this.donationService.addDonation(donation));
  };

  getAllDonations = (_, res) => {
    return res.status(200).send(this.donationService.getAllDonations());
  };

  getDonation = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(this.donationService.getDonation(id));
  };
}

export default DonationController;
