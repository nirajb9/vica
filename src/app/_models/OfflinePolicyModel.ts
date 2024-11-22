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