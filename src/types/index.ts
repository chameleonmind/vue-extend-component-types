// extend the ComponentCustomProperties interface
// this needs to be in a .ts file, not a .d.ts file
// if it's in a .d.ts file, the types will be shown as any
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    someOtherProp: string
    name: string
    someBoolean: boolean
  }
}
