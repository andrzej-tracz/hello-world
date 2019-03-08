import { hello } from "./index";

test('returns hello world from promise', async () => {
    const result = await hello();

    expect(result).toBe("Hello World!")
});
