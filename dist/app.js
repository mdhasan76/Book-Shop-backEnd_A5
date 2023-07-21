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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const comment_route_1 = __importDefault(require("./modules/comment/comment.route"));
const book_route_1 = __importDefault(require("./modules/book/book.route"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
// Parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/users", user_route_1.default);
app.use("/api/v1/comments", comment_route_1.default);
app.use("/api/v1/books", book_route_1.default);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(`Hello, You server is running`);
}));
// Handle not found route
app.use((req, res) => {
    res.status(400).json({
        success: false,
        message: "Not Found",
        errorMessage: [{ path: req.originalUrl, message: "API not found" }],
    });
});
exports.default = app;
