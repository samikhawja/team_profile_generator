const Engineer = require("..lib/engineer");

describe("email", () => {
    it("should match the engineer's email", () => {
        const engineer = new Engineer("Steve Jobs", 1, "Jobs@apple.com", "stevejobs");
        
        expect(engineer.email).toEqual("Jobs@apple.com");
    });
});

describe("github", () => {
    it("should match the engineer's github", () => {
        const engineer = new Engineer("Steve Jobs", 1, "Jobs@apple.com", "stevejobs");
        
        expect(engineer.github).toEqual("stevejobs");
    });
});