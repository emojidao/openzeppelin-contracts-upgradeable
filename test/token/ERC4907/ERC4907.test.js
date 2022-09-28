const {
  shouldBehaveLikeERC4907,
} = require('./ERC4907.behavior');
const ERC4907MockUpgradeable = artifacts.require('ERC4907MockUpgradeable');
contract('ERC4907', function (accounts) {
  const name = 'Non Fungible Token 4907';
  const symbol = 'NFT4907';
  beforeEach(async function () {
    this.token = await ERC4907MockUpgradeable.new(name, symbol);
  });
  shouldBehaveLikeERC4907('ERC4907', ...accounts);
});
