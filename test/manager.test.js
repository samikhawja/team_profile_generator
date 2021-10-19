const Manager = require("../lib/manager");

describe("email", () => {
    it("should match the manager's email", () => {
        const manager = new Manager("Steve Jobs", 1, "Jobs@apple.com", 1);
        
        expect(manager.email).toEqual("Jobs@apple.com");
    });
});

describe("office", () => {
    it("should match the manager's office", () => {
        const manager = new Manager("Steve Jobs", 1, "Jobs@apple.com", 1);
        
        expect(manager.office).toEqual(1);
    });
});