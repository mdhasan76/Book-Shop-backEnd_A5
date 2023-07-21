"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentByProductId = exports.createComment = void 0;
const conmment_service_1 = require("./conmment.service");
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, conmment_service_1.createCommentDB)(req.body);
    res.send({
        data: result,
    });
});
exports.createComment = createComment;
const getCommentByProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, conmment_service_1.getCommentByProductIdDB)(req.params.id);
    res.send({
        data: result,
    });
});
exports.getCommentByProductId = getCommentByProductId;
