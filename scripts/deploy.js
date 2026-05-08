async function main(){

  const [deployer] =

    await ethers.getSigners();

  console.log(

    "Deploying with:",

    deployer.address

  );

  const Token =

    await ethers.getContractFactory(
      "BXToken"
    );

  const token =

    await Token.deploy(

      deployer.address

    );

  await token.waitForDeployment();

  console.log(

    "BX Token deployed:",

    await token.getAddress()

  );

}

main().catch(err => {

  console.error(err);

  process.exit(1);

});
