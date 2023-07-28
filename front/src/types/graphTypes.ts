export type GraphTypes = "linear" | "bar" | "worldMap";
export type GraphTypesName = "Linear" | "Bar" | "World map";

export interface GraphType {
  name: GraphTypesName;
  value: GraphTypes;
}
