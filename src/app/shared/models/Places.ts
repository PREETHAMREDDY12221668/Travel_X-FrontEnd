export class Places{
    id!:String;
    name!:string;
    price!:number;
    tags!:string[];
    stars:number = 0;
    imageUrl!:string;
    backgroundUrl!:string;
    duration!:string;
    content!:string[];
    lats!:number[];
    lngs!:number[];
    emergency_services!:Object[];
    
}