declare module 'recursive-copy' {
  declare class Copy extends NodeJS.EventEmitter {
    events: objec;
  }
  declare function copy(src: string, dest: string, options: object|null): Copy;
  declare const recursiveCopy: copy|Copy;
  export = recursiveCopy;
}
