import React, { useState } from "react";
import { Stage, Layer, Line } from "react-konva";
import styles from "./Graph.module.css";

import { edges, nodes } from "../model/constants/graphConstants";
import { GraphNode } from "./GraphNode";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { findShortestPath } from "../model/util/findShortestPath";

// Главный компонент
export const Graph: React.FC = () => {
  const [startNode, setStartNode] = useState<string>("Tree");
  const [endNode, setEndNode] = useState<string>("Castle");
  const [highlightedPath, setHighlightedPath] = useState<string[]>([]);

  const windowSize = useWindowSize();

  // Вычисляем размеры Stage
  const stageWidth = Math.min(1000, windowSize.width - 20); // Оставляем небольшой отступ
  const stageHeight = Math.min(600, windowSize.height - 200); // Учитываем высоту элементов управления

  const handlePathHighlight = () => {
    const path = findShortestPath(edges, startNode, endNode);
    setHighlightedPath(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <label className={styles.label}>
          Начальная точка: Tree
        </label>
        <label className={styles.label}>
          Конечная точка:
          <select
            value={endNode}
            onChange={(e) => setEndNode(e.target.value)}
            className={styles.select}
          >
            {Object.keys(nodes).map((node) => (
              <option key={node} value={node}>
                {node}
              </option>
            ))}
          </select>
        </label>
        <button onClick={handlePathHighlight} className={styles.button}>
          Показать путь
        </button>
      </div>
      <Stage width={stageWidth} height={stageHeight} className={styles.stage}>
        <Layer>
          {/* Рисуем связи (рёбра) */}
          {edges.map(([from, to], index) => {
            const isHighlighted =
              highlightedPath.includes(from) &&
              highlightedPath.includes(to)
            return (
              <Line
                key={index}
                points={[nodes[from].x, nodes[from].y, nodes[to].x, nodes[to].y]}
                stroke={isHighlighted ? "red" : "black"}
                strokeWidth={isHighlighted ? 4 : 2}
              />
            );
          })}

          {/* Рисуем вершины */}
          {Object.entries(nodes).map(([key, { x, y, img }]) => (
            <GraphNode key={key} x={x} y={y} img={img} name={key} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
