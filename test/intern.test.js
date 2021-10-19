const Intern = require("../lib/intern");

describe("email", () => {
    it("should match the intern's email", () => {
        const intern = new Intern("Steve Jobs", 1, "Jobs@apple.com", "Cal");
        
        expect(intern.email).toEqual("Jobs@apple.com");
    });
});

describe("school", () => {
    it("should match the intern's github", () => {
        const intern = new Intern("Steve Jobs", 1, "Jobs@apple.com", "Cal");
        
        expect(intern.school).toEqual("Cal");
    });
});