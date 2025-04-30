const Block = require("./block");

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock(data) {
        const lastBlock = this.chain[this.chain.length - 1];
        const block = Block.mineBlock(lastBlock, data);
        this.chain.push(block);
        return block;
    }

    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
            return false;
        }

        for (let i = 1; i < chain.length; i++) {
            const lastBlock = chain[i - 1];
            const block = chain[i];

            if (block.lastHash !== lastBlock.hash) {
                return false;
            }

            if (block.hash !== Block.blockHash(block)) {
                return false;
            }
        }

        return true;
    }

    replaceChain(chain) {
        if (!Blockchain.isValidChain(chain)) {
            console.log("The received chain is not valid");
            return;
        }

        if (chain.length <= this.chain.length) {
            console.log(
                "The received chain is not longer than the current chain"
            );
            return;
        }

        console.log("Replacing blockchain with the new chain");
        this.chain = chain;
    }
}

module.exports = Blockchain;
