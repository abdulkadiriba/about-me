'use client';

import { GlowCapture } from '@codaworks/react-glow';

export default function GlowArea({ children }: { children: React.ReactNode }) {
  return <GlowCapture className='client-wrapper'>{children}</GlowCapture>;
}
