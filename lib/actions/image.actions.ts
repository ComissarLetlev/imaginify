"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Image from "../database/models/image.model";
import { redirect } from "next/navigation";

import { v2 as cloudinary } from 'cloudinary'

const populateUser = (query: any) => ({
  path: 'author',
  model: User,
  select: '_id firstName lastName clerkId'
})

//ADD IMAGE
export async function addImage({image, userId, path}: AddImageParams){
    
}