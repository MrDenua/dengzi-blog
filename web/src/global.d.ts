let A = '';

declare namespace Theme {
    interface ThemeA {
        f:number
    }

    let B = "";
}

declare namespace B {
    interface ThemeA {
        f: string
    }
}
