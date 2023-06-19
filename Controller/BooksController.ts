import { Request, Response } from "express";

import BookModels from "../Models/BookStoreModels";

// Search for a book:

// Upload books:
export const UploadBooks = async (req: Request, res: Response) => {
  try {
    const { title, author, description, category } = req.body;

    const NewBooks = await BookModels.create({
      title,
      author,
      coverImage: title.charAt(0).toUpperCase(),
      description,
      views: [],
      category,
    });

    return res.status(201).json({
      message: "Books successfully uploaded",
      data: NewBooks,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured in uploading books",
      data: error,
    });
  }
};

// View one book:

// Get/view all books:

// Update a book:

// Delete a book:

//Get the Views on each book
