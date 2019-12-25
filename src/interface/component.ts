export namespace Record {
  export interface Column {
    title: string | undefined | number;
    index: string;
    width?: string;
  }
  
}

export namespace Antds {
  export interface Column {
    title: string | number;
    dataIndex: string;
    key?: string;
    [props: string]: any;
  }
}