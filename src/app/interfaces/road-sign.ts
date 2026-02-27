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

export type TypeOfSignsID = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';

export interface CategoryOption {
  id: TypeOfSignsID;
  name: string;
}
