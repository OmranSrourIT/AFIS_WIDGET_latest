const homepage = require("./pages/home.page");

const badgeValue = "Badge";

describe("FingerPrintWeb", () => {
    it("should render a badge with a caption", () => {
        homepage.open();

        /**
        * Create here your tests, Example:
        * homepage.badge().waitForVisible();
        *
        * const widgetValue = homepage.badge().getText();
        * expect(widgetValue).toContain(badgeValue);
        **/
    });
});
