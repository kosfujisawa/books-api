"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const book_model_1 = require("./book.model");
const uuid_1 = require("uuid");
let BooksService = class BooksService {
    async create({ title, author, publishedDate, description, }) {
        return await book_model_1.BookModel.create({
            id: (0, uuid_1.v4)(),
            title,
            author,
            publishedDate: new Date(publishedDate),
            description,
        });
    }
    async findAll() {
        return await book_model_1.BookModel.scan().exec();
    }
    async findOne(id) {
        const found = await book_model_1.BookModel.get(id);
        if (!found) {
            throw new common_1.NotFoundException();
        }
        return found;
    }
    async update(id, { title, author, publishedDate, description }) {
        const found = await this.findOne(id);
        return await book_model_1.BookModel.update(id, {
            title: title ?? found.title,
            author: author ?? found.author,
            publishedDate: publishedDate
                ? new Date(publishedDate)
                : found.publishedDate,
            description: description ?? found.description,
        });
    }
    async delete(id) {
        const found = await this.findOne(id);
        await book_model_1.BookModel.delete(id);
        return found;
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
//# sourceMappingURL=books.service.js.map