// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GameCopy is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _counter;

    constructor() ERC721("GameCopy", "GCPY") {
    }

    modifier onlyGameStore() {
        // TODO: Verify if address belongs to a video games store.
        require(true, "Only a video games store can invoke this function.");
        _;
    }

    function buyGameCopy(address player, string memory tokenURI) public onlyGameStore returns (uint256) {
        _counter.increment();

        uint256 newItemId = _counter.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}