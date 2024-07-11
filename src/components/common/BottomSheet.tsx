'use client';

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Image from 'next/image';
interface BottomSheetProps {
  children: React.ReactNode;
}
export interface BottomSheetRefs {
  toggle: () => void;
  open: () => void;
  close: () => void;
}

const BottomSheet = forwardRef<BottomSheetRefs, BottomSheetProps>(
  ({ children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      toggle: () => {
        setIsOpen(!isOpen);
      },
      open: () => {
        setIsOpen(true);
      },
      close: () => {
        setIsOpen(false);
      },
    }));

    return (
      <div>
        <div
          className={`fixed inset-x-0 bottom-0 mx-4 transform bg-[#17142E] ${
            isOpen ? 'translate-y-0' : 'translate-y-full'
          } rounded-3xl p-4 shadow-lg transition-transform duration-300 ease-in-out`}
          style={{ zIndex: 1000 }}
        >
          <div className="flex items-center justify-end">
            <button onClick={() => setIsOpen(false)} className="text-gray-500">
              <Image
                src="/close.png"
                alt="Daily Reward Icon"
                className="mb-4 mt-2"
                width={12}
                height={12}
              />
            </button>
          </div>
          {children}
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
            style={{ zIndex: 999 }}
          />
        )}
      </div>
    );
  }
);

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
