import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import {
  InsertBook,
  FindAllBooks,
  FindBook,
  UpdateBook,
  RemoveBook,
} from "./books-service";
import { CreateBookSchema, UpdateBookSchema } from "./books-schema";
import { controllerError } from "src/helpers/error-handler";

export const createBook = async (ctx: Context) => {
  try {
    const body = await ctx.req.json();
    const createBookDto = CreateBookSchema.parse(body);
    const result = await InsertBook(createBookDto);
    return ctx.json(
      { message: "Book created successfully", data: result },
      201
    );
  } catch (error: any) {
    throw controllerError(error);
  }
};

export const getAllBooks = async (ctx: Context) => {
  try {
    const books = await FindAllBooks();
    return ctx.json({ data: books });
  } catch (error: any) {
    throw controllerError(error);
  }
};

export const getBook = async (ctx: Context) => {
  try {
    const id = parseInt(ctx.req.param().id);
    if (isNaN(id)) {
      throw new HTTPException(400, { message: "Bad id" });
    }

    const book = await FindBook(id);
    if (!book) {
      throw new HTTPException(404, { message: "No book is found" });
    }

    return ctx.json({ data: book });
  } catch (error: any) {
    throw controllerError(error);
  }
};

export const updateBook = async (ctx: Context) => {
  try {
    const updateBookDto = UpdateBookSchema.parse({
      ...ctx.body,
      id: parseInt(ctx.req.param().id),
    });
    const updatedBook = await UpdateBook(updateBookDto);

    if (!updatedBook) {
      throw new HTTPException(400, { message: "Update was not successful" });
    }

    return ctx.json({ message: "Book updated successfully" });
  } catch (error: any) {
    throw controllerError(error);
  }
};

export const deleteBook = async (ctx: Context) => {
  try {
    const id = parseInt(ctx.req.param().id);
    if (isNaN(id)) {
      throw new HTTPException(400, { message: "Bad id" });
    }

    const deletedBook = await RemoveBook(id);
    if (!deletedBook) {
      throw new HTTPException(404, { message: "No book is found" });
    }

    return ctx.json({ message: "Book deleted successfully" });
  } catch (error: any) {
    throw controllerError(error);
  }
};
