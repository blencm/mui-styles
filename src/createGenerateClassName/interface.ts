export interface ClassOptions {
    disableGlobal?: boolean
    productionPrefix?: string
    seed?: string
    dangerouslyUseGlobalCSS?: boolean
}

interface options {
   link?: boolean | any
   name?: any
   theme?: string | number
   classNamePrefix?: string | any
}
interface Rule {
    [x: string]: any
}
interface Raw {
    raw?: Rule  
}

export interface ClassRule {
    key?: string | number
}

export interface ClassStyleSheet {
    options?: options | any
    theme?: string | number | any
    rules?: Raw | any
}