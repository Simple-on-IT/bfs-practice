import { Edge, Node } from "../types/graphTypes";
import Tree from "../../../../shared/images/tree.png";
import House from "../../../../shared/images/house.png";
import MiniHouse from "../../../../shared/images/miniHouse.png";
import Castle from "../../../../shared/images/castle.png";
import House1 from "../../../../shared/images/house_1.png";
import House2 from "../../../../shared/images/house_2.png";

export const nodes: Record<string, Node> = {
  Tree: { x: 250, y: 100, img: Tree },
  House: { x: 300, y: 200, img: House },
  MiniHouse: { x: 400, y: 100, img: MiniHouse },
  House1: { x: 150, y: 300, img: House1 },
  House2: { x: 350, y: 400, img: House2 },
  Castle: { x: 500, y: 200, img: Castle },
};

export const edges: Edge[] = [
  ["Tree", "House"],
  ["Tree", "MiniHouse"],
  ["House", "House1"],
  ["House", "House2"],
  ["MiniHouse", "Castle"],
  ["House2", "Castle"],
];