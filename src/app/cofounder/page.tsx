'use client';

import { useEffect } from 'react';

function CofounderFormRedirect() {
  useEffect(() => {
    window.location.href = 'https://forms.gle/zAhf5Y6LGnT6o98D7';
  }, []);

  return null;
}

export default CofounderFormRedirect;
