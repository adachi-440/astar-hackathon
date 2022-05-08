// source: cosmos/base/v1beta1/coin.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

const jspb = require('google-protobuf')
const goog = jspb
const global = Function('return this')()

const gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')
goog.object.extend(proto, gogoproto_gogo_pb)
goog.exportSymbol('proto.cosmos.base.v1beta1.Coin', null, global)
goog.exportSymbol('proto.cosmos.base.v1beta1.DecCoin', null, global)
goog.exportSymbol('proto.cosmos.base.v1beta1.DecProto', null, global)
goog.exportSymbol('proto.cosmos.base.v1beta1.IntProto', null, global)
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.base.v1beta1.Coin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.cosmos.base.v1beta1.Coin, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.base.v1beta1.Coin.displayName = 'proto.cosmos.base.v1beta1.Coin'
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.base.v1beta1.DecCoin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.cosmos.base.v1beta1.DecCoin, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.base.v1beta1.DecCoin.displayName = 'proto.cosmos.base.v1beta1.DecCoin'
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.base.v1beta1.IntProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.cosmos.base.v1beta1.IntProto, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.base.v1beta1.IntProto.displayName = 'proto.cosmos.base.v1beta1.IntProto'
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.base.v1beta1.DecProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.cosmos.base.v1beta1.DecProto, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.base.v1beta1.DecProto.displayName = 'proto.cosmos.base.v1beta1.DecProto'
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
  proto.cosmos.base.v1beta1.Coin.prototype.toObject = function(opt_includeInstance) {
    return proto.cosmos.base.v1beta1.Coin.toObject(opt_includeInstance, this)
  }


  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.base.v1beta1.Coin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.base.v1beta1.Coin.toObject = function(includeInstance, msg) {
    let f; const obj = {
      denom: jspb.Message.getFieldWithDefault(msg, 1, ''),
      amount: jspb.Message.getFieldWithDefault(msg, 2, ''),
    }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.base.v1beta1.Coin.deserializeBinary = function(bytes) {
  const reader = new jspb.BinaryReader(bytes)
  const msg = new proto.cosmos.base.v1beta1.Coin
  return proto.cosmos.base.v1beta1.Coin.deserializeBinaryFromReader(msg, reader)
}


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.base.v1beta1.Coin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.base.v1beta1.Coin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    const field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString())
        msg.setDenom(value)
        break
      case 2:
        var value = /** @type {string} */ (reader.readString())
        msg.setAmount(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.base.v1beta1.Coin.prototype.serializeBinary = function() {
  const writer = new jspb.BinaryWriter()
  proto.cosmos.base.v1beta1.Coin.serializeBinaryToWriter(this, writer)
  return writer.getResultBuffer()
}


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.base.v1beta1.Coin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.v1beta1.Coin.serializeBinaryToWriter = function(message, writer) {
  let f = undefined
  f = message.getDenom()
  if (f.length > 0) {
    writer.writeString(
        1,
        f,
    )
  }
  f = message.getAmount()
  if (f.length > 0) {
    writer.writeString(
        2,
        f,
    )
  }
}


/**
 * optional string denom = 1;
 * @return {string}
 */
proto.cosmos.base.v1beta1.Coin.prototype.getDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''))
}


/**
 * @param {string} value
 * @return {!proto.cosmos.base.v1beta1.Coin} returns this
 */
proto.cosmos.base.v1beta1.Coin.prototype.setDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value)
}


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.cosmos.base.v1beta1.Coin.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''))
}


/**
 * @param {string} value
 * @return {!proto.cosmos.base.v1beta1.Coin} returns this
 */
proto.cosmos.base.v1beta1.Coin.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value)
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
  proto.cosmos.base.v1beta1.DecCoin.prototype.toObject = function(opt_includeInstance) {
    return proto.cosmos.base.v1beta1.DecCoin.toObject(opt_includeInstance, this)
  }


  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.base.v1beta1.DecCoin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.base.v1beta1.DecCoin.toObject = function(includeInstance, msg) {
    let f; const obj = {
      denom: jspb.Message.getFieldWithDefault(msg, 1, ''),
      amount: jspb.Message.getFieldWithDefault(msg, 2, ''),
    }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.base.v1beta1.DecCoin}
 */
proto.cosmos.base.v1beta1.DecCoin.deserializeBinary = function(bytes) {
  const reader = new jspb.BinaryReader(bytes)
  const msg = new proto.cosmos.base.v1beta1.DecCoin
  return proto.cosmos.base.v1beta1.DecCoin.deserializeBinaryFromReader(msg, reader)
}


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.base.v1beta1.DecCoin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.base.v1beta1.DecCoin}
 */
proto.cosmos.base.v1beta1.DecCoin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    const field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString())
        msg.setDenom(value)
        break
      case 2:
        var value = /** @type {string} */ (reader.readString())
        msg.setAmount(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.base.v1beta1.DecCoin.prototype.serializeBinary = function() {
  const writer = new jspb.BinaryWriter()
  proto.cosmos.base.v1beta1.DecCoin.serializeBinaryToWriter(this, writer)
  return writer.getResultBuffer()
}


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.base.v1beta1.DecCoin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.v1beta1.DecCoin.serializeBinaryToWriter = function(message, writer) {
  let f = undefined
  f = message.getDenom()
  if (f.length > 0) {
    writer.writeString(
        1,
        f,
    )
  }
  f = message.getAmount()
  if (f.length > 0) {
    writer.writeString(
        2,
        f,
    )
  }
}


/**
 * optional string denom = 1;
 * @return {string}
 */
proto.cosmos.base.v1beta1.DecCoin.prototype.getDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''))
}


/**
 * @param {string} value
 * @return {!proto.cosmos.base.v1beta1.DecCoin} returns this
 */
proto.cosmos.base.v1beta1.DecCoin.prototype.setDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value)
}


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.cosmos.base.v1beta1.DecCoin.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''))
}


/**
 * @param {string} value
 * @return {!proto.cosmos.base.v1beta1.DecCoin} returns this
 */
proto.cosmos.base.v1beta1.DecCoin.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value)
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
  proto.cosmos.base.v1beta1.IntProto.prototype.toObject = function(opt_includeInstance) {
    return proto.cosmos.base.v1beta1.IntProto.toObject(opt_includeInstance, this)
  }


  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.base.v1beta1.IntProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.base.v1beta1.IntProto.toObject = function(includeInstance, msg) {
    let f; const obj = {
      pb_int: jspb.Message.getFieldWithDefault(msg, 1, ''),
    }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.base.v1beta1.IntProto}
 */
proto.cosmos.base.v1beta1.IntProto.deserializeBinary = function(bytes) {
  const reader = new jspb.BinaryReader(bytes)
  const msg = new proto.cosmos.base.v1beta1.IntProto
  return proto.cosmos.base.v1beta1.IntProto.deserializeBinaryFromReader(msg, reader)
}


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.base.v1beta1.IntProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.base.v1beta1.IntProto}
 */
proto.cosmos.base.v1beta1.IntProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    const field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString())
        msg.setInt(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.base.v1beta1.IntProto.prototype.serializeBinary = function() {
  const writer = new jspb.BinaryWriter()
  proto.cosmos.base.v1beta1.IntProto.serializeBinaryToWriter(this, writer)
  return writer.getResultBuffer()
}


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.base.v1beta1.IntProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.v1beta1.IntProto.serializeBinaryToWriter = function(message, writer) {
  let f = undefined
  f = message.getInt()
  if (f.length > 0) {
    writer.writeString(
        1,
        f,
    )
  }
}


/**
 * optional string int = 1;
 * @return {string}
 */
proto.cosmos.base.v1beta1.IntProto.prototype.getInt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''))
}


/**
 * @param {string} value
 * @return {!proto.cosmos.base.v1beta1.IntProto} returns this
 */
proto.cosmos.base.v1beta1.IntProto.prototype.setInt = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value)
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
  proto.cosmos.base.v1beta1.DecProto.prototype.toObject = function(opt_includeInstance) {
    return proto.cosmos.base.v1beta1.DecProto.toObject(opt_includeInstance, this)
  }


  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.base.v1beta1.DecProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.base.v1beta1.DecProto.toObject = function(includeInstance, msg) {
    let f; const obj = {
      dec: jspb.Message.getFieldWithDefault(msg, 1, ''),
    }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.base.v1beta1.DecProto}
 */
proto.cosmos.base.v1beta1.DecProto.deserializeBinary = function(bytes) {
  const reader = new jspb.BinaryReader(bytes)
  const msg = new proto.cosmos.base.v1beta1.DecProto
  return proto.cosmos.base.v1beta1.DecProto.deserializeBinaryFromReader(msg, reader)
}


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.base.v1beta1.DecProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.base.v1beta1.DecProto}
 */
proto.cosmos.base.v1beta1.DecProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    const field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString())
        msg.setDec(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.base.v1beta1.DecProto.prototype.serializeBinary = function() {
  const writer = new jspb.BinaryWriter()
  proto.cosmos.base.v1beta1.DecProto.serializeBinaryToWriter(this, writer)
  return writer.getResultBuffer()
}


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.base.v1beta1.DecProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.v1beta1.DecProto.serializeBinaryToWriter = function(message, writer) {
  let f = undefined
  f = message.getDec()
  if (f.length > 0) {
    writer.writeString(
        1,
        f,
    )
  }
}


/**
 * optional string dec = 1;
 * @return {string}
 */
proto.cosmos.base.v1beta1.DecProto.prototype.getDec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''))
}


/**
 * @param {string} value
 * @return {!proto.cosmos.base.v1beta1.DecProto} returns this
 */
proto.cosmos.base.v1beta1.DecProto.prototype.setDec = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value)
}


goog.object.extend(exports, proto.cosmos.base.v1beta1)
