import React, { useEffect, useState } from 'react';

const loadResources = () => {
  const font = new Promise<void>((resolve, reject) => {
    const font = new FontFace(
      'Maplestory',
      'url("/fonts/Maplestory OTF Light.otf")',
    );
    font.load().then(() => {
      document.fonts.add(font);
      resolve();
    });
  });

  //   const image = new Promise<void>((resolve, reject) => {
  //     const image = new Image();
  //     image.onload = () => resolve();
  //     image.onerror = () => reject();
  //     image.src = 'path/to/image';
  //   });

  return Promise.all([
    font,
    new Promise<void>(resolve => setTimeout(() => resolve(), 1000)),
  ]);
};

const useLoading = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    loadResources().then(() => setLoaded(true));
  }, []);
  return loaded;
};

export default useLoading;
