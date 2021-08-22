const ReamurToCelcius = require("./convert");
test("Convert Celcius to Farenhait", () => {
    expect(ReamurToCelcius(10)).toBe(12.5);
});