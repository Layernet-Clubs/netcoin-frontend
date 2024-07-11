'use client';
import React, { useState } from 'react';
import CatchGame from '@/components/catch/CatchGame';
import CatchWeapon from '@/components/catch/CatchWeapon';
const Catch: React.FC = () => {
  const [isCatch, setIsCatch] = useState<boolean>(true);
  return (
    <div className="min-w-screen min-h-screen bg-[#0A051E]">
      {isCatch ? (
        <CatchWeapon
          onCatch={() => {
            setIsCatch(false);
          }}
        />
      ) : (
        <CatchGame />
      )}
    </div>
  );
};

export default Catch;
