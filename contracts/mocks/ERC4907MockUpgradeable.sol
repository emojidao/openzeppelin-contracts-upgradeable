// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../token/ERC4907/ERC4907Upgradeable.sol";

contract ERC4907MockUpgradeable is ERC4907Upgradeable {
    function initialize(string memory name_, string memory symbol_) public initializer {
        __ERC721_init(name_, symbol_);
    }

    function mint(uint256 tokenId, address to) public {
        _mint(to, tokenId);
    }
}
