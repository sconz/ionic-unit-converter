export interface IUnitConverter {
    units:{};
    doConverter(from:string, to:string, value:number): number;
}