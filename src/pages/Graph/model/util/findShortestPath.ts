import { Edge } from "../types/graphTypes";

// Поиск кратчайшего пути (BFS)
export const findShortestPath = (edges: Edge[], start: string, end: string): string[] => {
  const graph: Record<string, string[]> = {};

  // Построение графа
  edges.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];
    graph[from].push(to);
    graph[to].push(from);
  });

  const queue: [string, string[]][] = [[start, [start]]];
  const visited = new Set<string>();

  while (queue.length > 0) {
    // const [current, path] = 

    // if (current === end) {
    //   // Возвращаем путь, если нашли конечную вершину
    // }

    // Если в visited нет текущей точки, то добавляем её в visited и 
    // добавляем в очередь её соседей (если их также нет в visited)
  }

  return []; // Путь не найден
};