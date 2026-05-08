const { expect } = require("chai");

describe("BxToken", function () {

  it("Should deploy correctly", async function () {

    const [owner] = await ethers.getSigners();

    const Token =
      await ethers.getContractFactory("BxToken");

    const token =
      await Token.deploy(owner.address);

    await token.waitForDeployment();

    expect(await token.name()).to.equal("Bx");

    expect(await token.symbol()).to.equal("BX");
  });
});
