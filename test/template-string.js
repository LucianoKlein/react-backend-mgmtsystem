let names = ["Rose", "Jack", "Dad"];
let str = `
    <ul>
    ${
        names.map(name => `<li>Hi, I am ${name}</li>`).join('')
    }
    </ul>
`
console.log(str);