"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = exports.BookSchemaDef = void 0;
const dynamoose_1 = require("dynamoose");
exports.BookSchemaDef = {
    id: {
        type: String,
        hashKey: true,
    },
    title: { type: String },
    author: { type: String },
    publishedDate: { type: Date },
    description: { type: String },
};
exports.BookModel = (0, dynamoose_1.model)('Books', exports.BookSchemaDef);
//# sourceMappingURL=book.model.js.map