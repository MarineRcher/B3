const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `timestamp: ${this.timestamp}, lastHash: ${this.lastHash}, hash: ${this.hash}, data: ${this.data}.`;
    }

    static genesis() {
        const timestamp = 'Genesis time';
        const lastHash = '-----';
        const hash = 'first-hash';
        const data = "Hi";
        
        return new this(timestamp, lastHash, hash, data);
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = SHA256(`${timestamp}${lastHash}${data}`).toString();
        
        return new this(timestamp, lastHash, hash, data);
    }
}

module.exports = Block;