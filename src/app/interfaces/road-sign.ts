export interface RoadSign {
  id: string;
  svg: string;
  name: string;
  category: string;
  description?: string;
  availableOptions?: AvailableOptions[];
}

export interface AvailableOptions {
  name: string;
  correct: boolean;
}
