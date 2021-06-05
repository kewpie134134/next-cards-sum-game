// 1 から index の数までの配列を作成
export const makeArray = (index: number): string[] => {
  const array: string[] = [];
  for (let i = 1; i < index + 1; i++) {
    array.push(i.toString());
  }
  return array;
};

// 配列をシャッフルする関数
export const shuffleArray = ([...array]: string[]): string[] => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
