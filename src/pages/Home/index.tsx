import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { Chess } from "chess.js";

import * as S from "./styles";
import positions from "../../data/positions";

const chess = new Chess();

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return <OrbitControls args={[camera, domElement]} />;
};

function HomePage() {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [targetsCells, setTargetsCells] = useState<string[]>([]);

  console.log(chess.ascii());

  const materials = useLoader(MTLLoader, "/models/table/tab.mtl");
  const object = useLoader(OBJLoader, "/models/table/tab.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  function resetCellsIndicators() {
    setTargetsCells([]);
    setSelectedCell(null);
  }

  function handleClickCell(label: any) {
    if (targetsCells.includes(label)) {
      chess.move(`${selectedCell}-${label}`);
      resetCellsIndicators();
    } else {
      if (chess.moves({ square: label }).length > 0) {
        const targets = chess
          .moves({ square: label, verbose: true })
          .map((move) => move.to);

        setTargetsCells(targets);
        setSelectedCell(label);
      } else {
        resetCellsIndicators();
      }
    }
  }

  return (
    <>
      <S.Container>
        <Canvas shadows camera={{ position: 5 }}>
          <Suspense fallback={null}>
            <primitive object={object} />
          </Suspense>

          {Object.values(positions).map((item) => (
            <mesh
              onClick={() => handleClickCell(item.label)}
              key={item.label}
              scale={[0.95, 0.1, 0.95]}
              position={[item.position.x, item.position.y, item.position.z]}
            >
              <boxBufferGeometry attach="geometry" />
              <meshLambertMaterial
                attach="material"
                color={targetsCells.includes(item.label) ? "green" : "blue"}
                opacity={
                  targetsCells.includes(item.label) ||
                  selectedCell === item.label
                    ? 0.5
                    : 0
                }
                transparent
              />
            </mesh>
          ))}

          <gridHelper args={[100, 10]} />
          <ambientLight intensity={0.8} />
          {/* <pointLight intensity={1} position={[0, 6, 0]} /> */}
          <CameraControls />
        </Canvas>
      </S.Container>
    </>
  );
}

export default HomePage;
