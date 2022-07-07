import { Pipe, PipeTransform } from "@angular/core";
import { Server } from "./server.model";

@Pipe({
    name: 'serverSize'
})
export class ServerSizeRename implements PipeTransform {
    transform(value: any, ...args: any[]) {
        switch (value) {
            case 1:
                return "SMALL";
            case 2:
                return "MEDIUM";
            case 3:
                return "LARGE";
            default:
                return "";
        }
    }
}

@Pipe({
    name: 'serverSort'
})
export class ServersSort implements PipeTransform {
    transform(value: Server[], ...args: any[]) {
        return value.sort((a, b) => a.startingDate.getTime() - b.startingDate.getTime())
    }
}