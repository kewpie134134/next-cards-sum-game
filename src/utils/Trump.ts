const OBJECT_OF_SPADE = {
  spade_01: 1,
  spade_02: 2,
  spade_03: 3,
  spade_04: 4,
  spade_05: 5,
  spade_06: 6,
  spade_07: 7,
  spade_08: 8,
  spade_09: 9,
  spade_10: 10,
  spade_11: 11,
  spade_12: 12,
  spade_13: 13,
};

const OBJECT_OF_HEART = {
  heart_01: 1,
  heart_02: 2,
  heart_03: 3,
  heart_04: 4,
  heart_05: 5,
  heart_06: 6,
  heart_07: 7,
  heart_08: 8,
  heart_09: 9,
  heart_10: 10,
  heart_11: 11,
  heart_12: 12,
  heart_13: 13,
};

const OBJECT_OF_CLOVER = {
  clover_01: 1,
  clover_02: 2,
  clover_03: 3,
  clover_04: 4,
  clover_05: 5,
  clover_06: 6,
  clover_07: 7,
  clover_08: 8,
  clover_09: 9,
  clover_10: 10,
  clover_11: 11,
  clover_12: 12,
  clover_13: 13,
};

const OBJECT_OF_DIAMOND = {
  diamond_01: 1,
  diamond_02: 2,
  diamond_03: 3,
  diamond_04: 4,
  diamond_05: 5,
  diamond_06: 6,
  diamond_07: 7,
  diamond_08: 8,
  diamond_09: 9,
  diamond_10: 10,
  diamond_11: 11,
  diamond_12: 12,
  diamond_13: 13,
};

// トランプマークの配列
export const ARRAY_OF_TRUMP = Object.keys(OBJECT_OF_SPADE)
  .concat(Object.keys(OBJECT_OF_HEART))
  .concat(Object.keys(OBJECT_OF_CLOVER))
  .concat(Object.keys(OBJECT_OF_DIAMOND));

// トランプマークと値のオブジェクト
export const OBJECT_OF_TRUMP: { [key: string]: number } = {
  ...OBJECT_OF_SPADE,
  ...OBJECT_OF_HEART,
  ...OBJECT_OF_CLOVER,
  ...OBJECT_OF_DIAMOND,
};
