const hre = require("hardhat");
async function main() {
    const contractAddress = "0x5476854326A0A1f1493c24deE60F45452eca70E8";
    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.attach(contractAddress);
    // On lit le message actuel
    const currentMessage = await hello.message();
    console.log("Message actuel :", currentMessage);
    // On met à jour le message
    const tx = await hello.update("Marine Richer");
    await tx.wait();
    console.log("Message mis à jour !");

    // On vérifie que le message a bien été mis à jour
    const newMessage = await hello.message();
    console.log("Nouveau message :", newMessage);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
