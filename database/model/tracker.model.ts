import { model } from 'mongoose';
import { trackerSchema } from '../schema/tracker.schema';

export const trackerModel = model('topics', trackerSchema);
