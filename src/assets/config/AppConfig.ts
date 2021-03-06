export interface IAppConfig {
  env: {
      name: string;
  };
  appInsights: {
      instrumentationKey: string;
  };
  logging: {
      console: boolean;
      appInsights: boolean;
  };
  aad: {
      requireAuth: boolean;
      tenant: string;
      clientId: string;

  };
  apiServer: {
      BaseUrl: string;
      Url: string;
      AuthUrl:string;
      SavingsAndLoansUrl:string;
      PaymentsUrl:string;
      clientId:string;
      clientSecret:string;
      scope:string;
      LendingUrl:string;
      redirectUrl:string;
      silentRenewUrl:string;
      SavingsUrl:string;
      ProfileUrl : string;
      ApiGw:string;
      OnboardingUrl:string;
      PINUrl: string;
      BillsUrl:string;
      mobileClientId:string;
      mobileClientSecret:string;
      InvestmentUrl:string;
  };
}
