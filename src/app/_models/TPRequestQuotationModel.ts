export interface TPRequestQuotationModel {
    id: number;
    name?: string;
    mobileNo: number;
    insuranceCompany?: string;
    vehicleNo?: string;
    premimumAmount: number;
    cashbackAmount: number;
    paCover: number;
    daCover: number;
    pessangerCover: number;

    rcFUrlm?: string;
    rcBUrlm?: string;
    aadharFUrlm?: string;
    aadharBUrlm?: string;
    panFUrlm?: string;
    panBUrlm?: string;
    dlFUrlm?: string;
    dlBUrlm?: string;
    oldPolicyUrlm?: string;
    rcFUrlw?: string;
    rcBUrlw?: string;
    aadharFUrlw?: string;
    aadharBUrlw?: string;
    panFUrlw?: string;
    panBUrlw?: string;
    dlFUrlw?: string;
    dlBUrlw?: string;
    oldPolicyUrlw?: string;
}
