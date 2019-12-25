export namespace Plugin {
  export interface Base {
    lock?: boolean,
    install: ($: any) => {},
    [prop: string]: any,
  }

  export interface Options {
    text: string | boolean | number,
    time?: number,
  }
}