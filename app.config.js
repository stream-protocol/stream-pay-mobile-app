let Config = {
  apiUrl: 'https://wallet.streamprotocol.app',
  enableHiddenFeatures: true,
};

if (process.env.APP_ENV === 'production') {
  Config.apiUrl = 'https://api.wallet.streamprotocol.app';
  Config.enableHiddenFeatures = false;
} else if (process.env.APP_ENV === 'staging') {
  Config.apiUrl = 'https://api.wallet.streamprotocol.app';
  Config.enableHiddenFeatures = true;
}

export default {
  // ...
  extra: {
    ...Config,
  },
};
