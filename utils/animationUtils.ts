export const relayAnimation = async (
  Wrapper: HTMLElement,
  cssText: string,
  ms: number,
) => {
  const children = Array.from(
    Wrapper.children as HTMLCollectionOf<HTMLElement>,
  );
  for (let node of children) {
    await new Promise<void>(resolve => setTimeout(() => resolve(), ms));
    node.style.cssText = cssText;
  }
  await new Promise<void>(resolve => setTimeout(() => resolve(), 240));
};

export const leftFadeOut = `transform : translateX(-700px) scale(.5) !important; opacity : 0;`;
