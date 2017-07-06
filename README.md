# node-red-contrib-opengpg
A collection of [Node-RED](http://nodered.org) nodes use the xxtea encryption/decryption.

## What you mean with *xxtea*?
>In cryptography, Corrected Block TEA (often referred to as XXTEA) is a block cipher designed to correct weaknesses in the original Block TEA.

>XXTEA is vulnerable to a chosen-plaintext attack requiring 2^59 queries and negligible work.

>The cipher's designers were Roger Needham and David Wheeler of the Cambridge Computer Laboratory, and the algorithm was presented in an unpublished technical report in October 1998 (Wheeler and Needham, 1998). It is not subject to any patents.

>Formally speaking, XXTEA is a consistent incomplete source-heavy heterogeneous UFN (unbalanced Feistel network) block cipher. XXTEA operates on variable-length blocks that are some arbitrary multiple of 32 bits in size (minimum 64 bits). The number of full cycles depends on the block size, but there are at least six (rising to 32 for small block sizes). The original Block TEA applies the XTEA round function to each word in the block and combines it additively with its leftmost neighbour. Slow diffusion rate of the decryption process was immediately exploited to break the cipher. Corrected Block TEA uses a more involved round function which makes use of both immediate neighbours in processing each word in the block.

>...

>The unusually small size of the XXTEA algorithm would make it a viable option in situations where there are extreme constraints e.g. legacy hardware systems (perhaps embedded) where the amount of available RAM is minimal.

## Install
Use npm to command to install this package locally in the Node-RED modules directory
```bash
npm install node-red-contrib-xxtea
```
or install in it globally with the command
```bash
npm install node-red-contrib-xxtea -g
```

## Nodes included in the package
**xxtea_encrypt** Encrypt a message using XXTEA protocol. The message found in *msg.payload* is encrypted using the password available on *msg.password*, after the process the encrypted test will be available on *msg.payload* and *msg.password* will be removed from the message.

**xxtea_decrypt** Decrypt a message using XXTEA protocol. The message found in *msg.payload* is decrypted using the password available on *msg.password*, after the process the decrypted test will be available on *msg.payload* and *msg.password* will
be removed from the message.

## Usage example


## History
- 0.1.3 - 6 July 2017: Password available on node properties
- 0.1.0 - 30 June 2017: First usable release
- 0.0.1 - 4 June 2017: Initial release

## Authors
* Valerio Vaccaro (https://github.com/valerio-vaccaro)

## Credits
Node-RED has been made possible by the hard work of Nick O'Leary @knolleary and Dave Conway-Jones @ceejay at IBM Emerging Technology. Much thanks to them and other supporters for advancing this platform.
These node use the xxtea library.

This module is developed by Valerio Vaccaro (http://www.valeriovaccaro.it).
