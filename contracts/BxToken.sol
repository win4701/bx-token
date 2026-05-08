// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BXToken is ERC20, Ownable {

    uint8 private constant _DECIMALS = 8;

    constructor(
        address initialOwner
    )

        ERC20(
            "BXS Network",
            "BX"
        )

        Ownable(initialOwner)

    {

        _mint(

            initialOwner,

            1000000000 * 10 ** _DECIMALS

        );

    }

    function decimals()

        public

        pure

        override

        returns (uint8)

    {

        return _DECIMALS;

    }

}
