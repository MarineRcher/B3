const Block = require("./block");
const SHA256 = require("crypto-js/sha256");

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

    static blockHash(block) {
        return SHA256(
            `${block.timestamp}${block.lastHash}${block.data}`
        ).toString();
    }

    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
            return false;
        }
        for (let i = 1; i < chain.length; i++) {
            const lastBlock = chain[i - 1];
            const block = chain[i];
            if (block.lastHash != lastBlock.hash) {
                return false;
            }
            if (block.hash != Blockchain.blockHash(block)) {
                return false;
            }
        }
        return true;
    }
    replaceChain(chain) {
        if (!Blockchain.isValidChain(chain)) {
            return;
        }
        if (chain.lenght < this.chain.lenght) {
            return;
        }
        this.chain = chain;
    }
}

module.exports = Blockchain;
