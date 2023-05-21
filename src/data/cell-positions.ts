type Positions = {
  [key: string]: {
    label: string;
    position: {
      x: number;
      y: number;
      z: number;
    };
  };
};

const positions: Positions = {
  a1: { label: "a1", position: { x: 3.5, y: 0, z: 3.5 } },
  a2: { label: "a2", position: { x: 2.5, y: 0, z: 3.5 } },
  a3: { label: "a3", position: { x: 1.5, y: 0, z: 3.5 } },
  a4: { label: "a4", position: { x: 0.5, y: 0, z: 3.5 } },
  a5: { label: "a5", position: { x: -0.5, y: 0, z: 3.5 } },
  a6: { label: "a6", position: { x: -1.5, y: 0, z: 3.5 } },
  a7: { label: "a7", position: { x: -2.5, y: 0, z: 3.5 } },
  a8: { label: "a8", position: { x: -3.5, y: 0, z: 3.5 } },
  b1: { label: "b1", position: { x: 3.5, y: 0, z: 2.5 } },
  b2: { label: "b2", position: { x: 2.5, y: 0, z: 2.5 } },
  b3: { label: "b3", position: { x: 1.5, y: 0, z: 2.5 } },
  b4: { label: "b4", position: { x: 0.5, y: 0, z: 2.5 } },
  b5: { label: "b5", position: { x: -0.5, y: 0, z: 2.5 } },
  b6: { label: "b6", position: { x: -1.5, y: 0, z: 2.5 } },
  b7: { label: "b7", position: { x: -2.5, y: 0, z: 2.5 } },
  b8: { label: "b8", position: { x: -3.5, y: 0, z: 2.5 } },
  c1: { label: "c1", position: { x: 3.5, y: 0, z: 1.5 } },
  c2: { label: "c2", position: { x: 2.5, y: 0, z: 1.5 } },
  c3: { label: "c3", position: { x: 1.5, y: 0, z: 1.5 } },
  c4: { label: "c4", position: { x: 0.5, y: 0, z: 1.5 } },
  c5: { label: "c5", position: { x: -0.5, y: 0, z: 1.5 } },
  c6: { label: "c6", position: { x: -1.5, y: 0, z: 1.5 } },
  c7: { label: "c7", position: { x: -2.5, y: 0, z: 1.5 } },
  c8: { label: "c8", position: { x: -3.5, y: 0, z: 1.5 } },
  d1: { label: "d1", position: { x: 3.5, y: 0, z: 0.5 } },
  d2: { label: "d2", position: { x: 2.5, y: 0, z: 0.5 } },
  d3: { label: "d3", position: { x: 1.5, y: 0, z: 0.5 } },
  d4: { label: "d4", position: { x: 0.5, y: 0, z: 0.5 } },
  d5: { label: "d5", position: { x: -0.5, y: 0, z: 0.5 } },
  d6: { label: "d6", position: { x: -1.5, y: 0, z: 0.5 } },
  d7: { label: "d7", position: { x: -2.5, y: 0, z: 0.5 } },
  d8: { label: "d8", position: { x: -3.5, y: 0, z: 0.5 } },
  e1: { label: "e1", position: { x: 3.5, y: 0, z: -0.5 } },
  e2: { label: "e2", position: { x: 2.5, y: 0, z: -0.5 } },
  e3: { label: "e3", position: { x: 1.5, y: 0, z: -0.5 } },
  e4: { label: "e4", position: { x: 0.5, y: 0, z: -0.5 } },
  e5: { label: "e5", position: { x: -0.5, y: 0, z: -0.5 } },
  e6: { label: "e6", position: { x: -1.5, y: 0, z: -0.5 } },
  e7: { label: "e7", position: { x: -2.5, y: 0, z: -0.5 } },
  e8: { label: "e8", position: { x: -3.5, y: 0, z: -0.5 } },
  f1: { label: "f1", position: { x: 3.5, y: 0, z: -1.5 } },
  f2: { label: "f2", position: { x: 2.5, y: 0, z: -1.5 } },
  f3: { label: "f3", position: { x: 1.5, y: 0, z: -1.5 } },
  f4: { label: "f4", position: { x: 0.5, y: 0, z: -1.5 } },
  f5: { label: "f5", position: { x: -0.5, y: 0, z: -1.5 } },
  f6: { label: "f6", position: { x: -1.5, y: 0, z: -1.5 } },
  f7: { label: "f7", position: { x: -2.5, y: 0, z: -1.5 } },
  f8: { label: "f8", position: { x: -3.5, y: 0, z: -1.5 } },
  g1: { label: "g1", position: { x: 3.5, y: 0, z: -2.5 } },
  g2: { label: "g2", position: { x: 2.5, y: 0, z: -2.5 } },
  g3: { label: "g3", position: { x: 1.5, y: 0, z: -2.5 } },
  g4: { label: "g4", position: { x: 0.5, y: 0, z: -2.5 } },
  g5: { label: "g5", position: { x: -0.5, y: 0, z: -2.5 } },
  g6: { label: "g6", position: { x: -1.5, y: 0, z: -2.5 } },
  g7: { label: "g7", position: { x: -2.5, y: 0, z: -2.5 } },
  g8: { label: "g8", position: { x: -3.5, y: 0, z: -2.5 } },
  h1: { label: "h1", position: { x: 3.5, y: 0, z: -3.5 } },
  h2: { label: "h2", position: { x: 2.5, y: 0, z: -3.5 } },
  h3: { label: "h3", position: { x: 1.5, y: 0, z: -3.5 } },
  h4: { label: "h4", position: { x: 0.5, y: 0, z: -3.5 } },
  h5: { label: "h5", position: { x: -0.5, y: 0, z: -3.5 } },
  h6: { label: "h6", position: { x: -1.5, y: 0, z: -3.5 } },
  h7: { label: "h7", position: { x: -2.5, y: 0, z: -3.5 } },
  h8: { label: "h8", position: { x: -3.5, y: 0, z: -3.5 } },
};

export default positions;
