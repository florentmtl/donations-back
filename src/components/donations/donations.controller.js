class DonationController {
  constructor(donationService) {
    this.donationService = donationService;
  }

  getAllDonations = (_, res) => {
    return res.status(200).send(this.donationService.getAllDonations());
  };

  getDonation = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(this.donationService.getDonation(id));
  };
}

export default DonationController;
