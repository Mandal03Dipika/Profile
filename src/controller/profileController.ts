import { db } from "../db";
import { profiles } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { Request, Response } from "express";

export const createProfile = async (req: Request, res: Response) => {
  try {
    const user: typeof profiles.$inferInsert = {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    };
    const result = await db.insert(profiles).values(user);
    res.status(201).json({ message: "Running createProfile ", result });
  } catch (error) {
    res.status(500).json({ message: "Error in createProfile ", error });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const result = await db.select().from(profiles);
    res.status(201).json({ message: "Running getProfile ", result });
  } catch (error) {
    res.status(500).json({ message: "Error in getProfile ", error });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const user: typeof profiles.$inferInsert = {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    };
    const result = await db
      .update(profiles)
      .set(user)
      .where(eq(profiles.id, Number(req.params.id)));
    res.status(201).json({ message: "Running updateProfile ", result });
  } catch (error) {
    res.status(500).json({ message: "Error in updateProfile ", error });
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const result = await db
      .delete(profiles)
      .where(eq(profiles.id, Number(req.params.id)));
    res.status(201).json({ message: "Running deleteProfile ", result });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteProfile ", error });
  }
};
