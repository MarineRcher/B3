const Block = require('./block')

class Blockchain {
    constructor(){
        this.chain = [Block.genesis()]
    }

    addBlock(data) {
        const lastBlock = this.chain[this.chain.length - 1];
        console.log(lastBlock
        )
        const block = Block.mineBlock(lastBlock, data);
        
        this.chain.push(block);
        
        return block;
    }

}

module.exports = Blockchain