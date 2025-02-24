export interface PolicyCopyModel {
    policyCopyId: number;
    userId: number | null;
    vehicleNo: string | null;
    policyCopyUrl: string | null;
    status: string | null;
    isDeleted: boolean | null;
    userName: string | null;
    policyCopyFileName: string | null;
    agentCompanyId: number | null;
    tpRequestId: number | null;
    createdBy: number | null;
    createdDate: Date | null;
    modifiedBy: number | null;
    modifiedDate: Date | null;
}