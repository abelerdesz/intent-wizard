import { Expression } from './Expression';
import { TrainingData } from './TrainingData';

export interface Intent {
  id: string;
  name: string;
  description: string;
  trainingData: TrainingData;
  reply: Expression;
}

export type IntentId = Intent['id'];
