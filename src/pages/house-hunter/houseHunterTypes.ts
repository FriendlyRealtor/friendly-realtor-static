import * as Yup from 'yup';

export const houseHunterValidationSchema = {};

export const testRequestBody = {
  consumerPii: {
    primaryApplicant: {
      name: {
        lastName: 'CANN',
        firstName: 'JOHN',
        middleName: 'N',
      },
      dob: {
        dob: '1955',
      },
      ssn: {
        ssn: '111111111',
      },
      currentAddress: {
        line1: '510 MONDRE ST',
        city: 'MICHIGAN CITY',
        state: 'IN',
        zipCode: '46360',
      },
    },
  },
  requestor: {
    subscriberCode: '2222222',
  },
  permissiblePurpose: {
    type: '08',
  },
  resellerInfo: {
    endUserName: 'CPAPIV2TC21',
  },
  vendorData: {
    vendorNumber: '072',
    vendorVersion: 'V1.29',
  },
  addOns: {
    directCheck: '',
    demographics: 'Only Phone',
    clarityEarlyRiskScore: 'Y',
    liftPremium: 'Y',
    clarityData: {
      clarityAccountId: '0000000',
      clarityLocationId: '000000',
      clarityControlFileName: 'test_file',
      clarityControlFileVersion: '0000000',
    },
    renterRiskScore: 'N',
    rentBureauData: {
      primaryApplRentBureauFreezePin: '1234',
      secondaryApplRentBureauFreezePin: '112233',
    },
    riskModels: {
      modelIndicator: [''],
      scorePercentile: '',
    },
    summaries: {
      summaryType: [''],
    },
    fraudShield: 'Y',
    mla: '',
    ofacmsg: '',
    consumerIdentCheck: {
      getUniqueConsumerIdentifier: '',
    },
    joint: '',
    paymentHistory84: '',
    syntheticId: 'N',
    taxRefundLoan: 'Y',
    sureProfile: 'Y',
    incomeAndEmploymentReport: 'Y',
    incomeAndEmploymentReportData: {
      verifierName: 'Experian',
      reportType: 'ExpVerify-Plus',
    },
  },
  customOptions: {
    optionId: ['COADEX'],
  },
};
