/**
 * 
 * @param {string} ipaddress 
 * @returns {string}
 * @description Given a valid IP address, defang it.
Note: To defang an IP address, replace every ”.”, with ”[.]”.

Ex: Given the following address…

address = "127.0.0.1", return "127[.]0[.]0[.]1"
 */

// Approach 1
function defangingIPS1(ipaddress) {
  let defang = ipaddress.split('');
  for (let i = 0; i < defang.length; i++) {
    if (defang[i] === '.') {
      defang[i] = '[.]';
    }
  }
  return defang.join('');
}

function defangingIPS2(ip) {
  return ip.split('.').join('[.]');
}

let address = '127.0.0.1';
let output = defangingIPS2(address);
console.log(output);
