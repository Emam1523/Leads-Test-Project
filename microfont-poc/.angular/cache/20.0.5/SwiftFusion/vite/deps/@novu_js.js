import {
  __export
} from "./chunk-ZNC4SKHB.js";

// node_modules/@novu/js/dist/esm/chunk-RZWQYM3H.mjs
function buildContextKey(context) {
  if (!context) {
    return "";
  }
  const keys = [];
  for (const [type, value2] of Object.entries(context)) {
    if (value2) {
      const id = typeof value2 === "string" ? value2 : value2.id;
      keys.push(`${type}:${id}`);
    }
  }
  return keys.sort().join(",");
}
function buildSubscriber({
  subscriberId,
  subscriber
}) {
  if (subscriber) {
    return typeof subscriber === "string" ? { subscriberId: subscriber } : subscriber;
  }
  if (subscriberId) {
    return { subscriberId };
  }
  return { subscriberId: "" };
}

// node_modules/@novu/js/dist/esm/chunk-STZMOEWR.mjs
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value2) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
var __privateSet = (obj, member, value2, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value2) : member.set(obj, value2), value2);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value2) => {
      try {
        step(generator.next(value2));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value2) => {
      try {
        step(generator.throw(value2));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/mitt/dist/mitt.mjs
function mitt_default(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i2 = n.get(t);
    i2 ? i2.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i2 = n.get(t);
    i2 && (e ? i2.splice(i2.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i2 = n.get(t);
    i2 && i2.slice().map(function(n2) {
      n2(e);
    }), (i2 = n.get("*")) && i2.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}

// node_modules/event-target-polyfill/index.js
var root = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
var shouldPolyfillEvent = function() {
  try {
    new root.Event("");
  } catch (error) {
    return true;
  }
  return false;
}();
var shouldPolyfillEventTarget = function() {
  try {
    new root.EventTarget();
  } catch (error) {
    return true;
  }
  return false;
}();
if (shouldPolyfillEvent) {
  root.Event = /* @__PURE__ */ function() {
    function Event2(type, options) {
      this.bubbles = !!options && !!options.bubbles;
      this.cancelable = !!options && !!options.cancelable;
      this.composed = !!options && !!options.composed;
      this.type = type;
    }
    return Event2;
  }();
}
if (shouldPolyfillEventTarget) {
  root.EventTarget = function() {
    function EventTarget2() {
      this.__listeners = /* @__PURE__ */ new Map();
    }
    EventTarget2.prototype = Object.create(Object.prototype);
    EventTarget2.prototype.addEventListener = function(type, listener, options) {
      if (arguments.length < 2) {
        throw new TypeError(
          "TypeError: Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present."
        );
      }
      const __listeners = this.__listeners;
      const actualType = type.toString();
      if (!__listeners.has(actualType)) {
        __listeners.set(actualType, /* @__PURE__ */ new Map());
      }
      const listenersForType = __listeners.get(actualType);
      if (!listenersForType.has(listener)) {
        listenersForType.set(listener, options);
      }
    };
    EventTarget2.prototype.removeEventListener = function(type, listener, _options2) {
      if (arguments.length < 2) {
        throw new TypeError(
          "TypeError: Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present."
        );
      }
      const __listeners = this.__listeners;
      const actualType = type.toString();
      if (__listeners.has(actualType)) {
        const listenersForType = __listeners.get(actualType);
        if (listenersForType.has(listener)) {
          listenersForType.delete(listener);
        }
      }
    };
    EventTarget2.prototype.dispatchEvent = function(event) {
      if (!(event instanceof Event)) {
        throw new TypeError(
          "Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1 is not of type 'Event'."
        );
      }
      const type = event.type;
      const __listeners = this.__listeners;
      const listenersForType = __listeners.get(type);
      if (listenersForType) {
        for (var listnerEntry of listenersForType.entries()) {
          const listener = listnerEntry[0];
          const options = listnerEntry[1];
          try {
            if (typeof listener === "function") {
              listener.call(this, event);
            } else if (listener && typeof listener.handleEvent === "function") {
              listener.handleEvent(event);
            }
          } catch (err) {
            setTimeout(() => {
              throw err;
            });
          }
          if (options && options.once) {
            listenersForType.delete(listener);
          }
        }
      }
      return true;
    };
    return EventTarget2;
  }();
}

// node_modules/partysocket/dist/chunk-V6LO7DXK.mjs
if (!globalThis.EventTarget || !globalThis.Event) {
  console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
}
var ErrorEvent = class extends Event {
  message;
  error;
  // biome-ignore lint/suspicious/noExplicitAny: vibes
  constructor(error, target) {
    super("error", target);
    this.message = error.message;
    this.error = error;
  }
};
var CloseEvent = class extends Event {
  code;
  reason;
  wasClean = true;
  // biome-ignore lint/suspicious/noExplicitAny: legacy
  constructor(code = 1e3, reason = "", target) {
    super("close", target);
    this.code = code;
    this.reason = reason;
  }
};
var Events = {
  Event,
  ErrorEvent,
  CloseEvent
};
function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg);
  }
}
function cloneEventBrowser(e) {
  return new e.constructor(e.type, e);
}
function cloneEventNode(e) {
  if ("data" in e) {
    const evt2 = new MessageEvent(e.type, e);
    return evt2;
  }
  if ("code" in e || "reason" in e) {
    const evt2 = new CloseEvent(
      // @ts-expect-error we need to fix event/listener types
      e.code || 1999,
      // @ts-expect-error we need to fix event/listener types
      e.reason || "unknown reason",
      e
    );
    return evt2;
  }
  if ("error" in e) {
    const evt2 = new ErrorEvent(e.error, e);
    return evt2;
  }
  const evt = new Event(e.type, e);
  return evt;
}
var _a;
var isNode = typeof process !== "undefined" && typeof ((_a = process.versions) == null ? void 0 : _a.node) !== "undefined" && typeof document === "undefined";
var cloneEvent = isNode ? cloneEventNode : cloneEventBrowser;
var DEFAULT = {
  maxReconnectionDelay: 1e4,
  minReconnectionDelay: 1e3 + Math.random() * 4e3,
  minUptime: 5e3,
  reconnectionDelayGrowFactor: 1.3,
  connectionTimeout: 4e3,
  maxRetries: Number.POSITIVE_INFINITY,
  maxEnqueuedMessages: Number.POSITIVE_INFINITY,
  startClosed: false,
  debug: false
};
var didWarnAboutMissingWebSocket = false;
var ReconnectingWebSocket = class _ReconnectingWebSocket extends EventTarget {
  _ws;
  _retryCount = -1;
  _uptimeTimeout;
  _connectTimeout;
  _shouldReconnect = true;
  _connectLock = false;
  _binaryType = "blob";
  _closeCalled = false;
  _messageQueue = [];
  _debugLogger = console.log.bind(console);
  _url;
  _protocols;
  _options;
  constructor(url2, protocols, options = {}) {
    super();
    this._url = url2;
    this._protocols = protocols;
    this._options = options;
    if (this._options.startClosed) {
      this._shouldReconnect = false;
    }
    if (this._options.debugLogger) {
      this._debugLogger = this._options.debugLogger;
    }
    this._connect();
  }
  static get CONNECTING() {
    return 0;
  }
  static get OPEN() {
    return 1;
  }
  static get CLOSING() {
    return 2;
  }
  static get CLOSED() {
    return 3;
  }
  get CONNECTING() {
    return _ReconnectingWebSocket.CONNECTING;
  }
  get OPEN() {
    return _ReconnectingWebSocket.OPEN;
  }
  get CLOSING() {
    return _ReconnectingWebSocket.CLOSING;
  }
  get CLOSED() {
    return _ReconnectingWebSocket.CLOSED;
  }
  get binaryType() {
    return this._ws ? this._ws.binaryType : this._binaryType;
  }
  set binaryType(value2) {
    this._binaryType = value2;
    if (this._ws) {
      this._ws.binaryType = value2;
    }
  }
  /**
   * Returns the number or connection retries
   */
  get retryCount() {
    return Math.max(this._retryCount, 0);
  }
  /**
   * The number of bytes of data that have been queued using calls to send() but not yet
   * transmitted to the network. This value resets to zero once all queued data has been sent.
   * This value does not reset to zero when the connection is closed; if you keep calling send(),
   * this will continue to climb. Read only
   */
  get bufferedAmount() {
    const bytes = this._messageQueue.reduce((acc, message) => {
      if (typeof message === "string") {
        acc += message.length;
      } else if (message instanceof Blob) {
        acc += message.size;
      } else {
        acc += message.byteLength;
      }
      return acc;
    }, 0);
    return bytes + (this._ws ? this._ws.bufferedAmount : 0);
  }
  /**
   * The extensions selected by the server. This is currently only the empty string or a list of
   * extensions as negotiated by the connection
   */
  get extensions() {
    return this._ws ? this._ws.extensions : "";
  }
  /**
   * A string indicating the name of the sub-protocol the server selected;
   * this will be one of the strings specified in the protocols parameter when creating the
   * WebSocket object
   */
  get protocol() {
    return this._ws ? this._ws.protocol : "";
  }
  /**
   * The current state of the connection; this is one of the Ready state constants
   */
  get readyState() {
    if (this._ws) {
      return this._ws.readyState;
    }
    return this._options.startClosed ? _ReconnectingWebSocket.CLOSED : _ReconnectingWebSocket.CONNECTING;
  }
  /**
   * The URL as resolved by the constructor
   */
  get url() {
    return this._ws ? this._ws.url : "";
  }
  /**
   * Whether the websocket object is now in reconnectable state
   */
  get shouldReconnect() {
    return this._shouldReconnect;
  }
  /**
   * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
   */
  onclose = null;
  /**
   * An event listener to be called when an error occurs
   */
  onerror = null;
  /**
   * An event listener to be called when a message is received from the server
   */
  onmessage = null;
  /**
   * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
   * this indicates that the connection is ready to send and receive data
   */
  onopen = null;
  /**
   * Closes the WebSocket connection or connection attempt, if any. If the connection is already
   * CLOSED, this method does nothing
   */
  close(code = 1e3, reason) {
    this._closeCalled = true;
    this._shouldReconnect = false;
    this._clearTimeouts();
    if (!this._ws) {
      this._debug("close enqueued: no ws instance");
      return;
    }
    if (this._ws.readyState === this.CLOSED) {
      this._debug("close: already closed");
      return;
    }
    this._ws.close(code, reason);
  }
  /**
   * Closes the WebSocket connection or connection attempt and connects again.
   * Resets retry counter;
   */
  reconnect(code, reason) {
    this._shouldReconnect = true;
    this._closeCalled = false;
    this._retryCount = -1;
    if (!this._ws || this._ws.readyState === this.CLOSED) {
      this._connect();
    } else {
      this._disconnect(code, reason);
      this._connect();
    }
  }
  /**
   * Enqueue specified data to be transmitted to the server over the WebSocket connection
   */
  send(data) {
    if (this._ws && this._ws.readyState === this.OPEN) {
      this._debug("send", data);
      this._ws.send(data);
    } else {
      const { maxEnqueuedMessages = DEFAULT.maxEnqueuedMessages } = this._options;
      if (this._messageQueue.length < maxEnqueuedMessages) {
        this._debug("enqueue", data);
        this._messageQueue.push(data);
      }
    }
  }
  _debug(...args) {
    if (this._options.debug) {
      this._debugLogger("RWS>", ...args);
    }
  }
  _getNextDelay() {
    const {
      reconnectionDelayGrowFactor = DEFAULT.reconnectionDelayGrowFactor,
      minReconnectionDelay = DEFAULT.minReconnectionDelay,
      maxReconnectionDelay = DEFAULT.maxReconnectionDelay
    } = this._options;
    let delay = 0;
    if (this._retryCount > 0) {
      delay = minReconnectionDelay * reconnectionDelayGrowFactor ** (this._retryCount - 1);
      if (delay > maxReconnectionDelay) {
        delay = maxReconnectionDelay;
      }
    }
    this._debug("next delay", delay);
    return delay;
  }
  _wait() {
    return new Promise((resolve) => {
      setTimeout(resolve, this._getNextDelay());
    });
  }
  _getNextProtocols(protocolsProvider) {
    if (!protocolsProvider) return Promise.resolve(null);
    if (typeof protocolsProvider === "string" || Array.isArray(protocolsProvider)) {
      return Promise.resolve(protocolsProvider);
    }
    if (typeof protocolsProvider === "function") {
      const protocols = protocolsProvider();
      if (!protocols) return Promise.resolve(null);
      if (typeof protocols === "string" || Array.isArray(protocols)) {
        return Promise.resolve(protocols);
      }
      if (protocols.then) {
        return protocols;
      }
    }
    throw Error("Invalid protocols");
  }
  _getNextUrl(urlProvider) {
    if (typeof urlProvider === "string") {
      return Promise.resolve(urlProvider);
    }
    if (typeof urlProvider === "function") {
      const url2 = urlProvider();
      if (typeof url2 === "string") {
        return Promise.resolve(url2);
      }
      if (url2.then) {
        return url2;
      }
    }
    throw Error("Invalid URL");
  }
  _connect() {
    if (this._connectLock || !this._shouldReconnect) {
      return;
    }
    this._connectLock = true;
    const {
      maxRetries = DEFAULT.maxRetries,
      connectionTimeout = DEFAULT.connectionTimeout
    } = this._options;
    if (this._retryCount >= maxRetries) {
      this._debug("max retries reached", this._retryCount, ">=", maxRetries);
      return;
    }
    this._retryCount++;
    this._debug("connect", this._retryCount);
    this._removeListeners();
    this._wait().then(
      () => Promise.all([
        this._getNextUrl(this._url),
        this._getNextProtocols(this._protocols || null)
      ])
    ).then(([url2, protocols]) => {
      if (this._closeCalled) {
        this._connectLock = false;
        return;
      }
      if (!this._options.WebSocket && typeof WebSocket === "undefined" && !didWarnAboutMissingWebSocket) {
        console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`);
        didWarnAboutMissingWebSocket = true;
      }
      const WS2 = this._options.WebSocket || WebSocket;
      this._debug("connect", { url: url2, protocols });
      this._ws = protocols ? new WS2(url2, protocols) : new WS2(url2);
      this._ws.binaryType = this._binaryType;
      this._connectLock = false;
      this._addListeners();
      this._connectTimeout = setTimeout(
        () => this._handleTimeout(),
        connectionTimeout
      );
    }).catch((err) => {
      this._connectLock = false;
      this._handleError(new Events.ErrorEvent(Error(err.message), this));
    });
  }
  _handleTimeout() {
    this._debug("timeout event");
    this._handleError(new Events.ErrorEvent(Error("TIMEOUT"), this));
  }
  _disconnect(code = 1e3, reason) {
    this._clearTimeouts();
    if (!this._ws) {
      return;
    }
    this._removeListeners();
    try {
      if (this._ws.readyState === this.OPEN || this._ws.readyState === this.CONNECTING) {
        this._ws.close(code, reason);
      }
      this._handleClose(new Events.CloseEvent(code, reason, this));
    } catch (_error) {
    }
  }
  _acceptOpen() {
    this._debug("accept open");
    this._retryCount = 0;
  }
  _handleOpen = (event) => {
    this._debug("open event");
    const { minUptime = DEFAULT.minUptime } = this._options;
    clearTimeout(this._connectTimeout);
    this._uptimeTimeout = setTimeout(() => this._acceptOpen(), minUptime);
    assert(this._ws, "WebSocket is not defined");
    this._ws.binaryType = this._binaryType;
    this._messageQueue.forEach((message) => {
      var _a2;
      (_a2 = this._ws) == null ? void 0 : _a2.send(message);
    });
    this._messageQueue = [];
    if (this.onopen) {
      this.onopen(event);
    }
    this.dispatchEvent(cloneEvent(event));
  };
  _handleMessage = (event) => {
    this._debug("message event");
    if (this.onmessage) {
      this.onmessage(event);
    }
    this.dispatchEvent(cloneEvent(event));
  };
  _handleError = (event) => {
    this._debug("error event", event.message);
    this._disconnect(void 0, event.message === "TIMEOUT" ? "timeout" : void 0);
    if (this.onerror) {
      this.onerror(event);
    }
    this._debug("exec error listeners");
    this.dispatchEvent(cloneEvent(event));
    this._connect();
  };
  _handleClose = (event) => {
    this._debug("close event");
    this._clearTimeouts();
    if (this._shouldReconnect) {
      this._connect();
    }
    if (this.onclose) {
      this.onclose(event);
    }
    this.dispatchEvent(cloneEvent(event));
  };
  _removeListeners() {
    if (!this._ws) {
      return;
    }
    this._debug("removeListeners");
    this._ws.removeEventListener("open", this._handleOpen);
    this._ws.removeEventListener("close", this._handleClose);
    this._ws.removeEventListener("message", this._handleMessage);
    this._ws.removeEventListener("error", this._handleError);
  }
  _addListeners() {
    if (!this._ws) {
      return;
    }
    this._debug("addListeners");
    this._ws.addEventListener("open", this._handleOpen);
    this._ws.addEventListener("close", this._handleClose);
    this._ws.addEventListener("message", this._handleMessage);
    this._ws.addEventListener("error", this._handleError);
  }
  _clearTimeouts() {
    clearTimeout(this._connectTimeout);
    clearTimeout(this._uptimeTimeout);
  }
};

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = { type: "error", data: "parser error" };

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({ type, data }, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
function toArray(data) {
  if (data instanceof Uint8Array) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
var TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray).then(callback);
  } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
    return callback(toArray(packet.data));
  }
  encodePacket(packet, false, (encoded) => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i2 = 0; i2 < chars.length; i2++) {
  lookup[chars.charCodeAt(i2)] = i2;
}
var decode = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i2 = 0; i2 < len; i2 += 4) {
    encoded1 = lookup[base64.charCodeAt(i2)];
    encoded2 = lookup[base64.charCodeAt(i2 + 1)];
    encoded3 = lookup[base64.charCodeAt(i2 + 2)];
    encoded4 = lookup[base64.charCodeAt(i2 + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      if (data instanceof Blob) {
        return data;
      } else {
        return new Blob([data]);
      }
    case "arraybuffer":
    default:
      if (data instanceof ArrayBuffer) {
        return data;
      } else {
        return data.buffer;
      }
  }
};

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length2 = packets.length;
  const encodedPackets = new Array(length2);
  let count = 0;
  packets.forEach((packet, i2) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i2] = encodedPacket;
      if (++count === length2) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i2 = 0; i2 < encodedPackets.length; i2++) {
    const decodedPacket = decodePacket(encodedPackets[i2], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform(packet, controller) {
      encodePacketToBinary(packet, (encodedPacket) => {
        const payloadLength = encodedPacket.length;
        let header;
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          const view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          const view = new DataView(header.buffer);
          view.setUint8(0, 127);
          view.setBigUint64(1, BigInt(payloadLength));
        }
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 128;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
var TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
  if (chunks[0].length === size) {
    return chunks.shift();
  }
  const buffer = new Uint8Array(size);
  let j = 0;
  for (let i2 = 0; i2 < size; i2++) {
    buffer[i2] = chunks[0][j++];
    if (j === chunks[0].length) {
      chunks.shift();
      j = 0;
    }
  }
  if (chunks.length && j < chunks[0].length) {
    chunks[0] = chunks[0].slice(j);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const chunks = [];
  let state = 0;
  let expectedLength = -1;
  let isBinary2 = false;
  return new TransformStream({
    transform(chunk, controller) {
      chunks.push(chunk);
      while (true) {
        if (state === 0) {
          if (totalLength(chunks) < 1) {
            break;
          }
          const header = concatChunks(chunks, 1);
          isBinary2 = (header[0] & 128) === 128;
          expectedLength = header[0] & 127;
          if (expectedLength < 126) {
            state = 3;
          } else if (expectedLength === 126) {
            state = 1;
          } else {
            state = 2;
          }
        } else if (state === 1) {
          if (totalLength(chunks) < 2) {
            break;
          }
          const headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3;
        } else if (state === 2) {
          if (totalLength(chunks) < 8) {
            break;
          }
          const headerArray = concatChunks(chunks, 8);
          const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
          const n = view.getUint32(0);
          if (n > Math.pow(2, 53 - 32) - 1) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
          state = 3;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          const data = concatChunks(chunks, expectedLength);
          controller.enqueue(decodePacket(isBinary2 ? data : TEXT_DECODER.decode(data), binaryType));
          state = 0;
        }
        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(ERROR_PACKET);
          break;
        }
      }
    }
  });
}
var protocol = 4;

// node_modules/@socket.io/component-emitter/lib/esm/index.js
function Emitter(obj) {
  if (obj) return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function(event, fn) {
  function on2() {
    this.off(event, on2);
    fn.apply(this, arguments);
  }
  on2.fn = fn;
  this.on(event, on2);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks) return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i2 = 0; i2 < callbacks.length; i2++) {
    cb = callbacks[i2];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i2, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i2 = 1; i2 < arguments.length; i2++) {
    args[i2 - 1] = arguments[i2];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
      callbacks[i2].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};

// node_modules/engine.io-client/build/esm/globalThis.browser.js
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0, length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode2(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/transport.js
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   */
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  /**
   * Closes the transport.
   */
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {
    }
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(data) {
    const packet = decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(onPause) {
  }
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
};

// node_modules/engine.io-client/build/esm/contrib/yeast.js
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
var length = 64;
var map = {};
var seed = 0;
var i = 0;
var prev;
function encode2(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function yeast() {
  const now = encode2(+/* @__PURE__ */ new Date());
  if (now !== prev)
    return seed = 0, prev = now;
  return now + "." + encode2(seed++);
}
for (; i < length; i++)
  map[alphabet[i]] = i;

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
}
function createCookieJar() {
}

// node_modules/engine.io-client/build/esm/transports/polling.js
function empty() {
}
var hasXHR2 = function() {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
var Polling = class extends Transport {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
    if (this.opts.withCredentials) {
      this.cookieJar = createCookieJar();
    }
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(data) {
    const callback = (packet) => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      } else {
      }
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const close = () => {
      this.write([{ type: "close" }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd, cookieJar: this.cookieJar }, this.opts);
    return new Request(this.uri(), opts);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class _Request extends Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var _a2;
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, true);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {
      }
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {
      }
      (_a2 = this.opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a3;
        if (xhr.readyState === 3) {
          (_a3 = this.opts.cookieJar) === null || _a3 === void 0 ? void 0 : _a3.parseCookies(xhr);
        }
        if (4 !== xhr.readyState)
          return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = _Request.requestsCount++;
      _Request.requests[this.index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {
      }
    }
    if (typeof document !== "undefined") {
      delete _Request.requests[this.index];
    }
    this.xhr = null;
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb) => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var WebSocket2 = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";

// node_modules/engine.io-client/build/esm/transports/websocket.js
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket2(uri, protocols) : new WebSocket2(uri) : new WebSocket2(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data) => {
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len = (
              // @ts-ignore
              "string" === typeof data ? Buffer.byteLength(data) : data.length
            );
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!WebSocket2;
  }
};

// node_modules/engine.io-client/build/esm/transports/webtransport.js
var WT = class extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    if (typeof WebTransport !== "function") {
      return;
    }
    this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    this.transport.closed.then(() => {
      this.onClose();
    }).catch((err) => {
      this.onError("webtransport error", err);
    });
    this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then((stream) => {
        const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = createPacketEncoderStream();
        encoderStream.readable.pipeTo(stream.writable);
        this.writer = encoderStream.writable.getWriter();
        const read2 = () => {
          reader.read().then(({ done, value: value2 }) => {
            if (done) {
              return;
            }
            this.onPacket(value2);
            read2();
          }).catch((err) => {
          });
        };
        read2();
        const packet = { type: "open" };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this.writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      this.writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a2;
    (_a2 = this.transport) === null || _a2 === void 0 ? void 0 : _a2.close();
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  webtransport: WT,
  polling: Polling
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse(str) {
  if (str.length > 2e3) {
    throw "URI too long";
  }
  const src = str, b = str.indexOf("["), e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""), uri = {}, i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var Socket = class _Socket extends Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(uri, opts = {}) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query)
        opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || [
      "polling",
      "websocket",
      "webtransport"
    ];
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode2(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new transports[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let transport;
    if (this.opts.rememberUpgrade && _Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason) => this.onClose("transport close", reason));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    _Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          _Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this.upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open";
    _Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      this.resetPingTimeout();
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {
    }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(err) {
    _Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2]))
        filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = protocol;

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;

// node_modules/socket.io-client/build/esm/url.js
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = parse(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-parser/build/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol3
});

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer3 = typeof ArrayBuffer === "function";
var isView2 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob2 = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer3 && (obj instanceof ArrayBuffer || isView2(obj)) || withNativeBlob2 && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i2 = 0, l = obj.length; i2 < l; i2++) {
      if (hasBinary(obj[i2])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i2 = 0; i2 < data.length; i2++) {
      newData[i2] = _deconstructPacket(data[i2], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i2 = 0; i2 < data.length; i2++) {
      data[i2] = _reconstructPacket(data[i2], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var RESERVED_EVENTS = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
];
var protocol3 = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
function isObject(value2) {
  return Object.prototype.toString.call(value2) === "[object Object]";
}
var Decoder = class _Decoder extends Emitter {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(str) {
    let i2 = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i2 + 1;
      while (str.charAt(++i2) !== "-" && i2 != str.length) {
      }
      const buf = str.substring(start, i2);
      if (buf != Number(buf) || str.charAt(i2) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i2 + 1)) {
      const start = i2 + 1;
      while (++i2) {
        const c = str.charAt(i2);
        if ("," === c)
          break;
        if (i2 === str.length)
          break;
      }
      p.nsp = str.substring(start, i2);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i2 + 1);
    if ("" !== next && Number(next) == next) {
      const start = i2 + 1;
      while (++i2) {
        const c = str.charAt(i2);
        if (null == c || Number(c) != c) {
          --i2;
          break;
        }
        if (i2 === str.length)
          break;
      }
      p.id = Number(str.substring(start, i2 + 1));
    }
    if (str.charAt(++i2)) {
      const payload = this.tryParse(str.substr(i2));
      if (_Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var RESERVED_EVENTS2 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
var Socket2 = class extends Emitter {
  /**
   * `Socket` constructor.
   */
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect)
      this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if ("open" === this.io._readyState)
      this.onopen();
    return this;
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(ev, ...args) {
    if (RESERVED_EVENTS2.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket) {
    } else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  /**
   * @private
   */
  _registerAckCallback(id, ack) {
    var _a2;
    const timeout = (_a2 = this.flags.timeout) !== null && _a2 !== void 0 ? _a2 : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
        if (this.sendBuffer[i2].id === id) {
          this.sendBuffer.splice(i2, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(ev, ...args) {
    const withErr = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((resolve, reject) => {
      args.push((arg1, arg2) => {
        if (withErr) {
          return arg1 ? reject(arg1) : resolve(arg2);
        } else {
          return resolve(arg1);
        }
      });
      this.emit(ev, ...args);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({ fromQueue: true }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(data) {
    this.packet({
      type: PacketType.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(id) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {
    }
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    if (this.connected) {
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min) {
  this.ms = min;
};
Backoff.prototype.setMax = function(max) {
  this.max = max;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var Manager = class extends Emitter {
  constructor(uri, opts) {
    var _a2;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a2 = opts.randomizationFactor) !== null && _a2 !== void 0 ? _a2 : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || esm_exports;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a2;
    if (v === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a2;
    if (v === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a2;
    if (v === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a2 = this.backoff) === null || _a2 === void 0 ? void 0 : _a2.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(fn) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket(this.uri, this.opts);
    const socket = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self2.onopen();
      fn && fn();
    });
    const onError = (err) => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(fn) {
    return this.open(fn);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(packet) {
    nextTick(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(err) {
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i2 = 0; i2 < encodedPackets.length; i2++) {
      this.engine.write(encodedPackets[i2], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine)
      this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err) => {
          if (err) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self2.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var cache = {};
function lookup2(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup2, {
  Manager,
  Socket: Socket2,
  io: lookup2,
  connect: lookup2
});

// node_modules/@novu/js/dist/esm/chunk-UM35OVAD.mjs
var NotificationStatus = ((NotificationStatus2) => {
  NotificationStatus2["READ"] = "read";
  NotificationStatus2["SEEN"] = "seen";
  NotificationStatus2["SNOOZED"] = "snoozed";
  NotificationStatus2["UNREAD"] = "unread";
  NotificationStatus2["UNSEEN"] = "unseen";
  NotificationStatus2["UNSNOOZED"] = "unsnoozed";
  return NotificationStatus2;
})(NotificationStatus || {});
var PreferenceLevel = ((PreferenceLevel2) => {
  PreferenceLevel2["GLOBAL"] = "global";
  PreferenceLevel2["TEMPLATE"] = "template";
  return PreferenceLevel2;
})(PreferenceLevel || {});
var ChannelType = ((ChannelType2) => {
  ChannelType2["IN_APP"] = "in_app";
  ChannelType2["EMAIL"] = "email";
  ChannelType2["SMS"] = "sms";
  ChannelType2["CHAT"] = "chat";
  ChannelType2["PUSH"] = "push";
  return ChannelType2;
})(ChannelType || {});
var WebSocketEvent = ((WebSocketEvent2) => {
  WebSocketEvent2["RECEIVED"] = "notification_received";
  WebSocketEvent2["UNREAD"] = "unread_count_changed";
  WebSocketEvent2["UNSEEN"] = "unseen_count_changed";
  return WebSocketEvent2;
})(WebSocketEvent || {});
var SeverityLevelEnum = ((SeverityLevelEnum2) => {
  SeverityLevelEnum2["HIGH"] = "high";
  SeverityLevelEnum2["MEDIUM"] = "medium";
  SeverityLevelEnum2["LOW"] = "low";
  SeverityLevelEnum2["NONE"] = "none";
  return SeverityLevelEnum2;
})(SeverityLevelEnum || {});
var WorkflowCriticalityEnum = ((WorkflowCriticalityEnum2) => {
  WorkflowCriticalityEnum2["CRITICAL"] = "critical";
  WorkflowCriticalityEnum2["NON_CRITICAL"] = "nonCritical";
  WorkflowCriticalityEnum2["ALL"] = "all";
  return WorkflowCriticalityEnum2;
})(WorkflowCriticalityEnum || {});
var arrayValuesEqual = (arr1, arr2) => {
  if (arr1 === arr2) {
    return true;
  }
  if (!arr1 || !arr2) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value2, index) => value2 === arr2[index]);
};
var areTagsEqual = (tags1, tags2) => {
  return arrayValuesEqual(tags1, tags2) || !tags1 && (tags2 == null ? void 0 : tags2.length) === 0 || (tags1 == null ? void 0 : tags1.length) === 0 && !tags2;
};
var areSeveritiesEqual = (el1, el2) => {
  const severity1 = Array.isArray(el1) ? el1 : el1 ? [el1] : [];
  const severity2 = Array.isArray(el2) ? el2 : el2 ? [el2] : [];
  return arrayValuesEqual(severity1, severity2);
};
var areDataEqual = (data1, data2) => {
  if (!data1 && !data2) {
    return true;
  }
  if (!data1 || !data2) {
    return false;
  }
  try {
    return JSON.stringify(data1) === JSON.stringify(data2);
  } catch (e) {
    return false;
  }
};
var isSameFilter = (filter1, filter2) => {
  return areDataEqual(filter1.data, filter2.data) && areTagsEqual(filter1.tags, filter2.tags) && filter1.read === filter2.read && filter1.archived === filter2.archived && filter1.snoozed === filter2.snoozed && filter1.seen === filter2.seen && areSeveritiesEqual(filter1.severity, filter2.severity);
};
function checkNotificationDataFilter(notificationData, filterData) {
  if (!filterData || Object.keys(filterData).length === 0) {
    return true;
  }
  if (!notificationData) {
    return false;
  }
  return Object.entries(filterData).every(([key, filterValue]) => {
    const notifValue = notificationData[key];
    if (notifValue === void 0 && filterValue !== void 0) {
      return false;
    }
    if (Array.isArray(filterValue)) {
      if (Array.isArray(notifValue)) {
        if (filterValue.length !== notifValue.length) return false;
        const sortedFilterValue = [...filterValue].sort();
        const sortedNotifValue = [...notifValue].sort();
        return sortedFilterValue.every((val, index) => val === sortedNotifValue[index]);
      } else {
        return filterValue.includes(notifValue);
      }
    } else {
      return notifValue === filterValue;
    }
  });
}
function checkNotificationTagFilter(notificationTags, filterTags) {
  if (!filterTags || filterTags.length === 0) {
    return true;
  }
  if (!notificationTags || notificationTags.length === 0) {
    return false;
  }
  return filterTags.some((tag) => notificationTags.includes(tag));
}
function checkBasicFilters(notification, filter) {
  if (filter.read !== void 0 && notification.isRead !== filter.read) {
    return false;
  }
  if (filter.seen !== void 0 && notification.isSeen !== filter.seen) {
    return false;
  }
  if (filter.archived !== void 0 && notification.isArchived !== filter.archived) {
    return false;
  }
  if (filter.snoozed !== void 0 && notification.isSnoozed !== filter.snoozed) {
    return false;
  }
  return true;
}
function checkNotificationMatchesFilter(notification, filter) {
  return checkBasicFilters(notification, filter) && checkNotificationTagFilter(notification.tags, filter.tags) && checkNotificationDataFilter(notification.data, filter.data);
}
var DEFAULT_API_VERSION = "v1";
var DEFAULT_USER_AGENT = `${"@novu/js"}@${"3.11.0"}`;
var HttpClient = class {
  constructor(options = {}) {
    this.DEFAULT_BACKEND_URL = typeof window !== "undefined" && window.NOVU_LOCAL_BACKEND_URL || "https://api.novu.co";
    const {
      apiVersion = DEFAULT_API_VERSION,
      apiUrl = this.DEFAULT_BACKEND_URL,
      userAgent = DEFAULT_USER_AGENT,
      headers = {}
    } = options || {};
    this.apiVersion = apiVersion;
    this.apiUrl = `${apiUrl}/${apiVersion}`;
    this.headers = __spreadValues({
      "Novu-API-Version": "2024-06-26",
      "Content-Type": "application/json",
      "User-Agent": userAgent
    }, headers);
  }
  setAuthorizationToken(token) {
    this.headers.Authorization = `Bearer ${token}`;
  }
  setKeylessHeader(identifier) {
    var _a2;
    const keylessAppIdentifier = identifier || typeof window !== "undefined" && ((_a2 = window.localStorage) == null ? void 0 : _a2.getItem("novu_keyless_application_identifier"));
    if (!keylessAppIdentifier || !keylessAppIdentifier.startsWith("pk_keyless_")) {
      return;
    }
    this.headers["Novu-Application-Identifier"] = keylessAppIdentifier;
  }
  setHeaders(headers) {
    this.headers = __spreadValues(__spreadValues({}, this.headers), headers);
  }
  get(path, searchParams, unwrapEnvelope = true) {
    return __async(this, null, function* () {
      return this.doFetch({
        path,
        searchParams,
        options: {
          method: "GET"
        },
        unwrapEnvelope
      });
    });
  }
  post(path, body, options) {
    return __async(this, null, function* () {
      return this.doFetch({
        path,
        options: {
          method: "POST",
          body,
          headers: options == null ? void 0 : options.headers
        }
      });
    });
  }
  patch(path, body) {
    return __async(this, null, function* () {
      return this.doFetch({
        path,
        options: {
          method: "PATCH",
          body
        }
      });
    });
  }
  delete(path, body) {
    return __async(this, null, function* () {
      return this.doFetch({
        path,
        options: {
          method: "DELETE",
          body
        }
      });
    });
  }
  doFetch(_0) {
    return __async(this, arguments, function* ({
      path,
      searchParams,
      options,
      unwrapEnvelope = true
    }) {
      const fullUrl = combineUrl(this.apiUrl, path, searchParams ? `?${searchParams.toString()}` : "");
      const reqInit = {
        method: (options == null ? void 0 : options.method) || "GET",
        headers: __spreadValues(__spreadValues({}, this.headers), (options == null ? void 0 : options.headers) || {}),
        body: (options == null ? void 0 : options.body) ? JSON.stringify(options.body) : void 0
      };
      const response = yield fetch(fullUrl, reqInit);
      if (!response.ok) {
        const errorData = yield response.json();
        throw new Error(`${this.headers["User-Agent"]} error. Status: ${response.status}, Message: ${errorData.message}`);
      }
      if (response.status === 204) {
        return void 0;
      }
      const res = yield response.json();
      return unwrapEnvelope ? res.data : res;
    });
  }
};
function combineUrl(...args) {
  return args.reduce((acc, part) => {
    if (part) {
      acc.push(part.replace(new RegExp("(?<!https?:)\\/+", "g"), "/").replace(/^\/+|\/+$/g, ""));
    }
    return acc;
  }, []).join("/").replace(/\/\?/, "?");
}
var INBOX_ROUTE = "/inbox";
var INBOX_NOTIFICATIONS_ROUTE = `${INBOX_ROUTE}/notifications`;
var _httpClient;
var InboxService = class {
  constructor(options = {}) {
    this.isSessionInitialized = false;
    __privateAdd(this, _httpClient);
    __privateSet(this, _httpClient, new HttpClient(options));
  }
  initializeSession(_0) {
    return __async(this, arguments, function* ({
      applicationIdentifier,
      subscriberHash,
      contextHash,
      subscriber,
      defaultSchedule,
      context
    }) {
      const response = yield __privateGet(this, _httpClient).post(`${INBOX_ROUTE}/session`, {
        applicationIdentifier,
        subscriberHash,
        contextHash,
        subscriber,
        defaultSchedule,
        context
      });
      __privateGet(this, _httpClient).setAuthorizationToken(response.token);
      __privateGet(this, _httpClient).setKeylessHeader(response.applicationIdentifier);
      this.isSessionInitialized = true;
      return response;
    });
  }
  fetchNotifications({
    after,
    archived,
    limit = 10,
    offset,
    read: read2,
    tags,
    snoozed,
    seen: seen2,
    data,
    severity
  }) {
    const searchParams = new URLSearchParams(`limit=${limit}`);
    if (after) {
      searchParams.append("after", after);
    }
    if (offset) {
      searchParams.append("offset", `${offset}`);
    }
    if (tags) {
      for (const tag of tags) {
        searchParams.append("tags[]", tag);
      }
    }
    if (read2 !== void 0) {
      searchParams.append("read", `${read2}`);
    }
    if (archived !== void 0) {
      searchParams.append("archived", `${archived}`);
    }
    if (snoozed !== void 0) {
      searchParams.append("snoozed", `${snoozed}`);
    }
    if (seen2 !== void 0) {
      searchParams.append("seen", `${seen2}`);
    }
    if (data !== void 0) {
      searchParams.append("data", JSON.stringify(data));
    }
    if (severity && Array.isArray(severity)) {
      for (const el of severity) {
        searchParams.append("severity[]", el);
      }
    } else if (severity) {
      searchParams.append("severity", severity);
    }
    return __privateGet(this, _httpClient).get(INBOX_NOTIFICATIONS_ROUTE, searchParams, false);
  }
  count({
    filters
  }) {
    return __privateGet(this, _httpClient).get(
      `${INBOX_NOTIFICATIONS_ROUTE}/count`,
      new URLSearchParams({
        filters: JSON.stringify(filters)
      }),
      false
    );
  }
  read(notificationId) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/read`);
  }
  unread(notificationId) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/unread`);
  }
  archive(notificationId) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/archive`);
  }
  unarchive(notificationId) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/unarchive`);
  }
  snooze(notificationId, snoozeUntil) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/snooze`, { snoozeUntil });
  }
  unsnooze(notificationId) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/unsnooze`);
  }
  readAll({ tags, data }) {
    return __privateGet(this, _httpClient).post(`${INBOX_NOTIFICATIONS_ROUTE}/read`, {
      tags,
      data: data ? JSON.stringify(data) : void 0
    });
  }
  archiveAll({ tags, data }) {
    return __privateGet(this, _httpClient).post(`${INBOX_NOTIFICATIONS_ROUTE}/archive`, {
      tags,
      data: data ? JSON.stringify(data) : void 0
    });
  }
  archiveAllRead({ tags, data }) {
    return __privateGet(this, _httpClient).post(`${INBOX_NOTIFICATIONS_ROUTE}/read-archive`, {
      tags,
      data: data ? JSON.stringify(data) : void 0
    });
  }
  delete(notificationId) {
    return __privateGet(this, _httpClient).delete(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/delete`);
  }
  deleteAll({ tags, data }) {
    return __privateGet(this, _httpClient).post(`${INBOX_NOTIFICATIONS_ROUTE}/delete`, {
      tags,
      data: data ? JSON.stringify(data) : void 0
    });
  }
  markAsSeen({
    notificationIds,
    tags,
    data
  }) {
    return __privateGet(this, _httpClient).post(`${INBOX_NOTIFICATIONS_ROUTE}/seen`, {
      notificationIds,
      tags,
      data: data ? JSON.stringify(data) : void 0
    });
  }
  seen(notificationId) {
    return this.markAsSeen({ notificationIds: [notificationId] });
  }
  completeAction({
    actionType,
    notificationId
  }) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/complete`, {
      actionType
    });
  }
  revertAction({
    actionType,
    notificationId
  }) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/revert`, {
      actionType
    });
  }
  fetchPreferences({
    tags,
    severity,
    criticality
  }) {
    const queryParams = new URLSearchParams();
    if (tags) {
      for (const tag of tags) {
        queryParams.append("tags[]", tag);
      }
    }
    if (severity && Array.isArray(severity)) {
      for (const el of severity) {
        queryParams.append("severity[]", el);
      }
    } else if (severity) {
      queryParams.append("severity", severity);
    }
    if (criticality) {
      queryParams.append("criticality", criticality);
    }
    const query = queryParams.size ? `?${queryParams.toString()}` : "";
    return __privateGet(this, _httpClient).get(`${INBOX_ROUTE}/preferences${query}`);
  }
  bulkUpdatePreferences(preferences) {
    return __privateGet(this, _httpClient).patch(`${INBOX_ROUTE}/preferences/bulk`, { preferences });
  }
  updateGlobalPreferences(preferences) {
    return __privateGet(this, _httpClient).patch(`${INBOX_ROUTE}/preferences`, preferences);
  }
  updateWorkflowPreferences({
    workflowId,
    channels
  }) {
    return __privateGet(this, _httpClient).patch(`${INBOX_ROUTE}/preferences/${workflowId}`, channels);
  }
  fetchGlobalPreferences() {
    return __privateGet(this, _httpClient).get(`${INBOX_ROUTE}/preferences/global`);
  }
  triggerHelloWorldEvent() {
    const payload = {
      name: "hello-world",
      to: {
        subscriberId: "keyless-subscriber-id"
      },
      payload: {
        subject: "Novu Keyless Environment",
        body: "You're using a keyless demo environment. For full access to Novu features and cloud integration, obtain your API key.",
        primaryActionText: "Obtain API Key",
        primaryActionUrl: "https://go.novu.co/keyless",
        secondaryActionText: "Explore Documentation",
        secondaryActionUrl: "https://go.novu.co/keyless-docs"
      }
    };
    return __privateGet(this, _httpClient).post("/inbox/events", payload);
  }
};
_httpClient = /* @__PURE__ */ new WeakMap();
var _mittEmitter;
var NovuEventEmitter = class {
  constructor() {
    __privateAdd(this, _mittEmitter);
    __privateSet(this, _mittEmitter, mitt_default());
  }
  on(eventName, listener) {
    __privateGet(this, _mittEmitter).on(eventName, listener);
    return () => {
      this.off(eventName, listener);
    };
  }
  off(eventName, listener) {
    __privateGet(this, _mittEmitter).off(eventName, listener);
  }
  emit(type, event) {
    __privateGet(this, _mittEmitter).emit(type, event);
  }
};
_mittEmitter = /* @__PURE__ */ new WeakMap();
var NovuError = class extends Error {
  constructor(message, originalError) {
    super(message);
    this.originalError = originalError;
  }
};
var read = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId, optimisticValue } = getNotificationDetails(
    args,
    {
      isRead: true,
      readAt: (/* @__PURE__ */ new Date()).toISOString(),
      isArchived: false,
      archivedAt: void 0
    },
    {
      emitter,
      apiService
    }
  );
  try {
    emitter.emit("notification.read.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.read(notificationId);
    const updatedNotification = new Notification(response, emitter, apiService);
    emitter.emit("notification.read.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.read.resolved", { args, error });
    return { error: new NovuError("Failed to read notification", error) };
  }
});
var unread = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId, optimisticValue } = getNotificationDetails(
    args,
    {
      isRead: false,
      readAt: null,
      isArchived: false,
      archivedAt: void 0
    },
    {
      emitter,
      apiService
    }
  );
  try {
    emitter.emit("notification.unread.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.unread(notificationId);
    const updatedNotification = new Notification(response, emitter, apiService);
    emitter.emit("notification.unread.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.unread.resolved", { args, error });
    return { error: new NovuError("Failed to unread notification", error) };
  }
});
var seen = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId, optimisticValue } = getNotificationDetails(
    args,
    {
      isSeen: true
    },
    {
      emitter,
      apiService
    }
  );
  try {
    emitter.emit("notification.seen.pending", {
      args,
      data: optimisticValue
    });
    yield apiService.seen(notificationId);
    if (!optimisticValue) {
      throw new Error("Failed to create optimistic value for notification");
    }
    const updatedNotification = new Notification(optimisticValue, emitter, apiService);
    emitter.emit("notification.seen.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.seen.resolved", { args, error });
    return { error: new NovuError("Failed to mark notification as seen", error) };
  }
});
var archive = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId, optimisticValue } = getNotificationDetails(
    args,
    {
      isArchived: true,
      archivedAt: (/* @__PURE__ */ new Date()).toISOString(),
      isRead: true,
      readAt: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      emitter,
      apiService
    }
  );
  try {
    emitter.emit("notification.archive.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.archive(notificationId);
    const updatedNotification = new Notification(response, emitter, apiService);
    emitter.emit("notification.archive.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.archive.resolved", { args, error });
    return { error: new NovuError("Failed to archive notification", error) };
  }
});
var unarchive = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId, optimisticValue } = getNotificationDetails(
    args,
    {
      isArchived: false,
      archivedAt: null,
      isRead: true,
      readAt: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      emitter,
      apiService
    }
  );
  try {
    emitter.emit("notification.unarchive.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.unarchive(notificationId);
    const updatedNotification = new Notification(response, emitter, apiService);
    emitter.emit("notification.unarchive.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.unarchive.resolved", { args, error });
    return { error: new NovuError("Failed to unarchive notification", error) };
  }
});
var snooze = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId, optimisticValue } = getNotificationDetails(
    args,
    {
      isSnoozed: true,
      snoozedUntil: args.snoozeUntil
    },
    {
      emitter,
      apiService
    }
  );
  try {
    emitter.emit("notification.snooze.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.snooze(notificationId, args.snoozeUntil);
    const updatedNotification = new Notification(response, emitter, apiService);
    emitter.emit("notification.snooze.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.snooze.resolved", { args, error });
    return { error: new NovuError("Failed to snooze notification", error) };
  }
});
var unsnooze = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId, optimisticValue } = getNotificationDetails(
    args,
    {
      isSnoozed: false,
      snoozedUntil: null
    },
    {
      emitter,
      apiService
    }
  );
  try {
    emitter.emit("notification.unsnooze.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.unsnooze(notificationId);
    const updatedNotification = new Notification(response, emitter, apiService);
    emitter.emit("notification.unsnooze.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.unsnooze.resolved", { args, error });
    return { error: new NovuError("Failed to unsnooze notification", error) };
  }
});
var completeAction = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args,
  actionType
}) {
  const optimisticUpdate = actionType === "primary" ? {
    primaryAction: __spreadProps(__spreadValues({}, "notification" in args ? args.notification.primaryAction : {}), {
      isCompleted: true
    })
  } : {
    secondaryAction: __spreadProps(__spreadValues({}, "notification" in args ? args.notification.secondaryAction : {}), {
      isCompleted: true
    })
  };
  const { notificationId, optimisticValue } = getNotificationDetails(args, optimisticUpdate, {
    emitter,
    apiService
  });
  try {
    emitter.emit("notification.complete_action.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.completeAction({ actionType, notificationId });
    const updatedNotification = new Notification(response, emitter, apiService);
    emitter.emit("notification.complete_action.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.complete_action.resolved", { args, error });
    return { error: new NovuError(`Failed to complete ${actionType} action on the notification`, error) };
  }
});
var revertAction = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args,
  actionType
}) {
  const optimisticUpdate = actionType === "primary" ? {
    primaryAction: __spreadProps(__spreadValues({}, "notification" in args ? args.notification.primaryAction : {}), {
      isCompleted: false
    })
  } : {
    secondaryAction: __spreadProps(__spreadValues({}, "notification" in args ? args.notification.secondaryAction : {}), {
      isCompleted: false
    })
  };
  const { notificationId, optimisticValue } = getNotificationDetails(args, optimisticUpdate, {
    emitter,
    apiService
  });
  try {
    emitter.emit("notification.revert_action.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.revertAction({ actionType, notificationId });
    const updatedNotification = new Notification(response, emitter, apiService);
    emitter.emit("notification.revert_action.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.revert_action.resolved", { args, error });
    return { error: new NovuError("Failed to fetch notifications", error) };
  }
});
var getNotificationDetails = (args, update, dependencies) => {
  if ("notification" in args) {
    return {
      notificationId: args.notification.id,
      optimisticValue: new Notification(
        __spreadValues(__spreadValues({}, args.notification), update),
        dependencies.emitter,
        dependencies.apiService
      )
    };
  } else {
    return {
      notificationId: args.notificationId
    };
  }
};
var readAll = (_0) => __async(void 0, [_0], function* ({
  emitter,
  inboxService,
  notificationsCache,
  tags,
  data
}) {
  try {
    const notifications = notificationsCache.getUniqueNotifications({ tags, data });
    const optimisticNotifications = notifications.map(
      (notification) => new Notification(
        __spreadProps(__spreadValues({}, notification), {
          isRead: true,
          readAt: (/* @__PURE__ */ new Date()).toISOString(),
          isArchived: false,
          archivedAt: void 0
        }),
        emitter,
        inboxService
      )
    );
    emitter.emit("notifications.read_all.pending", { args: { tags, data }, data: optimisticNotifications });
    yield inboxService.readAll({ tags, data });
    emitter.emit("notifications.read_all.resolved", { args: { tags, data }, data: optimisticNotifications });
    return {};
  } catch (error) {
    emitter.emit("notifications.read_all.resolved", { args: { tags, data }, error });
    return { error: new NovuError("Failed to read all notifications", error) };
  }
});
var seenAll = (_0) => __async(void 0, [_0], function* ({
  emitter,
  inboxService,
  notificationsCache,
  notificationIds,
  tags,
  data
}) {
  try {
    const notifications = notificationsCache.getUniqueNotifications({ tags, data });
    const filteredNotifications = notificationIds && notificationIds.length > 0 ? notifications.filter((notification) => notificationIds.includes(notification.id)) : notifications;
    const optimisticNotifications = filteredNotifications.map(
      (notification) => new Notification(
        __spreadProps(__spreadValues({}, notification), {
          isSeen: true,
          firstSeenAt: notification.firstSeenAt || (/* @__PURE__ */ new Date()).toISOString()
        }),
        emitter,
        inboxService
      )
    );
    emitter.emit("notifications.seen_all.pending", {
      args: { notificationIds, tags, data },
      data: optimisticNotifications
    });
    yield inboxService.markAsSeen({ notificationIds, tags, data });
    emitter.emit("notifications.seen_all.resolved", {
      args: { notificationIds, tags, data },
      data: optimisticNotifications
    });
    return {};
  } catch (error) {
    emitter.emit("notifications.seen_all.resolved", { args: { notificationIds, tags, data }, error });
    return { error: new NovuError("Failed to mark all notifications as seen", error) };
  }
});
var archiveAll = (_0) => __async(void 0, [_0], function* ({
  emitter,
  inboxService,
  notificationsCache,
  tags,
  data
}) {
  try {
    const notifications = notificationsCache.getUniqueNotifications({ tags, data });
    const optimisticNotifications = notifications.map(
      (notification) => new Notification(
        __spreadProps(__spreadValues({}, notification), {
          isRead: true,
          readAt: (/* @__PURE__ */ new Date()).toISOString(),
          isArchived: true,
          archivedAt: (/* @__PURE__ */ new Date()).toISOString()
        }),
        emitter,
        inboxService
      )
    );
    emitter.emit("notifications.archive_all.pending", { args: { tags, data }, data: optimisticNotifications });
    yield inboxService.archiveAll({ tags, data });
    emitter.emit("notifications.archive_all.resolved", { args: { tags, data }, data: optimisticNotifications });
    return {};
  } catch (error) {
    emitter.emit("notifications.archive_all.resolved", { args: { tags, data }, error });
    return { error: new NovuError("Failed to archive all notifications", error) };
  }
});
var archiveAllRead = (_0) => __async(void 0, [_0], function* ({
  emitter,
  inboxService,
  notificationsCache,
  tags,
  data
}) {
  try {
    const notifications = notificationsCache.getUniqueNotifications({ tags, data, read: true });
    const optimisticNotifications = notifications.map(
      (notification) => new Notification(
        __spreadProps(__spreadValues({}, notification), { isArchived: true, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }),
        emitter,
        inboxService
      )
    );
    emitter.emit("notifications.archive_all_read.pending", { args: { tags, data }, data: optimisticNotifications });
    yield inboxService.archiveAllRead({ tags, data });
    emitter.emit("notifications.archive_all_read.resolved", { args: { tags, data }, data: optimisticNotifications });
    return {};
  } catch (error) {
    emitter.emit("notifications.archive_all_read.resolved", { args: { tags, data }, error });
    return { error: new NovuError("Failed to archive all read notifications", error) };
  }
});
var deleteNotification = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId } = getNotificationDetails(
    args,
    {},
    {
      emitter,
      apiService
    }
  );
  try {
    emitter.emit("notification.delete.pending", {
      args
    });
    yield apiService.delete(notificationId);
    emitter.emit("notification.delete.resolved", { args });
    return {};
  } catch (error) {
    emitter.emit("notification.delete.resolved", { args, error });
    return { error: new NovuError("Failed to delete notification", error) };
  }
});
var deleteAll = (_0) => __async(void 0, [_0], function* ({
  emitter,
  inboxService,
  notificationsCache,
  tags,
  data
}) {
  try {
    const notifications = notificationsCache.getUniqueNotifications({ tags, data });
    emitter.emit("notifications.delete_all.pending", { args: { tags, data }, data: notifications });
    yield inboxService.deleteAll({ tags, data });
    emitter.emit("notifications.delete_all.resolved", { args: { tags, data } });
    return {};
  } catch (error) {
    emitter.emit("notifications.delete_all.resolved", { args: { tags, data }, error });
    return { error: new NovuError("Failed to delete all notifications", error) };
  }
});
var _emitter;
var _inboxService;
var Notification = class {
  constructor(notification, emitter, inboxService) {
    __privateAdd(this, _emitter);
    __privateAdd(this, _inboxService);
    __privateSet(this, _emitter, emitter);
    __privateSet(this, _inboxService, inboxService);
    this.id = notification.id;
    this.transactionId = notification.transactionId;
    this.subject = notification.subject;
    this.body = notification.body;
    this.to = notification.to;
    this.isRead = notification.isRead;
    this.isSeen = notification.isSeen;
    this.isArchived = notification.isArchived;
    this.isSnoozed = notification.isSnoozed;
    this.snoozedUntil = notification.snoozedUntil;
    this.deliveredAt = notification.deliveredAt;
    this.createdAt = notification.createdAt;
    this.readAt = notification.readAt;
    this.firstSeenAt = notification.firstSeenAt;
    this.archivedAt = notification.archivedAt;
    this.avatar = notification.avatar;
    this.primaryAction = notification.primaryAction;
    this.secondaryAction = notification.secondaryAction;
    this.channelType = notification.channelType;
    this.tags = notification.tags;
    this.redirect = notification.redirect;
    this.data = notification.data;
    this.workflow = notification.workflow;
    this.severity = notification.severity;
  }
  read() {
    return read({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      }
    });
  }
  unread() {
    return unread({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      }
    });
  }
  seen() {
    return seen({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      }
    });
  }
  archive() {
    return archive({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      }
    });
  }
  unarchive() {
    return unarchive({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      }
    });
  }
  delete() {
    return deleteNotification({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      }
    });
  }
  snooze(snoozeUntil) {
    return snooze({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this,
        snoozeUntil
      }
    });
  }
  unsnooze() {
    return unsnooze({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: { notification: this }
    });
  }
  completePrimary() {
    if (!this.primaryAction) {
      throw new Error("Primary action is not available");
    }
    return completeAction({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      },
      actionType: "primary"
      /* PRIMARY */
    });
  }
  completeSecondary() {
    if (!this.primaryAction) {
      throw new Error("Secondary action is not available");
    }
    return completeAction({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      },
      actionType: "secondary"
      /* SECONDARY */
    });
  }
  revertPrimary() {
    if (!this.primaryAction) {
      throw new Error("Primary action is not available");
    }
    return revertAction({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      },
      actionType: "primary"
      /* PRIMARY */
    });
  }
  revertSecondary() {
    if (!this.primaryAction) {
      throw new Error("Secondary action is not available");
    }
    return revertAction({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      },
      actionType: "secondary"
      /* SECONDARY */
    });
  }
  on(eventName, listener) {
    const cleanup = __privateGet(this, _emitter).on(eventName, listener);
    return () => {
      cleanup();
    };
  }
  /**
   * @deprecated
   * Use the cleanup function returned by the "on" method instead.
   */
  off(eventName, listener) {
    __privateGet(this, _emitter).off(eventName, listener);
  }
};
_emitter = /* @__PURE__ */ new WeakMap();
_inboxService = /* @__PURE__ */ new WeakMap();
var _callsQueue;
var _sessionError;
var BaseModule = class {
  constructor({
    inboxServiceInstance,
    eventEmitterInstance
  }) {
    __privateAdd(this, _callsQueue, []);
    __privateAdd(this, _sessionError);
    this._emitter = eventEmitterInstance;
    this._inboxService = inboxServiceInstance;
    this._emitter.on("session.initialize.resolved", ({ error, data }) => {
      if (data) {
        this.onSessionSuccess(data);
        __privateGet(this, _callsQueue).forEach((_0) => __async(this, [_0], function* ({ fn, resolve }) {
          resolve(yield fn());
        }));
        __privateSet(this, _callsQueue, []);
      } else if (error) {
        this.onSessionError(error);
        __privateSet(this, _sessionError, error);
        __privateGet(this, _callsQueue).forEach(({ resolve }) => {
          resolve({ error: new NovuError("Failed to initialize session, please contact the support", error) });
        });
        __privateSet(this, _callsQueue, []);
      }
    });
  }
  onSessionSuccess(_) {
  }
  onSessionError(_) {
  }
  callWithSession(fn) {
    return __async(this, null, function* () {
      if (this._inboxService.isSessionInitialized) {
        return fn();
      }
      if (__privateGet(this, _sessionError)) {
        return Promise.resolve({
          error: new NovuError("Failed to initialize session, please contact the support", __privateGet(this, _sessionError))
        });
      }
      return new Promise((resolve, reject) => {
        __privateGet(this, _callsQueue).push({ fn, resolve, reject });
      });
    });
  }
};
_callsQueue = /* @__PURE__ */ new WeakMap();
_sessionError = /* @__PURE__ */ new WeakMap();
var _cache;
var InMemoryCache = class {
  constructor() {
    __privateAdd(this, _cache);
    __privateSet(this, _cache, /* @__PURE__ */ new Map());
  }
  get(key) {
    return __privateGet(this, _cache).get(key);
  }
  getValues() {
    return Array.from(__privateGet(this, _cache).values());
  }
  entries() {
    return Array.from(__privateGet(this, _cache).entries());
  }
  keys() {
    return Array.from(__privateGet(this, _cache).keys());
  }
  set(key, value2) {
    __privateGet(this, _cache).set(key, value2);
  }
  remove(key) {
    __privateGet(this, _cache).delete(key);
  }
  clear() {
    __privateGet(this, _cache).clear();
  }
};
_cache = /* @__PURE__ */ new WeakMap();
var excludeEmpty = ({
  tags,
  data,
  read: read2,
  archived,
  snoozed,
  seen: seen2,
  severity,
  limit,
  offset,
  after
}) => Object.entries({ tags, data, read: read2, archived, snoozed, seen: seen2, severity, limit, offset, after }).filter(([_, value2]) => value2 !== null && value2 !== void 0 && !(Array.isArray(value2) && value2.length === 0)).reduce((acc, [key, value2]) => {
  acc[key] = value2;
  return acc;
}, {});
var getCacheKey = ({
  tags,
  data,
  read: read2,
  archived,
  snoozed,
  seen: seen2,
  severity,
  limit,
  offset,
  after
}) => {
  return JSON.stringify(excludeEmpty({ tags, data, read: read2, archived, snoozed, seen: seen2, severity, limit, offset, after }));
};
var getFilterKey = ({
  tags,
  data,
  read: read2,
  archived,
  snoozed,
  seen: seen2,
  severity
}) => {
  return JSON.stringify(excludeEmpty({ tags, data, read: read2, archived, snoozed, seen: seen2, severity }));
};
var getFilter = (key) => {
  return JSON.parse(key);
};
var updateEvents = [
  "notification.read.pending",
  "notification.read.resolved",
  "notification.unread.pending",
  "notification.unread.resolved",
  "notification.complete_action.pending",
  "notification.complete_action.resolved",
  "notification.revert_action.pending",
  "notification.revert_action.resolved",
  "notifications.read_all.pending",
  "notifications.read_all.resolved"
];
var removeEvents = [
  "notification.archive.pending",
  "notification.unarchive.pending",
  "notification.snooze.pending",
  "notification.unsnooze.pending",
  "notification.delete.pending",
  "notifications.archive_all.pending",
  "notifications.archive_all_read.pending",
  "notifications.delete_all.pending"
];
var _emitter2;
var _cache2;
var NotificationsCache = class {
  constructor({ emitter }) {
    __privateAdd(this, _emitter2);
    __privateAdd(this, _cache2);
    this.updateNotification = (key, data) => {
      const notificationsResponse = __privateGet(this, _cache2).get(key);
      if (!notificationsResponse) {
        return false;
      }
      const index = notificationsResponse.notifications.findIndex((el) => el.id === data.id);
      if (index === -1) {
        return false;
      }
      const updatedNotifications = [...notificationsResponse.notifications];
      updatedNotifications[index] = data;
      __privateGet(this, _cache2).set(key, __spreadProps(__spreadValues({}, notificationsResponse), { notifications: updatedNotifications }));
      return true;
    };
    this.removeNotification = (key, data) => {
      const notificationsResponse = __privateGet(this, _cache2).get(key);
      if (!notificationsResponse) {
        return false;
      }
      const index = notificationsResponse.notifications.findIndex((el) => el.id === data.id);
      if (index === -1) {
        return false;
      }
      const newNotifications = [...notificationsResponse.notifications];
      newNotifications.splice(index, 1);
      __privateGet(this, _cache2).set(key, __spreadProps(__spreadValues({}, notificationsResponse), {
        notifications: newNotifications
      }));
      return true;
    };
    this.handleNotificationEvent = ({ remove } = { remove: false }) => (event) => {
      const { data, args } = event;
      let notifications = [];
      if (data !== void 0 && data !== null) {
        if (Array.isArray(data) && data.every((item) => typeof item === "object" && "id" in item)) {
          notifications = data;
        } else if (typeof data === "object" && "id" in data) {
          notifications = [data];
        }
      } else if (remove && args) {
        if ("notification" in args && args.notification) {
          notifications = [args.notification];
        } else if ("notificationId" in args && args.notificationId) {
          const foundNotifications = [];
          __privateGet(this, _cache2).keys().forEach((key) => {
            const cachedResponse = __privateGet(this, _cache2).get(key);
            if (cachedResponse) {
              const found = cachedResponse.notifications.find((n) => n.id === args.notificationId);
              if (found) {
                foundNotifications.push(found);
              }
            }
          });
          notifications = foundNotifications;
        }
      }
      if (notifications.length === 0) {
        return;
      }
      const uniqueFilterKeys = /* @__PURE__ */ new Set();
      __privateGet(this, _cache2).keys().forEach((key) => {
        notifications.forEach((notification) => {
          let isNotificationFound = false;
          if (remove) {
            isNotificationFound = this.removeNotification(key, notification);
          } else {
            isNotificationFound = this.updateNotification(key, notification);
          }
          if (isNotificationFound) {
            uniqueFilterKeys.add(getFilterKey(getFilter(key)));
          }
        });
      });
      uniqueFilterKeys.forEach((key) => {
        const notificationsResponse = this.getAggregated(getFilter(key));
        __privateGet(this, _emitter2).emit("notifications.list.updated", {
          data: notificationsResponse
        });
      });
    };
    __privateSet(this, _emitter2, emitter);
    updateEvents.forEach((event) => {
      __privateGet(this, _emitter2).on(event, this.handleNotificationEvent());
    });
    removeEvents.forEach((event) => {
      __privateGet(this, _emitter2).on(event, this.handleNotificationEvent({ remove: true }));
    });
    __privateSet(this, _cache2, new InMemoryCache());
  }
  getAggregated(filter) {
    const cacheKeys = __privateGet(this, _cache2).keys().filter((key) => {
      const parsedFilter = getFilter(key);
      return isSameFilter(parsedFilter, filter);
    });
    return cacheKeys.map((key) => __privateGet(this, _cache2).get(key)).reduce(
      (acc, el) => {
        if (!el) {
          return acc;
        }
        return {
          hasMore: el.hasMore,
          filter: el.filter,
          notifications: [...acc.notifications, ...el.notifications]
        };
      },
      { hasMore: false, filter: {}, notifications: [] }
    );
  }
  has(args) {
    return __privateGet(this, _cache2).get(getCacheKey(args)) !== void 0;
  }
  set(args, data) {
    __privateGet(this, _cache2).set(getCacheKey(args), data);
  }
  update(args, data) {
    this.set(args, data);
    const notificationsResponse = this.getAggregated(getFilter(getCacheKey(args)));
    __privateGet(this, _emitter2).emit("notifications.list.updated", {
      data: notificationsResponse
    });
  }
  getAll(args) {
    if (this.has(args)) {
      return this.getAggregated({
        tags: args.tags,
        data: args.data,
        read: args.read,
        snoozed: args.snoozed,
        archived: args.archived,
        seen: args.seen,
        severity: args.severity
      });
    }
  }
  /**
   * Get unique notifications based on specified filter fields.
   * The same tags and data can be applied to multiple filters which means that the same notification can be duplicated.
   */
  getUniqueNotifications({
    tags,
    read: read2,
    data
  }) {
    const keys = __privateGet(this, _cache2).keys();
    const uniqueNotifications = /* @__PURE__ */ new Map();
    keys.forEach((key) => {
      const filter = getFilter(key);
      if (areTagsEqual(tags, filter.tags) && areDataEqual(data, filter.data)) {
        const value2 = __privateGet(this, _cache2).get(key);
        if (!value2) {
          return;
        }
        value2.notifications.filter((el) => typeof read2 === "undefined" || read2 === el.isRead).forEach((notification) => {
          uniqueNotifications.set(notification.id, notification);
        });
      }
    });
    return Array.from(uniqueNotifications.values());
  }
  clear(filter) {
    const keys = __privateGet(this, _cache2).keys();
    keys.forEach((key) => {
      if (isSameFilter(getFilter(key), filter)) {
        __privateGet(this, _cache2).remove(key);
      }
    });
  }
  clearAll() {
    __privateGet(this, _cache2).clear();
  }
};
_emitter2 = /* @__PURE__ */ new WeakMap();
_cache2 = /* @__PURE__ */ new WeakMap();
var _useCache;
var Notifications = class extends BaseModule {
  constructor({
    useCache,
    inboxServiceInstance,
    eventEmitterInstance
  }) {
    super({
      eventEmitterInstance,
      inboxServiceInstance
    });
    __privateAdd(this, _useCache);
    this.cache = new NotificationsCache({
      emitter: eventEmitterInstance
    });
    __privateSet(this, _useCache, useCache);
  }
  get inboxService() {
    return this._inboxService;
  }
  list() {
    return __async(this, arguments, function* (_a2 = {}) {
      var _b = _a2, { limit = 10 } = _b, restOptions = __objRest(_b, ["limit"]);
      return this.callWithSession(() => __async(this, null, function* () {
        const args = __spreadValues({ limit }, restOptions);
        try {
          const shouldUseCache = "useCache" in args ? args.useCache : __privateGet(this, _useCache);
          let data = shouldUseCache ? this.cache.getAll(args) : void 0;
          this._emitter.emit("notifications.list.pending", { args, data });
          if (!data) {
            const response = yield this._inboxService.fetchNotifications(__spreadValues({
              limit
            }, restOptions));
            data = {
              hasMore: response.hasMore,
              filter: response.filter,
              notifications: response.data.map((el) => new Notification(el, this._emitter, this._inboxService))
            };
            if (shouldUseCache) {
              this.cache.set(args, data);
              data = this.cache.getAll(args);
            }
          }
          this._emitter.emit("notifications.list.resolved", { args, data });
          return { data };
        } catch (error) {
          this._emitter.emit("notifications.list.resolved", { args, error });
          return { error: new NovuError("Failed to fetch notifications", error) };
        }
      }));
    });
  }
  count(args) {
    return __async(this, null, function* () {
      return this.callWithSession(() => __async(this, null, function* () {
        const filters = args && "filters" in args ? args.filters : [__spreadValues({}, args)];
        try {
          this._emitter.emit("notifications.count.pending", { args });
          const response = yield this._inboxService.count({
            filters
          });
          const data = args && "filters" in args ? { counts: response.data } : response.data[0];
          this._emitter.emit("notifications.count.resolved", {
            args,
            data
          });
          return { data };
        } catch (error) {
          this._emitter.emit("notifications.count.resolved", { args, error });
          return { error: new NovuError("Failed to count notifications", error) };
        }
      }));
    });
  }
  read(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return read({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  unread(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return unread({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  seen(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return seen({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  archive(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return archive({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  unarchive(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return unarchive({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  delete(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return deleteNotification({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  snooze(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return snooze({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  unsnooze(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return unsnooze({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  completePrimary(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return completeAction({
            emitter: this._emitter,
            apiService: this._inboxService,
            args,
            actionType: "primary"
            /* PRIMARY */
          });
        })
      );
    });
  }
  completeSecondary(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return completeAction({
            emitter: this._emitter,
            apiService: this._inboxService,
            args,
            actionType: "secondary"
            /* SECONDARY */
          });
        })
      );
    });
  }
  revertPrimary(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return revertAction({
            emitter: this._emitter,
            apiService: this._inboxService,
            args,
            actionType: "primary"
            /* PRIMARY */
          });
        })
      );
    });
  }
  revertSecondary(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return revertAction({
            emitter: this._emitter,
            apiService: this._inboxService,
            args,
            actionType: "secondary"
            /* SECONDARY */
          });
        })
      );
    });
  }
  readAll() {
    return __async(this, arguments, function* ({
      tags,
      data
    } = {}) {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return readAll({
            emitter: this._emitter,
            inboxService: this._inboxService,
            notificationsCache: this.cache,
            tags,
            data
          });
        })
      );
    });
  }
  seenAll() {
    return __async(this, arguments, function* (args = {}) {
      return this.callWithSession(() => __async(this, null, function* () {
        if ("notificationIds" in args) {
          return seenAll({
            emitter: this._emitter,
            inboxService: this._inboxService,
            notificationsCache: this.cache,
            notificationIds: args.notificationIds
          });
        } else {
          return seenAll({
            emitter: this._emitter,
            inboxService: this._inboxService,
            notificationsCache: this.cache,
            tags: "tags" in args ? args.tags : void 0,
            data: "data" in args ? args.data : void 0
          });
        }
      }));
    });
  }
  archiveAll() {
    return __async(this, arguments, function* ({
      tags,
      data
    } = {}) {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return archiveAll({
            emitter: this._emitter,
            inboxService: this._inboxService,
            notificationsCache: this.cache,
            tags,
            data
          });
        })
      );
    });
  }
  archiveAllRead() {
    return __async(this, arguments, function* ({ tags, data } = {}) {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return archiveAllRead({
            emitter: this._emitter,
            inboxService: this._inboxService,
            notificationsCache: this.cache,
            tags,
            data
          });
        })
      );
    });
  }
  deleteAll() {
    return __async(this, arguments, function* ({
      tags,
      data
    } = {}) {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return deleteAll({
            emitter: this._emitter,
            inboxService: this._inboxService,
            notificationsCache: this.cache,
            tags,
            data
          });
        })
      );
    });
  }
  clearCache({ filter } = {}) {
    if (filter) {
      this.cache.clear(filter != null ? filter : {});
      return;
    }
    this.cache.clearAll();
  }
  triggerHelloWorldEvent() {
    return __async(this, null, function* () {
      return this._inboxService.triggerHelloWorldEvent();
    });
  }
};
_useCache = /* @__PURE__ */ new WeakMap();
var _emitter3;
var _apiService;
var _cache3;
var _useCache2;
var Schedule = class {
  constructor(schedule, {
    emitterInstance,
    inboxServiceInstance,
    cache: cache2,
    useCache
  }) {
    __privateAdd(this, _emitter3);
    __privateAdd(this, _apiService);
    __privateAdd(this, _cache3);
    __privateAdd(this, _useCache2);
    __privateSet(this, _emitter3, emitterInstance);
    __privateSet(this, _apiService, inboxServiceInstance);
    __privateSet(this, _cache3, cache2);
    __privateSet(this, _useCache2, useCache);
    this.isEnabled = schedule.isEnabled;
    this.weeklySchedule = schedule.weeklySchedule;
  }
  update(args) {
    return __async(this, null, function* () {
      var _a2;
      const hasWeeklySchedule = !!args.weeklySchedule || !!this.weeklySchedule;
      return updateSchedule({
        emitter: __privateGet(this, _emitter3),
        apiService: __privateGet(this, _apiService),
        cache: __privateGet(this, _cache3),
        useCache: __privateGet(this, _useCache2),
        args: __spreadValues({
          isEnabled: (_a2 = args.isEnabled) != null ? _a2 : this.isEnabled
        }, hasWeeklySchedule && {
          weeklySchedule: __spreadValues(__spreadValues({}, this.weeklySchedule), args.weeklySchedule)
        })
      });
    });
  }
};
_emitter3 = /* @__PURE__ */ new WeakMap();
_apiService = /* @__PURE__ */ new WeakMap();
_cache3 = /* @__PURE__ */ new WeakMap();
_useCache2 = /* @__PURE__ */ new WeakMap();
var _emitter4;
var _apiService2;
var _cache4;
var _scheduleCache;
var _useCache3;
var Preference = class {
  constructor(preference, {
    emitterInstance,
    inboxServiceInstance,
    cache: cache2,
    scheduleCache,
    useCache
  }) {
    __privateAdd(this, _emitter4);
    __privateAdd(this, _apiService2);
    __privateAdd(this, _cache4);
    __privateAdd(this, _scheduleCache);
    __privateAdd(this, _useCache3);
    __privateSet(this, _emitter4, emitterInstance);
    __privateSet(this, _apiService2, inboxServiceInstance);
    __privateSet(this, _cache4, cache2);
    __privateSet(this, _scheduleCache, scheduleCache);
    __privateSet(this, _useCache3, useCache);
    this.level = preference.level;
    this.enabled = preference.enabled;
    this.channels = preference.channels;
    this.workflow = preference.workflow;
    this.schedule = new Schedule(
      __spreadValues({}, preference.schedule),
      { emitterInstance, inboxServiceInstance, cache: scheduleCache, useCache }
    );
  }
  update({
    channels,
    channelPreferences
  }) {
    var _a2;
    return updatePreference({
      emitter: __privateGet(this, _emitter4),
      apiService: __privateGet(this, _apiService2),
      cache: __privateGet(this, _cache4),
      scheduleCache: __privateGet(this, _scheduleCache),
      useCache: __privateGet(this, _useCache3),
      args: {
        workflowId: (_a2 = this.workflow) == null ? void 0 : _a2.id,
        channels: channels || channelPreferences,
        preference: this
      }
    });
  }
};
_emitter4 = /* @__PURE__ */ new WeakMap();
_apiService2 = /* @__PURE__ */ new WeakMap();
_cache4 = /* @__PURE__ */ new WeakMap();
_scheduleCache = /* @__PURE__ */ new WeakMap();
_useCache3 = /* @__PURE__ */ new WeakMap();
var updatePreference = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  cache: cache2,
  scheduleCache,
  useCache,
  args
}) {
  var _a2;
  const { channels } = args;
  const workflowId = "workflowId" in args ? args.workflowId : (_a2 = args.preference.workflow) == null ? void 0 : _a2.id;
  try {
    emitter.emit("preference.update.pending", {
      args,
      data: "preference" in args ? new Preference(
        __spreadProps(__spreadValues({}, args.preference), {
          channels: __spreadValues(__spreadValues({}, args.preference.channels), channels)
        }),
        {
          emitterInstance: emitter,
          inboxServiceInstance: apiService,
          cache: cache2,
          scheduleCache,
          useCache
        }
      ) : void 0
    });
    let response;
    if (workflowId) {
      response = yield apiService.updateWorkflowPreferences({ workflowId, channels });
    } else {
      optimisticUpdateWorkflowPreferences({ emitter, apiService, cache: cache2, scheduleCache, useCache, args });
      response = yield apiService.updateGlobalPreferences(channels);
    }
    const preference = new Preference(response, {
      emitterInstance: emitter,
      inboxServiceInstance: apiService,
      cache: cache2,
      scheduleCache,
      useCache
    });
    emitter.emit("preference.update.resolved", { args, data: preference });
    return { data: preference };
  } catch (error) {
    emitter.emit("preference.update.resolved", { args, error });
    return { error: new NovuError("Failed to update preference", error) };
  }
});
var bulkUpdatePreference = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  cache: cache2,
  scheduleCache,
  useCache,
  args
}) {
  const globalPreference = args.find(
    (arg) => "preference" in arg && arg.preference.level === "global"
    /* GLOBAL */
  );
  if (globalPreference) {
    return { error: new NovuError("Global preference is not supported in bulk update", "") };
  }
  try {
    const optimisticallyUpdatedPreferences = args.map(
      (arg) => "preference" in arg ? new Preference(
        __spreadProps(__spreadValues({}, arg.preference), {
          channels: __spreadValues(__spreadValues({}, arg.preference.channels), arg.channels)
        }),
        {
          emitterInstance: emitter,
          inboxServiceInstance: apiService,
          cache: cache2,
          scheduleCache,
          useCache
        }
      ) : void 0
    ).filter((el) => el !== void 0);
    emitter.emit("preferences.bulk_update.pending", {
      args,
      data: optimisticallyUpdatedPreferences
    });
    const preferencesToUpdate = args.map((arg) => {
      var _a2, _b, _c, _d;
      return __spreadValues({
        workflowId: "workflowId" in arg ? arg.workflowId : (_d = (_c = (_a2 = arg.preference.workflow) == null ? void 0 : _a2.id) != null ? _c : (_b = arg.preference.workflow) == null ? void 0 : _b.identifier) != null ? _d : ""
      }, arg.channels);
    });
    const response = yield apiService.bulkUpdatePreferences(preferencesToUpdate);
    const preferences = response.map(
      (el) => new Preference(el, {
        emitterInstance: emitter,
        inboxServiceInstance: apiService,
        cache: cache2,
        scheduleCache,
        useCache
      })
    );
    emitter.emit("preferences.bulk_update.resolved", { args, data: preferences });
    return { data: preferences };
  } catch (error) {
    emitter.emit("preferences.bulk_update.resolved", { args, error });
    return { error: new NovuError("Failed to bulk update preferences", error) };
  }
});
var optimisticUpdateWorkflowPreferences = ({
  emitter,
  apiService,
  cache: cache2,
  scheduleCache,
  useCache,
  args
}) => {
  const allPreferences = useCache ? cache2 == null ? void 0 : cache2.getAll({}) : void 0;
  allPreferences == null ? void 0 : allPreferences.forEach((el) => {
    var _a2, _b;
    if (el.level === "template") {
      const mergedPreference = __spreadProps(__spreadValues({}, el), {
        channels: Object.entries(el.channels).reduce((acc, [key, value2]) => {
          var _a22;
          const channelType = key;
          acc[channelType] = (_a22 = args.channels[channelType]) != null ? _a22 : value2;
          return acc;
        }, {})
      });
      const updatedPreference = "preference" in args ? new Preference(mergedPreference, {
        emitterInstance: emitter,
        inboxServiceInstance: apiService,
        cache: cache2,
        scheduleCache,
        useCache
      }) : void 0;
      if (updatedPreference) {
        emitter.emit("preference.update.pending", {
          args: {
            workflowId: (_b = (_a2 = el.workflow) == null ? void 0 : _a2.id) != null ? _b : "",
            channels: updatedPreference.channels
          },
          data: updatedPreference
        });
      }
    }
  });
};
var updateSchedule = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  cache: cache2,
  useCache,
  args
}) {
  var _a2, _b;
  try {
    const { isEnabled, weeklySchedule } = args;
    const optimisticallyUpdatedSchedule = new Schedule(
      {
        isEnabled,
        weeklySchedule
      },
      {
        emitterInstance: emitter,
        inboxServiceInstance: apiService,
        cache: cache2,
        useCache
      }
    );
    emitter.emit("preference.schedule.update.pending", { args, data: optimisticallyUpdatedSchedule });
    const response = yield apiService.updateGlobalPreferences({
      schedule: {
        isEnabled,
        weeklySchedule
      }
    });
    const updatedSchedule = new Schedule(
      {
        isEnabled: (_a2 = response.schedule) == null ? void 0 : _a2.isEnabled,
        weeklySchedule: (_b = response.schedule) == null ? void 0 : _b.weeklySchedule
      },
      {
        emitterInstance: emitter,
        inboxServiceInstance: apiService,
        cache: cache2,
        useCache
      }
    );
    emitter.emit("preference.schedule.update.resolved", {
      args,
      data: updatedSchedule
    });
    return { data: updatedSchedule };
  } catch (error) {
    emitter.emit("preference.schedule.update.resolved", { args, error });
    return { error: new NovuError("Failed to update preference", error) };
  }
});
var _useCache4;
var PreferenceSchedule = class extends BaseModule {
  constructor({
    cache: cache2,
    useCache,
    inboxServiceInstance,
    eventEmitterInstance
  }) {
    super({
      eventEmitterInstance,
      inboxServiceInstance
    });
    __privateAdd(this, _useCache4);
    this.cache = cache2;
    __privateSet(this, _useCache4, useCache);
  }
  get() {
    return __async(this, null, function* () {
      return this.callWithSession(() => __async(this, null, function* () {
        var _a2, _b;
        try {
          let data = __privateGet(this, _useCache4) ? this.cache.getAll() : void 0;
          this._emitter.emit("preference.schedule.get.pending", { args: void 0, data });
          if (!data) {
            const globalPreference = yield this._inboxService.fetchGlobalPreferences();
            data = new Schedule(
              {
                isEnabled: (_a2 = globalPreference == null ? void 0 : globalPreference.schedule) == null ? void 0 : _a2.isEnabled,
                weeklySchedule: (_b = globalPreference == null ? void 0 : globalPreference.schedule) == null ? void 0 : _b.weeklySchedule
              },
              {
                emitterInstance: this._emitter,
                inboxServiceInstance: this._inboxService,
                cache: this.cache,
                useCache: __privateGet(this, _useCache4)
              }
            );
            if (__privateGet(this, _useCache4)) {
              this.cache.set(data);
              data = this.cache.getAll();
            }
          }
          this._emitter.emit("preference.schedule.get.resolved", {
            args: void 0,
            data
          });
          return { data };
        } catch (error) {
          this._emitter.emit("preference.schedule.get.resolved", { args: void 0, error });
          throw error;
        }
      }));
    });
  }
  update(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => updateSchedule({
          emitter: this._emitter,
          apiService: this._inboxService,
          cache: this.cache,
          useCache: __privateGet(this, _useCache4),
          args
        })
      );
    });
  }
};
_useCache4 = /* @__PURE__ */ new WeakMap();
var updateEvents2 = [
  "preference.update.pending",
  "preference.update.resolved",
  "preferences.bulk_update.pending",
  "preferences.bulk_update.resolved"
];
var scheduleUpdateEvents = [
  "preference.schedule.update.pending",
  "preference.schedule.update.resolved"
];
var excludeEmpty2 = ({ tags, severity }) => Object.entries({ tags, severity }).reduce((acc, [key, value2]) => {
  if (value2 === null || value2 === void 0 || Array.isArray(value2) && value2.length === 0) {
    return acc;
  }
  acc[key] = value2;
  return acc;
}, {});
var getCacheKey2 = ({ tags, severity }) => {
  return JSON.stringify(excludeEmpty2({ tags, severity }));
};
var _emitter5;
var _cache5;
var PreferencesCache = class {
  constructor({ emitterInstance }) {
    __privateAdd(this, _emitter5);
    __privateAdd(this, _cache5);
    this.updatePreference = (key, data) => {
      const preferences = __privateGet(this, _cache5).get(key);
      if (!preferences) {
        return false;
      }
      const index = preferences.findIndex(
        (el) => {
          var _a2, _b;
          return ((_a2 = el.workflow) == null ? void 0 : _a2.id) === ((_b = data.workflow) == null ? void 0 : _b.id) || el.level === data.level && data.level === "global";
        }
      );
      if (index === -1) {
        return false;
      }
      const updatedPreferences = [...preferences];
      updatedPreferences[index] = data;
      __privateGet(this, _cache5).set(key, updatedPreferences);
      return true;
    };
    this.updatePreferenceSchedule = (key, data) => {
      const preferences = __privateGet(this, _cache5).get(key);
      if (!preferences) {
        return false;
      }
      const index = preferences.findIndex(
        (el) => el.level === "global"
        /* GLOBAL */
      );
      if (index === -1) {
        return false;
      }
      const updatedPreferences = [...preferences];
      updatedPreferences[index].schedule = data;
      __privateGet(this, _cache5).set(key, updatedPreferences);
      return true;
    };
    this.handleScheduleEvent = ({ data }) => {
      var _a2;
      if (!data) {
        return;
      }
      const cacheKeys = __privateGet(this, _cache5).keys();
      const uniqueFilterKeys = /* @__PURE__ */ new Set();
      for (const key of cacheKeys) {
        const hasUpdatedPreference = this.updatePreferenceSchedule(key, data);
        const updatedPreference = __privateGet(this, _cache5).get(key);
        if (!hasUpdatedPreference || !updatedPreference) {
          continue;
        }
        uniqueFilterKeys.add(key);
      }
      for (const key of uniqueFilterKeys) {
        __privateGet(this, _emitter5).emit("preferences.list.updated", {
          data: (_a2 = __privateGet(this, _cache5).get(key)) != null ? _a2 : []
        });
      }
    };
    this.handlePreferenceEvent = ({ data }) => {
      if (!data) {
        return;
      }
      const preferences = Array.isArray(data) ? data : [data];
      const uniqueFilterKeys = /* @__PURE__ */ new Set();
      __privateGet(this, _cache5).keys().forEach((key) => {
        preferences.forEach((preference) => {
          const hasUpdatedPreference = this.updatePreference(key, preference);
          const updatedPreference = __privateGet(this, _cache5).get(key);
          if (!hasUpdatedPreference || !updatedPreference) {
            return;
          }
          uniqueFilterKeys.add(key);
        });
      });
      uniqueFilterKeys.forEach((key) => {
        var _a2;
        __privateGet(this, _emitter5).emit("preferences.list.updated", {
          data: (_a2 = __privateGet(this, _cache5).get(key)) != null ? _a2 : []
        });
      });
    };
    __privateSet(this, _emitter5, emitterInstance);
    for (const event of updateEvents2) {
      __privateGet(this, _emitter5).on(event, this.handlePreferenceEvent);
    }
    for (const event of scheduleUpdateEvents) {
      __privateGet(this, _emitter5).on(event, this.handleScheduleEvent);
    }
    __privateSet(this, _cache5, new InMemoryCache());
  }
  has(args) {
    return __privateGet(this, _cache5).get(getCacheKey2(args)) !== void 0;
  }
  set(args, data) {
    __privateGet(this, _cache5).set(getCacheKey2(args), data);
  }
  getAll(args) {
    if (this.has(args)) {
      return __privateGet(this, _cache5).get(getCacheKey2(args));
    }
  }
  clearAll() {
    __privateGet(this, _cache5).clear();
  }
};
_emitter5 = /* @__PURE__ */ new WeakMap();
_cache5 = /* @__PURE__ */ new WeakMap();
var updateEvents3 = [
  "preference.schedule.update.pending",
  "preference.schedule.update.resolved"
];
var getCacheKey3 = () => {
  return "schedule";
};
var _emitter6;
var _cache6;
var ScheduleCache = class {
  constructor({ emitterInstance }) {
    __privateAdd(this, _emitter6);
    __privateAdd(this, _cache6);
    this.updateScheduleInCache = (key, data) => {
      const schedule = __privateGet(this, _cache6).get(key);
      if (!schedule) {
        return false;
      }
      __privateGet(this, _cache6).set(key, data);
      return true;
    };
    this.handleScheduleEvent = ({ data }) => {
      if (!data) {
        return;
      }
      const uniqueFilterKeys = /* @__PURE__ */ new Set();
      const keys = __privateGet(this, _cache6).keys();
      for (const key of keys) {
        const hasUpdatedSchedule = this.updateScheduleInCache(key, data);
        const updatedSchedule = __privateGet(this, _cache6).get(key);
        if (!hasUpdatedSchedule || !updatedSchedule) {
          continue;
        }
        uniqueFilterKeys.add(key);
      }
      for (const key of uniqueFilterKeys) {
        __privateGet(this, _emitter6).emit("preference.schedule.get.updated", {
          data: __privateGet(this, _cache6).get(key)
        });
      }
    };
    __privateSet(this, _emitter6, emitterInstance);
    for (const event of updateEvents3) {
      __privateGet(this, _emitter6).on(event, this.handleScheduleEvent);
    }
    __privateSet(this, _cache6, new InMemoryCache());
  }
  has() {
    return __privateGet(this, _cache6).get(getCacheKey3()) !== void 0;
  }
  set(data) {
    __privateGet(this, _cache6).set(getCacheKey3(), data);
  }
  getAll() {
    if (this.has()) {
      return __privateGet(this, _cache6).get(getCacheKey3());
    }
  }
  clearAll() {
    __privateGet(this, _cache6).clear();
  }
};
_emitter6 = /* @__PURE__ */ new WeakMap();
_cache6 = /* @__PURE__ */ new WeakMap();
var _useCache5;
var Preferences = class extends BaseModule {
  constructor({
    useCache,
    inboxServiceInstance,
    eventEmitterInstance
  }) {
    super({
      eventEmitterInstance,
      inboxServiceInstance
    });
    __privateAdd(this, _useCache5);
    this.cache = new PreferencesCache({
      emitterInstance: this._emitter
    });
    this.scheduleCache = new ScheduleCache({
      emitterInstance: this._emitter
    });
    __privateSet(this, _useCache5, useCache);
    this.schedule = new PreferenceSchedule({
      cache: this.scheduleCache,
      useCache,
      inboxServiceInstance,
      eventEmitterInstance
    });
  }
  list() {
    return __async(this, arguments, function* (args = {}) {
      return this.callWithSession(() => __async(this, null, function* () {
        var _a2;
        try {
          let data = __privateGet(this, _useCache5) ? this.cache.getAll(args) : void 0;
          this._emitter.emit("preferences.list.pending", { args, data });
          if (!data) {
            const response = yield this._inboxService.fetchPreferences({
              tags: args.tags,
              severity: args.severity,
              criticality: (_a2 = args.criticality) != null ? _a2 : "nonCritical"
              /* NON_CRITICAL */
            });
            data = response.map(
              (el) => new Preference(el, {
                emitterInstance: this._emitter,
                inboxServiceInstance: this._inboxService,
                cache: this.cache,
                scheduleCache: this.scheduleCache,
                useCache: __privateGet(this, _useCache5)
              })
            );
            if (__privateGet(this, _useCache5)) {
              this.cache.set(args, data);
              data = this.cache.getAll(args);
            }
          }
          this._emitter.emit("preferences.list.resolved", { args, data });
          return { data };
        } catch (error) {
          this._emitter.emit("preferences.list.resolved", { args, error });
          throw error;
        }
      }));
    });
  }
  update(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => updatePreference({
          emitter: this._emitter,
          apiService: this._inboxService,
          cache: this.cache,
          scheduleCache: this.scheduleCache,
          useCache: __privateGet(this, _useCache5),
          args
        })
      );
    });
  }
  bulkUpdate(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => bulkUpdatePreference({
          emitter: this._emitter,
          apiService: this._inboxService,
          cache: this.cache,
          scheduleCache: this.scheduleCache,
          useCache: __privateGet(this, _useCache5),
          args
        })
      );
    });
  }
};
_useCache5 = /* @__PURE__ */ new WeakMap();
function isBrowser() {
  return typeof window !== "undefined";
}
var _emitter7;
var _inboxService2;
var _options;
var Session = class {
  constructor(options, inboxServiceInstance, eventEmitterInstance) {
    __privateAdd(this, _emitter7);
    __privateAdd(this, _inboxService2);
    __privateAdd(this, _options);
    __privateSet(this, _emitter7, eventEmitterInstance);
    __privateSet(this, _inboxService2, inboxServiceInstance);
    __privateSet(this, _options, options);
  }
  get applicationIdentifier() {
    return __privateGet(this, _options).applicationIdentifier;
  }
  get subscriberId() {
    var _a2;
    return (_a2 = __privateGet(this, _options).subscriber) == null ? void 0 : _a2.subscriberId;
  }
  get context() {
    return __privateGet(this, _options).context;
  }
  get subscriberHash() {
    return __privateGet(this, _options).subscriberHash;
  }
  get contextHash() {
    return __privateGet(this, _options).contextHash;
  }
  get subscriber() {
    return __privateGet(this, _options).subscriber;
  }
  handleApplicationIdentifier(method, identifier) {
    if (typeof window === "undefined" || !window.localStorage) {
      return null;
    }
    const key = "novu_keyless_application_identifier";
    switch (method) {
      case "get": {
        return window.localStorage.getItem(key);
      }
      case "store": {
        if (identifier) {
          window.localStorage.setItem(key, identifier);
        }
        return null;
      }
      case "delete": {
        window.localStorage.removeItem(key);
        return null;
      }
      default:
        return null;
    }
  }
  initialize(options) {
    return __async(this, null, function* () {
      var _a2, _b, _c, _d, _e, _f;
      const subscriberUnchanged = ((_a2 = __privateGet(this, _options).subscriber) == null ? void 0 : _a2.subscriberId) === ((_b = options == null ? void 0 : options.subscriber) == null ? void 0 : _b.subscriberId);
      const contextUnchanged = JSON.stringify(__privateGet(this, _options).context) === JSON.stringify(options == null ? void 0 : options.context);
      if (subscriberUnchanged && contextUnchanged) {
        return;
      }
      try {
        if (options) {
          __privateSet(this, _options, options);
        }
        const { subscriber, subscriberHash, contextHash, applicationIdentifier, defaultSchedule, context } = __privateGet(this, _options);
        let currentTimezone;
        if (isBrowser()) {
          currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        let finalApplicationIdentifier = applicationIdentifier;
        if (!finalApplicationIdentifier) {
          const storedAppId = this.handleApplicationIdentifier("get");
          if (storedAppId) {
            finalApplicationIdentifier = storedAppId;
          }
        } else {
          this.handleApplicationIdentifier("delete");
        }
        __privateGet(this, _emitter7).emit("session.initialize.pending", { args: __privateGet(this, _options) });
        const response = yield __privateGet(this, _inboxService2).initializeSession({
          applicationIdentifier: finalApplicationIdentifier,
          subscriberHash,
          contextHash,
          subscriber: __spreadProps(__spreadValues({}, subscriber), {
            subscriberId: (_c = subscriber == null ? void 0 : subscriber.subscriberId) != null ? _c : "",
            timezone: (_d = subscriber == null ? void 0 : subscriber.timezone) != null ? _d : currentTimezone
          }),
          defaultSchedule,
          context
        });
        if ((_e = response == null ? void 0 : response.applicationIdentifier) == null ? void 0 : _e.startsWith("pk_keyless_")) {
          this.handleApplicationIdentifier("store", response.applicationIdentifier);
        }
        if (!((_f = response == null ? void 0 : response.applicationIdentifier) == null ? void 0 : _f.startsWith("pk_keyless_"))) {
          this.handleApplicationIdentifier("delete");
        }
        __privateGet(this, _emitter7).emit("session.initialize.resolved", { args: __privateGet(this, _options), data: response });
      } catch (error) {
        __privateGet(this, _emitter7).emit("session.initialize.resolved", { args: __privateGet(this, _options), error });
      }
    });
  }
};
_emitter7 = /* @__PURE__ */ new WeakMap();
_inboxService2 = /* @__PURE__ */ new WeakMap();
_options = /* @__PURE__ */ new WeakMap();
var PRODUCTION_SOCKET_URL = "wss://socket.novu.co";
var NOTIFICATION_RECEIVED = "notifications.notification_received";
var UNSEEN_COUNT_CHANGED = "notifications.unseen_count_changed";
var UNREAD_COUNT_CHANGED = "notifications.unread_count_changed";
var mapToNotification = ({
  _id,
  transactionId,
  content,
  read: read2,
  seen: seen2,
  archived,
  snoozedUntil,
  deliveredAt,
  createdAt,
  lastReadDate,
  firstSeenDate,
  archivedAt,
  channel,
  subscriber,
  subject,
  avatar,
  cta,
  tags,
  data,
  workflow,
  severity
}) => {
  var _a2, _b, _c, _d, _e, _f, _g, _h;
  const to = {
    id: subscriber == null ? void 0 : subscriber._id,
    subscriberId: subscriber == null ? void 0 : subscriber.subscriberId,
    firstName: subscriber == null ? void 0 : subscriber.firstName,
    lastName: subscriber == null ? void 0 : subscriber.lastName,
    avatar: subscriber == null ? void 0 : subscriber.avatar,
    locale: subscriber == null ? void 0 : subscriber.locale,
    data: subscriber == null ? void 0 : subscriber.data,
    timezone: subscriber == null ? void 0 : subscriber.timezone,
    email: subscriber == null ? void 0 : subscriber.email,
    phone: subscriber == null ? void 0 : subscriber.phone
  };
  const primaryCta = (_b = (_a2 = cta.action) == null ? void 0 : _a2.buttons) == null ? void 0 : _b.find(
    (button) => button.type === "primary"
    /* PRIMARY */
  );
  const secondaryCta = (_d = (_c = cta.action) == null ? void 0 : _c.buttons) == null ? void 0 : _d.find(
    (button) => button.type === "secondary"
    /* SECONDARY */
  );
  const actionType = (_f = (_e = cta.action) == null ? void 0 : _e.result) == null ? void 0 : _f.type;
  const actionStatus = (_g = cta.action) == null ? void 0 : _g.status;
  return __spreadProps(__spreadValues(__spreadValues({
    id: _id,
    transactionId,
    subject,
    body: content,
    to,
    isRead: read2,
    isSeen: seen2,
    isArchived: archived,
    isSnoozed: !!snoozedUntil
  }, deliveredAt && {
    deliveredAt
  }), snoozedUntil && {
    snoozedUntil
  }), {
    createdAt,
    readAt: lastReadDate,
    firstSeenAt: firstSeenDate,
    archivedAt,
    avatar,
    primaryAction: primaryCta && {
      label: primaryCta.content,
      isCompleted: actionType === "primary" && actionStatus === "done",
      redirect: primaryCta.url ? {
        target: primaryCta.target,
        url: primaryCta.url
      } : void 0
    },
    secondaryAction: secondaryCta && {
      label: secondaryCta.content,
      isCompleted: actionType === "secondary" && actionStatus === "done",
      redirect: secondaryCta.url ? {
        target: secondaryCta.target,
        url: secondaryCta.url
      } : void 0
    },
    channelType: channel,
    tags,
    redirect: ((_h = cta.data) == null ? void 0 : _h.url) ? {
      url: cta.data.url,
      target: cta.data.target
    } : void 0,
    data,
    workflow,
    severity
  });
};
var _token;
var _emitter8;
var _partySocket;
var _socketUrl;
var _notificationReceived;
var _unseenCountChanged;
var _unreadCountChanged;
var _handleMessage;
var _PartySocketClient_instances;
var initializeSocket_fn;
var handleConnectSocket_fn;
var handleDisconnectSocket_fn;
var PartySocketClient = class extends BaseModule {
  constructor({
    socketUrl,
    inboxServiceInstance,
    eventEmitterInstance
  }) {
    super({
      eventEmitterInstance,
      inboxServiceInstance
    });
    __privateAdd(this, _PartySocketClient_instances);
    __privateAdd(this, _token);
    __privateAdd(this, _emitter8);
    __privateAdd(this, _partySocket);
    __privateAdd(this, _socketUrl);
    __privateAdd(this, _notificationReceived, (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.event === "notification_received") {
          __privateGet(this, _emitter8).emit(NOTIFICATION_RECEIVED, {
            result: new Notification(mapToNotification(data.data.message), __privateGet(this, _emitter8), this._inboxService)
          });
        }
      } catch (error) {
        console.log("error", error);
      }
    });
    __privateAdd(this, _unseenCountChanged, (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.event === "unseen_count_changed") {
          __privateGet(this, _emitter8).emit(UNSEEN_COUNT_CHANGED, {
            result: data.data.unseenCount
          });
        }
      } catch (error) {
      }
    });
    __privateAdd(this, _unreadCountChanged, (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.event === "unread_count_changed") {
          __privateGet(this, _emitter8).emit(UNREAD_COUNT_CHANGED, {
            result: data.data.counts
          });
        }
      } catch (error) {
      }
    });
    __privateAdd(this, _handleMessage, (event) => {
      try {
        const data = JSON.parse(event.data);
        switch (data.event) {
          case "notification_received":
            __privateGet(this, _notificationReceived).call(this, event);
            break;
          case "unseen_count_changed":
            __privateGet(this, _unseenCountChanged).call(this, event);
            break;
          case "unread_count_changed":
            __privateGet(this, _unreadCountChanged).call(this, event);
            break;
          default:
        }
      } catch (error) {
      }
    });
    __privateSet(this, _emitter8, eventEmitterInstance);
    __privateSet(this, _socketUrl, socketUrl != null ? socketUrl : PRODUCTION_SOCKET_URL);
  }
  onSessionSuccess({ token }) {
    __privateSet(this, _token, token);
  }
  isSocketEvent(eventName) {
    return eventName === NOTIFICATION_RECEIVED || eventName === UNSEEN_COUNT_CHANGED || eventName === UNREAD_COUNT_CHANGED;
  }
  connect() {
    return __async(this, null, function* () {
      if (__privateGet(this, _token)) {
        return __privateMethod(this, _PartySocketClient_instances, handleConnectSocket_fn).call(this);
      }
      return this.callWithSession(__privateMethod(this, _PartySocketClient_instances, handleConnectSocket_fn).bind(this));
    });
  }
  disconnect() {
    return __async(this, null, function* () {
      if (__privateGet(this, _partySocket)) {
        return __privateMethod(this, _PartySocketClient_instances, handleDisconnectSocket_fn).call(this);
      }
      return this.callWithSession(__privateMethod(this, _PartySocketClient_instances, handleDisconnectSocket_fn).bind(this));
    });
  }
};
_token = /* @__PURE__ */ new WeakMap();
_emitter8 = /* @__PURE__ */ new WeakMap();
_partySocket = /* @__PURE__ */ new WeakMap();
_socketUrl = /* @__PURE__ */ new WeakMap();
_notificationReceived = /* @__PURE__ */ new WeakMap();
_unseenCountChanged = /* @__PURE__ */ new WeakMap();
_unreadCountChanged = /* @__PURE__ */ new WeakMap();
_handleMessage = /* @__PURE__ */ new WeakMap();
_PartySocketClient_instances = /* @__PURE__ */ new WeakSet();
initializeSocket_fn = function() {
  return __async(this, null, function* () {
    if (__privateGet(this, _partySocket)) {
      return;
    }
    const args = { socketUrl: __privateGet(this, _socketUrl) };
    __privateGet(this, _emitter8).emit("socket.connect.pending", { args });
    const url2 = new URL(__privateGet(this, _socketUrl));
    url2.searchParams.set("token", __privateGet(this, _token));
    __privateSet(this, _partySocket, new ReconnectingWebSocket(url2.toString()));
    __privateGet(this, _partySocket).addEventListener("open", () => {
      __privateGet(this, _emitter8).emit("socket.connect.resolved", { args });
    });
    __privateGet(this, _partySocket).addEventListener("error", (error) => {
      __privateGet(this, _emitter8).emit("socket.connect.resolved", { args, error });
    });
    __privateGet(this, _partySocket).addEventListener("message", __privateGet(this, _handleMessage));
  });
};
handleConnectSocket_fn = function() {
  return __async(this, null, function* () {
    try {
      yield __privateMethod(this, _PartySocketClient_instances, initializeSocket_fn).call(this);
      return {};
    } catch (error) {
      return { error: new NovuError("Failed to initialize the PartySocket", error) };
    }
  });
};
handleDisconnectSocket_fn = function() {
  return __async(this, null, function* () {
    var _a2;
    try {
      (_a2 = __privateGet(this, _partySocket)) == null ? void 0 : _a2.close();
      __privateSet(this, _partySocket, void 0);
      return {};
    } catch (error) {
      return { error: new NovuError("Failed to disconnect from the PartySocket", error) };
    }
  });
};
var PRODUCTION_SOCKET_URL2 = "https://ws.novu.co";
var NOTIFICATION_RECEIVED2 = "notifications.notification_received";
var UNSEEN_COUNT_CHANGED2 = "notifications.unseen_count_changed";
var UNREAD_COUNT_CHANGED2 = "notifications.unread_count_changed";
var mapToNotification2 = ({
  _id,
  transactionId,
  content,
  read: read2,
  seen: seen2,
  archived,
  snoozedUntil,
  deliveredAt,
  createdAt,
  lastReadDate,
  firstSeenDate,
  archivedAt,
  channel,
  subscriber,
  subject,
  avatar,
  cta,
  tags,
  data,
  workflow,
  severity
}) => {
  var _a2, _b, _c, _d, _e, _f, _g, _h;
  const to = {
    id: subscriber == null ? void 0 : subscriber._id,
    subscriberId: subscriber == null ? void 0 : subscriber.subscriberId,
    firstName: subscriber == null ? void 0 : subscriber.firstName,
    lastName: subscriber == null ? void 0 : subscriber.lastName,
    avatar: subscriber == null ? void 0 : subscriber.avatar,
    locale: subscriber == null ? void 0 : subscriber.locale,
    data: subscriber == null ? void 0 : subscriber.data,
    timezone: subscriber == null ? void 0 : subscriber.timezone,
    email: subscriber == null ? void 0 : subscriber.email,
    phone: subscriber == null ? void 0 : subscriber.phone
  };
  const primaryCta = (_b = (_a2 = cta.action) == null ? void 0 : _a2.buttons) == null ? void 0 : _b.find(
    (button) => button.type === "primary"
    /* PRIMARY */
  );
  const secondaryCta = (_d = (_c = cta.action) == null ? void 0 : _c.buttons) == null ? void 0 : _d.find(
    (button) => button.type === "secondary"
    /* SECONDARY */
  );
  const actionType = (_f = (_e = cta.action) == null ? void 0 : _e.result) == null ? void 0 : _f.type;
  const actionStatus = (_g = cta.action) == null ? void 0 : _g.status;
  return __spreadProps(__spreadValues(__spreadValues({
    id: _id,
    transactionId,
    subject,
    body: content,
    to,
    isRead: read2,
    isSeen: seen2,
    isArchived: archived,
    isSnoozed: !!snoozedUntil
  }, deliveredAt && {
    deliveredAt
  }), snoozedUntil && {
    snoozedUntil
  }), {
    createdAt,
    readAt: lastReadDate,
    firstSeenAt: firstSeenDate,
    archivedAt,
    avatar,
    primaryAction: primaryCta && {
      label: primaryCta.content,
      isCompleted: actionType === "primary" && actionStatus === "done",
      redirect: primaryCta.url ? {
        target: primaryCta.target,
        url: primaryCta.url
      } : void 0
    },
    secondaryAction: secondaryCta && {
      label: secondaryCta.content,
      isCompleted: actionType === "secondary" && actionStatus === "done",
      redirect: secondaryCta.url ? {
        target: secondaryCta.target,
        url: secondaryCta.url
      } : void 0
    },
    channelType: channel,
    tags,
    redirect: ((_h = cta.data) == null ? void 0 : _h.url) ? {
      url: cta.data.url,
      target: cta.data.target
    } : void 0,
    data,
    workflow,
    severity
  });
};
var _token2;
var _emitter9;
var _socketIo;
var _socketUrl2;
var _notificationReceived2;
var _unseenCountChanged2;
var _unreadCountChanged2;
var _Socket_instances;
var initializeSocket_fn2;
var handleConnectSocket_fn2;
var handleDisconnectSocket_fn2;
var Socket3 = class extends BaseModule {
  constructor({
    socketUrl,
    inboxServiceInstance,
    eventEmitterInstance
  }) {
    super({
      eventEmitterInstance,
      inboxServiceInstance
    });
    __privateAdd(this, _Socket_instances);
    __privateAdd(this, _token2);
    __privateAdd(this, _emitter9);
    __privateAdd(this, _socketIo);
    __privateAdd(this, _socketUrl2);
    __privateAdd(this, _notificationReceived2, ({ message }) => {
      __privateGet(this, _emitter9).emit(NOTIFICATION_RECEIVED2, {
        result: new Notification(mapToNotification2(message), __privateGet(this, _emitter9), this._inboxService)
      });
    });
    __privateAdd(this, _unseenCountChanged2, ({ unseenCount }) => {
      __privateGet(this, _emitter9).emit(UNSEEN_COUNT_CHANGED2, {
        result: unseenCount
      });
    });
    __privateAdd(this, _unreadCountChanged2, ({ counts }) => {
      __privateGet(this, _emitter9).emit(UNREAD_COUNT_CHANGED2, {
        result: counts
      });
    });
    __privateSet(this, _emitter9, eventEmitterInstance);
    __privateSet(this, _socketUrl2, socketUrl != null ? socketUrl : PRODUCTION_SOCKET_URL2);
  }
  onSessionSuccess({ token }) {
    __privateSet(this, _token2, token);
  }
  isSocketEvent(eventName) {
    return eventName === NOTIFICATION_RECEIVED2 || eventName === UNSEEN_COUNT_CHANGED2 || eventName === UNREAD_COUNT_CHANGED2;
  }
  connect() {
    return __async(this, null, function* () {
      if (__privateGet(this, _token2)) {
        return __privateMethod(this, _Socket_instances, handleConnectSocket_fn2).call(this);
      }
      return this.callWithSession(__privateMethod(this, _Socket_instances, handleConnectSocket_fn2).bind(this));
    });
  }
  disconnect() {
    return __async(this, null, function* () {
      if (__privateGet(this, _socketIo)) {
        return __privateMethod(this, _Socket_instances, handleDisconnectSocket_fn2).call(this);
      }
      return this.callWithSession(__privateMethod(this, _Socket_instances, handleDisconnectSocket_fn2).bind(this));
    });
  }
};
_token2 = /* @__PURE__ */ new WeakMap();
_emitter9 = /* @__PURE__ */ new WeakMap();
_socketIo = /* @__PURE__ */ new WeakMap();
_socketUrl2 = /* @__PURE__ */ new WeakMap();
_notificationReceived2 = /* @__PURE__ */ new WeakMap();
_unseenCountChanged2 = /* @__PURE__ */ new WeakMap();
_unreadCountChanged2 = /* @__PURE__ */ new WeakMap();
_Socket_instances = /* @__PURE__ */ new WeakSet();
initializeSocket_fn2 = function() {
  return __async(this, null, function* () {
    var _a2, _b, _c;
    if (__privateGet(this, _socketIo)) {
      return;
    }
    const args = { socketUrl: __privateGet(this, _socketUrl2) };
    __privateGet(this, _emitter9).emit("socket.connect.pending", { args });
    __privateSet(this, _socketIo, lookup2(__privateGet(this, _socketUrl2), {
      reconnectionDelayMax: 1e4,
      transports: ["websocket"],
      query: {
        token: `${__privateGet(this, _token2)}`
      }
    }));
    __privateGet(this, _socketIo).on("connect", () => {
      __privateGet(this, _emitter9).emit("socket.connect.resolved", { args });
    });
    __privateGet(this, _socketIo).on("connect_error", (error) => {
      __privateGet(this, _emitter9).emit("socket.connect.resolved", { args, error });
    });
    (_a2 = __privateGet(this, _socketIo)) == null ? void 0 : _a2.on("notification_received", __privateGet(this, _notificationReceived2));
    (_b = __privateGet(this, _socketIo)) == null ? void 0 : _b.on("unseen_count_changed", __privateGet(this, _unseenCountChanged2));
    (_c = __privateGet(this, _socketIo)) == null ? void 0 : _c.on("unread_count_changed", __privateGet(this, _unreadCountChanged2));
  });
};
handleConnectSocket_fn2 = function() {
  return __async(this, null, function* () {
    try {
      yield __privateMethod(this, _Socket_instances, initializeSocket_fn2).call(this);
      return {};
    } catch (error) {
      return { error: new NovuError("Failed to initialize the socket", error) };
    }
  });
};
handleDisconnectSocket_fn2 = function() {
  return __async(this, null, function* () {
    var _a2;
    try {
      (_a2 = __privateGet(this, _socketIo)) == null ? void 0 : _a2.disconnect();
      __privateSet(this, _socketIo, void 0);
      return {};
    } catch (error) {
      return { error: new NovuError("Failed to disconnect from the socket", error) };
    }
  });
};
var PARTY_SOCKET_URLS = [
  "wss://eu.socket.novu.co",
  PRODUCTION_SOCKET_URL,
  "wss://socket.novu-staging.co",
  "wss://socket-worker-local.cli-shortener.workers.dev"
];
var URL_TRANSFORMATIONS = {
  "https://eu.ws.novu.co": "wss://eu.socket.novu.co",
  "https://ws.novu.co": PRODUCTION_SOCKET_URL,
  "https://dev.ws.novu.co": "wss://socket.novu-staging.co"
};
function transformSocketUrl(socketUrl) {
  if (!socketUrl) return PRODUCTION_SOCKET_URL;
  return URL_TRANSFORMATIONS[socketUrl] || socketUrl;
}
function shouldUsePartySocket(socketUrl) {
  return !socketUrl || PARTY_SOCKET_URLS.includes(socketUrl);
}
function createSocket({
  socketUrl,
  inboxServiceInstance,
  eventEmitterInstance
}) {
  const transformedSocketUrl = transformSocketUrl(socketUrl);
  const socketType = shouldUsePartySocket(transformedSocketUrl) ? "partysocket" : "socket.io";
  switch (socketType) {
    case "partysocket":
      return new PartySocketClient({
        socketUrl: transformedSocketUrl,
        inboxServiceInstance,
        eventEmitterInstance
      });
    case "socket.io":
    default:
      return new Socket3({
        socketUrl: transformedSocketUrl,
        inboxServiceInstance,
        eventEmitterInstance
      });
  }
}
var _emitter10;
var _session;
var _inboxService3;
var Novu = class {
  constructor(options) {
    __privateAdd(this, _emitter10);
    __privateAdd(this, _session);
    __privateAdd(this, _inboxService3);
    var _a2, _b;
    __privateSet(this, _inboxService3, new InboxService({
      apiUrl: options.apiUrl || options.backendUrl,
      userAgent: options.__userAgent
    }));
    __privateSet(this, _emitter10, new NovuEventEmitter());
    __privateSet(this, _session, new Session(
      {
        applicationIdentifier: options.applicationIdentifier || "",
        subscriberHash: options.subscriberHash,
        subscriber: buildSubscriber({ subscriberId: options.subscriberId, subscriber: options.subscriber }),
        defaultSchedule: options.defaultSchedule,
        context: options.context,
        contextHash: options.contextHash
      },
      __privateGet(this, _inboxService3),
      __privateGet(this, _emitter10)
    ));
    __privateGet(this, _session).initialize();
    this.notifications = new Notifications({
      useCache: (_a2 = options.useCache) != null ? _a2 : true,
      inboxServiceInstance: __privateGet(this, _inboxService3),
      eventEmitterInstance: __privateGet(this, _emitter10)
    });
    this.preferences = new Preferences({
      useCache: (_b = options.useCache) != null ? _b : true,
      inboxServiceInstance: __privateGet(this, _inboxService3),
      eventEmitterInstance: __privateGet(this, _emitter10)
    });
    this.socket = createSocket({
      socketUrl: options.socketUrl,
      eventEmitterInstance: __privateGet(this, _emitter10),
      inboxServiceInstance: __privateGet(this, _inboxService3)
    });
    this.on = (eventName, listener) => {
      if (this.socket.isSocketEvent(eventName)) {
        this.socket.connect();
      }
      const cleanup = __privateGet(this, _emitter10).on(eventName, listener);
      return () => {
        cleanup();
      };
    };
    this.off = (eventName, listener) => {
      __privateGet(this, _emitter10).off(eventName, listener);
    };
  }
  get applicationIdentifier() {
    return __privateGet(this, _session).applicationIdentifier;
  }
  get subscriberId() {
    return __privateGet(this, _session).subscriberId;
  }
  get context() {
    return __privateGet(this, _session).context;
  }
  get contextKey() {
    return buildContextKey(__privateGet(this, _session).context);
  }
  changeSubscriber(options) {
    return __async(this, null, function* () {
      yield __privateGet(this, _session).initialize({
        applicationIdentifier: __privateGet(this, _session).applicationIdentifier || "",
        subscriberHash: options.subscriberHash,
        subscriber: options.subscriber,
        // Preserve existing context and contextHash
        context: __privateGet(this, _session).context,
        contextHash: __privateGet(this, _session).contextHash
      });
      this.notifications.cache.clearAll();
      const disconnectResult = yield this.socket.disconnect();
      if (!disconnectResult.error) {
        yield this.socket.connect();
      }
    });
  }
  changeContext(options) {
    return __async(this, null, function* () {
      const currentSubscriber = __privateGet(this, _session).subscriber;
      if (!currentSubscriber) {
        throw new Error("Cannot change context without an active subscriber");
      }
      yield __privateGet(this, _session).initialize({
        applicationIdentifier: __privateGet(this, _session).applicationIdentifier || "",
        // Preserve existing subscriber and subscriberHash
        subscriberHash: __privateGet(this, _session).subscriberHash,
        subscriber: currentSubscriber,
        context: options.context,
        contextHash: options.contextHash
      });
      this.notifications.cache.clearAll();
      const disconnectResult = yield this.socket.disconnect();
      if (!disconnectResult.error) {
        yield this.socket.connect();
      }
    });
  }
};
_emitter10 = /* @__PURE__ */ new WeakMap();
_session = /* @__PURE__ */ new WeakMap();
_inboxService3 = /* @__PURE__ */ new WeakMap();
export {
  ChannelType,
  NotificationStatus,
  Novu,
  PreferenceLevel,
  SeverityLevelEnum,
  WebSocketEvent,
  WorkflowCriticalityEnum,
  areSeveritiesEqual,
  areTagsEqual,
  checkNotificationDataFilter,
  checkNotificationMatchesFilter,
  isSameFilter
};
/*! Bundled license information:

partysocket/dist/chunk-V6LO7DXK.mjs:
  (*!
   * Reconnecting WebSocket
   * by Pedro Ladaria <pedro.ladaria@gmail.com>
   * https://github.com/pladaria/reconnecting-websocket
   * License MIT
   *)
*/
//# sourceMappingURL=@novu_js.js.map
