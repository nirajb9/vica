export interface StateMas {
    stateId: number;
    stateName: string | null;
    stateCode: string | null;
    isDeleted: boolean | null;
    createdBy: number | null;
    createdDate: Date | null;
    modifiedBy: number | null;
    modifiedDate: Date | null;
}