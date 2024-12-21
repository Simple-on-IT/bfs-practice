import { useImage } from "react-konva-utils";
import { Image as KonvaImage, Text } from "react-konva";
// Компонент для отображения вершины с изображением
export const GraphNode: React.FC<{ x: number; y: number; img: string; name: string }> = ({
  x,
  y,
  img,
  name,
}) => {
  const [image] = useImage(img);

  return (
    <>
      <KonvaImage x={x - 50} y={y - 50} width={100} height={100} image={image} />
      <Text
        x={x - 50}
        y={y + 60}
        width={100}
        align="center"
        text={name}
        fontSize={16}
        fill="black"
      />
    </>
  );
};