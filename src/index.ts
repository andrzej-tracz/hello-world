const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function hello() {
    await delay(200);
    return "Hello World!";
}

export {
    delay,
    hello
}
