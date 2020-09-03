var config = {
    testnet: false, // this is adjusted page.h if needed. dont need to change manually
    stagenet: false, // this is adjusted page.h if needed. dont need to change manually
    coinUnitPlaces: 9,
    txMinConfirms: 4, // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 18, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    coinSymbol: 'DUC',
    openAliasPrefix: "duc",
    coinName: 'ducov2',
    coinUriPrefix: 'ducov2:',
    addressPrefix: 0x3fd35c,
    integratedAddressPrefix: 0x93dc,
    subAddressPrefix: 0x113dc,
    addressPrefixTestnet: 0x495c,
    integratedAddressPrefixTestnet: 0x14c7dc,
    subAddressPrefixTestnet: 0x1b09dc,
    addressPrefixStagenet: 0x5bda,
    integratedAddressPrefixStagenet: 0x159a5a,
    subAddressPrefixStagenet: 0x1b9c5a,
    feePerKB: new JSBigInt('20000'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('10000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 11, // minimum mixin for hardfork v5
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};
