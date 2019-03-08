const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function hello() {
    return "Hello World!";
}

export {
    hello
}
