import { NgModuleRef } from "@angular/core";

export class SalesPerson {
    constructor(private firstName: string,
        private lastName: string, 
        private email: string,
        private salesVolume: number) {

    }
}
