var expect = chai.expect

describe("MyFunction", function() {
    describe ("#nameGame", function() {
    it("should concatenate the two parameters", function() {
        var x = nameGame("War!", 3);
        expect(x).to.equal("War!3");
    });
    it ("should throw an error if first parameter is not a string", function() {
        expect(function(){
            nameGame(1, 3);
        }).to.throw(Error);
    });
});
});
