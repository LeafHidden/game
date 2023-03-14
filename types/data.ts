export interface Mock{
    all:All,
    classifys:Array<Classify>,
    hot:Hot,
    tag:Tag
}

export interface Item {
    avatar: string;
    classify: Array<number>;
    cover: string;
    disabled: boolean;
    explain: string;
    id: string;
    name:string;
    labelPosition: {
      [propName: string | number]: string|undefined;
    };
    tags: string;
    url: string;
 }

 export interface Classify{
    name:string,
    inx:string
 }

 export interface All{
    data:Array<Item>
 }

 export type Hot =Array<Item>

 export type Tag=Array<string>
 

