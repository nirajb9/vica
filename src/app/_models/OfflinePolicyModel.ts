export interface OfflineQuotationRequestModel {
    offlineQuotationId: number;
    idv: number | null;
    insurancecompanies: string | null;
    status: string | null;
    rcFUrlm: string | null;
    rcBUrlm: string | null;
    agentCompanyId: number | null;
    userId: number | null;
    pacover: boolean | null;
    dacover: boolean | null;
    passangercover: boolean | null;
    vehicleNo: string | null;
    userName: string | null;
}


export interface OfflineQuotationRequestDetail {
    offlineQuotationDetailsId: number;
    offlineQuotationId: number | null;
    agentCompanyId: number | null;
    userId: number | null;
    premiumAmount: number | null;
    payoutAmount: number | null;
    quotationUrl: string | null;
    status: string | null;
    insuranceCompanyId: number | null;
    insuranceCompanyName: string | null;
    isDeleted: boolean | null;
    createdBy: number | null;
    createdDate: Date | null;
    modifiedBy: number | null;
    modifiedDate: Date | null;
    fileData: string | null;
    fileName: string | null;
}