const { JsonRpc, HttpTransport, EthRpc, NodeChecker } = require('emerald-js');
const log = require('./logger');


function check(url) {
  const checker = new NodeChecker(new EthRpc(new JsonRpc(new HttpTransport(url))));
  return checker.check();
}

function waitRpc(url) {
  const checker = new NodeChecker(new EthRpc(new JsonRpc(new HttpTransport(url))));
  log.info('made checker..')
  return new Promise((resolve, reject) => {
    const retry = (n) => {
      log.info('checking if exists')
      checker.exists().then((clientVersion) => resolve(clientVersion)).catch(() => {
        if (n > 0) {
          log.debug(`RPC ${url} not exists, going retry after 1000 ms`);
          setTimeout(() => retry(n - 1), 1000);
        } else {
          reject(new Error('Not Connected'));
        }
      });
    };
    retry(30);
  });
}

module.exports = {
  check,
  waitRpc,
};
