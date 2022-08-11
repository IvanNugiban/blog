"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortString(first, second) {
    if (first < second)
        return -1;
    if (first === second)
        return 0;
    else
        return 1;
}
exports.default = sortString;
