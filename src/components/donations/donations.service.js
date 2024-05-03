import data from './100-last-donations.json' assert { type: 'json' };

class DonationService {
  constructor() {
    this.donations = data;
  }

  addDonation = (donation) => this.donations.push(donation);

  getAllDonations = () => this.donations;

  getDonations = (rowsPerPage, pageNum) => {
    if (pageNum < 1) return [];
    return {
      donations: this.donations.slice(
        Math.min((pageNum - 1) * rowsPerPage, this.donations.length - 1),
        Math.min(pageNum * rowsPerPage, this.donations.length),
      ),
      isPageMin: pageNum === '1',
      isPageMax: pageNum * rowsPerPage >= this.donations.length,
    };
  };

  getDonation = (id) => {
    return this.donations.find((item) => item.id === id);
  };
}

export default DonationService;
