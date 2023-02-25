import { useEffect, useState } from 'react';
let fontFace: Promise<void> | undefined;
const loadResources = (srcArr: string[]) => {
  if (!fontFace)
    fontFace = new Promise<void>((resolve, reject) => {
      const font = new FontFace(
        'Maplestory',
        'url("/fonts/Maplestory OTF Light.otf")',
      );
      font.load().then(() => {
        document.fonts.add(font);
        resolve();
      });
    });
  const promiseArr: Promise<void>[] = srcArr!.map(src => {
    return new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.src = `${process.env.PATH}/images/${src}`;
      image.onload = () => resolve();
      image.onerror = () => reject();
    });
  });

  return Promise.all([fontFace, ...promiseArr]);
};

const useLoading = (srcArr: string[] = []) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    loadResources(srcArr).then(() => setLoaded(true));
  }, []);
  return loaded;
};

export default useLoading;
