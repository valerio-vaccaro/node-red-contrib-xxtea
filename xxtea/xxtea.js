/**
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

	// Node for encrypt a generic payload
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
			var password = "";
			if ("password" in msg) {
				password = msg.password;
			} else {
				password = n.password;
			};
			const encrypted = xxtea.encrypt(msg.payload, password);
			msg.payload = encrypted;
			delete msg['password'];
			node.status({
				fill: 'green',
				shape: 'dot',
				text: 'Crypted'
			});
			node.send(msg);
		});
	};

	// Node for decrypt a generic payload
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
			var password = "";
			if ("password" in msg) {
				password = msg.password;
			} else {
				password = n.password;
			};
			const decrypted = xxtea.decrypt(msg.payload, password);
			msg.payload = decrypted;
			delete msg['password'];
			node.status({
				fill: 'green',
				shape: 'dot',
				text: 'Decrypted'
			});
			node.send(msg);

		});
	};

	RED.nodes.registerType('xxtea_encrypt', xxtea_encrypt);
	RED.nodes.registerType('xxtea_decrypt', xxtea_decrypt);
};
