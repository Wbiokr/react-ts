export namespace Record {
  export interface Route {
    path: string,
    title: string,
    num?: number|string,
  }

  export interface Order {
    readonly orderId: string,
    readonly language?: string,
    readonly createTime: string | number,
    readonly original?: string,
    readonly transnFileSuffix?: string,
    readonly transnType?: string,
  }
}

export interface Status {
  readonly txt: string;
  readonly color: string;
}
