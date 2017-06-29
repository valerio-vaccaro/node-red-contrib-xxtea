/**
 * Opentimestamps.js
 *
 *
 * Requires javascript-opentimestamps
 * Copyright 2017 Valerio Vaccaro - www.valeriovaccaro.it
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * */

// import the requirements
const xxtea = require('xxtea');

module.exports = function(RED) {
	// Node for Sign a generic payload
	function xxtea_encrypt(n) {
		RED.nodes.createNode(this, n);
		this.status({
			fill: 'grey',
			shape: 'dot',
			text: 'Waiting'
		});
		const msg = {};
		const node = this;
		this.on('input', function(msg) {
			// To encrypt
			const encrypted = xxtea.encrypt(msg.payload, msg.password);
			msg.payload = encrypted;
			msg.password = null;
			node.send(msg);
			this.status({
				fill: 'grey',
				shape: 'dot',
				text: 'Crypted'
			});
		});
	}
	// Node for Sign a generic payload
	function xxtea_decrypt(n) {
		RED.nodes.createNode(this, n);
		this.status({
			fill: 'grey',
			shape: 'dot',
			text: 'Waiting'
		});
		const msg = {};
		const node = this;
		this.on('input', function(msg) {
			// To decrypt
			const decrypted = xxtea.decrypt(msg.payload, msg.password);
			msg.payload = decrypted;
			msg.password = null;
			node.send(msg);
			this.status({
				fill: 'grey',
				shape: 'dot',
				text: 'Decrypted'
			});
		});
	}

	// Register the node by name. This must be called before overriding any of the
	// Node functions.
	RED.nodes.registerType('xxtea_encrypt', xxtea_encrypt);
	RED.nodes.registerType('xxtea_decrypt', xxtea_decrypt);
};
