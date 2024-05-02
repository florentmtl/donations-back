import crypto from 'crypto';

class DonationObject {
  constructor(firstName, lastName, createdAtUtc, amount, thankYouComment, isAnonymous, companyName) {
    this.id = crypto.randomUUID();
    this.firstName = firstName;
    this.lastName = lastName;
    this.createdAtUtc = createdAtUtc;
    this.amount = amount;
    this.thankYouComment = thankYouComment;
    this.isAnonymous = isAnonymous;
    this.companyName = companyName;
  }

  toJSON() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      createdAtUtc: this.createdAtUtc,
      amount: this.amount,
      thankYouComment: this.thankYouComment,
      isAnonymous: this.isAnonymous,
      companyName: this.companyName,
      __typename: 'DonationObject',
    };
  }
}

class TransactionWithDonationObject {
  constructor(
    type,
    refundedAmount,
    firstName,
    lastName,
    createdAtUtc,
    amount,
    thankYouComment,
    isAnonymous,
    companyName,
  ) {
    this.id = crypto.randomUUID();
    this.type = type;
    this.refundedAmount = refundedAmount;
    this.donation = new DonationObject(
      firstName,
      lastName,
      createdAtUtc,
      amount,
      thankYouComment,
      isAnonymous,
      companyName,
    );
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      refundedAmount: this.refundedAmount,
      donation: this.donation.toJSON(),
      __typename: 'TransactionWithDonationObject',
    };
  }
}

export default TransactionWithDonationObject;
