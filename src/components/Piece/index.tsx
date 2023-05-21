import { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
// @ts-ignore
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

type PieceProps = {
  type: string;
  position: any;
};

function Piece({ type, position }: PieceProps) {
  const fbx = useLoader(FBXLoader, `/models/${type}.fbx`);

  const clone = fbx.clone();

  return (
    <>
      <Suspense fallback={null}>
        <mesh scale={0.18} position={position}>
          <primitive object={clone} />
        </mesh>
      </Suspense>
    </>
  );
}

export default Piece;
