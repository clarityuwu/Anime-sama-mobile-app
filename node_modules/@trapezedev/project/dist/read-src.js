"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readSource = void 0;
const utils_fs_1 = require("@ionic/utils-fs");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
// Supporting reading files from either a path or URL
async function readSource(pathOrUrl) {
    if (/^(https?:\/\/)/.test(pathOrUrl)) {
        const res = await (0, cross_fetch_1.default)(pathOrUrl);
        return res.text();
    }
    return (0, utils_fs_1.readFile)(pathOrUrl);
}
exports.readSource = readSource;
//# sourceMappingURL=read-src.js.map