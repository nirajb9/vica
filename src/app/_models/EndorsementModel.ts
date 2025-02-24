export interface EndorsementPolicy {
    endorsementId: number;
    userId: number | null;
    policycopy: string | null;
    policycopyFinal: string | null;
    endorsementType: string | null;
    rcF: string | null;
    rcB: string | null;
    kyc1: string | null;
    kyc2: string | null;
    kyc3: string | null;
    kyc4: string | null;
    status: string | null;
    comments: string | null;
    isDeleted: boolean | null;
    createdBy: number | null;
    createdDate: string | null;
    modifiedBy: number | null;
    modifiedDate: string | null;
}