import { Document, model, Schema } from 'mongoose';

export interface QuoteModel extends Document {
  text: string;
  author: string;
}

const quoteSchema = new Schema<QuoteModel>({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export const QuotesModel = model('Quotes', quoteSchema);
