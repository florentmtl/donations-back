import data from './100-last-donations.json' assert { type: 'json' };

class DonationService {
  constructor() {
    this.donations = data;
  }

  getAllDonations = () => this.donations;

  getDonation = (id) => {
    return this.donations.find((item) => item.id === id);
  };
}

export default DonationService;