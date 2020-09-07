
export enum LoanStatus
{
    OnBoarding = 1,
    PendingApproval = 2,
    Approved = 3,
    Rejected = 4,
    Active = 5,
    Completed = 6,
    Discarded = 7,
    GuarantorCapture = 8,
    EmployerInformation = 9,
    BankInformation = 10,
    DocumentUpload = 11,
    PaymentInformation = 12,
    RejectedByUser = 13,
    BusinessInformation = 14
}
export enum TransactionMode
{
    Credit = 1,
    Debit = 2
}
export enum PaymentStatus
{
    Unpaid = 1,
    Paying = 2,
    Paid = 3
}

export enum PaymentOptionTypes
{
    Card = 1,
    AccountDebit = 2,
    Transfer = 3
}

export enum TransactionStatus
{
    Successful = 1,
    Pending = 2,
    Failed = 3
}

export enum TransacionTypes
{
    LoanDisbursement = 1,
    LoanRepayment = 2,
    PenaltyCharges = 3
}
export enum OtpPurpose
{

    LoanRepayment = 1,
    LoanOnBoarding =2,
    Others=3
}
export enum ApprovalStatus
{
    Approved = 1,
    Rejected = 2,
}

export enum filterLoanStatus {
  PendingApproval = 2,
  Approved = 3,
  Rejected = 4,
  Active = 5,
  InComplete =15
}

export enum PaymentType
{
    Card = 1,
    Account = 2
}
export enum InvestmentProgressStatus
{
    Pending = 1,
    Running = 2,
    Completed = 3
}

export enum InvestmentWithdrawalRequest{
  Interest =1,
  Balance =2
}


export enum ApiResponseCodes
{
    NOT_FOUND = 4,
    ValidationError = 3,
    FAIL = 2,
    OK = 1
}