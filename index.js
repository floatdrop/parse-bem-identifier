module.exports = function parseBhIdentifier(pattern, options) {
    var result = {};
    options = options || {};
    var short = options.short;

    var blockElement = pattern.split('__');

    var blockArray = blockElement[0].split('_');
    result.block = blockArray[0];
    if (blockArray.length > 1) {
        result.mod = blockArray[1];
        result[short ? 'value' : 'modValue'] = blockArray[2] || true;
    }

    if (blockElement.length > 1) {
        var elementArray = blockElement[1].split('_');
        result.elem = elementArray[0];
        if (elementArray.length > 1) {
            result[short ? 'mod' : 'elemMod'] = elementArray[1];
            result[short ? 'value' : 'elemModValue'] = elementArray[2] || true;
        }
    }

    return result;
};
