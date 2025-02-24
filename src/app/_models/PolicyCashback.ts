export interface PolicyCashback {
    policyCashbackId: number;
    policyCashbackRequestId: number | null;
    userId: number | null;
    agentCompanyId: number | null;
    tpRatesId: number | null;
    tpRequestId: number | null;
    offlineQuotationId: number | null;
    premimumAmount: number | null;
    cashbackAmount: number | null;
    status: string | null;
    transactionDetails: string | null;
    transactionProof1: string | null;
    transactionProof2: string | null;
    fileNameProof1: string | null;
    fileNameProof2: string | null;
    isPaid: boolean | null;
    isDeleted: boolean | null;
    createdBy: number | null;
    createdDate: Date | null;
    modifiedBy: number | null;
    modifiedDate: Date | null;
}