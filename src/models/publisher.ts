import { model, Schema } from "mongoose";
import { IApiMasterData } from "../types/types";

export const publisherSchema = new Schema<IApiMasterData>({
    api_id: { type: Number, unique: true, required: true },
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
})

export const Publisher = model<IApiMasterData>('publisher', publisherSchema);
