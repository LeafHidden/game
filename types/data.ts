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