'use client';
import React, { useRef, useState } from 'react';
import TaskItem from '@/components/earn/TaskItem';
import BottomSheet from '@/components/common/BottomSheet';
import type { BottomSheetRefs } from '@/components/common/BottomSheet';
import DailyReward from '@/components/earn/DailyReward';
import type { TaskItemProps } from '@/components/earn/TaskItem';
import FollowX from '@/components/earn/FollowX';
export default function Earn() {
  const dailyRewardRef = useRef<BottomSheetRefs>(null);
  const followXRef = useRef<BottomSheetRefs>(null);

  const [taskData] = useState<TaskItemProps[]>([
    {
      taskTitle: 'Join our TG channel',
      taskBonus: '+6,649,000',
      taskImg: '/earn/telegram.png',
      click: () => {
        openFollowX();
      },
    },
    {
      taskTitle: 'Follow our X account',
      taskBonus: '+6,649,000',
      taskImg: '/earn/x.png',
      click: () => {
        openFollowX();
      },
    },
    {
      taskTitle: 'Join our Discord',
      taskBonus: '+6,649,000',
      taskImg: '/earn/discord.png',
      click: () => {
        openFollowX();
      },
    },
    {
      taskTitle: 'Like and retweet X post',
      taskBonus: '+6,649,000',
      taskImg: '/earn/x.png',
      click: () => {
        openFollowX();
      },
    },
  ]);

  const openDailiReward = () => {
    if (dailyRewardRef.current) dailyRewardRef.current.open();
  };

  const openFollowX = () => {
    if (followXRef.current) followXRef.current.open();
  };

  return (
    <div className="min-w-screen min-h-screen space-y-4 bg-[#0A051E] p-4">
      <BottomSheet ref={dailyRewardRef}>
        <DailyReward />
      </BottomSheet>
      <BottomSheet ref={followXRef}>
        <FollowX />
      </BottomSheet>
      <div>
        <h2 className="text-xl font-bold text-white">List of your friends</h2>
        <TaskItem
          taskBonus="+6,649,000"
          taskTitle="Daily reward"
          taskImg="/earn/calendar.png"
          click={() => {
            openDailiReward();
          }}
        />
      </div>
      <div>
        <h2 className="text-xl font-bold text-white">Tasks list</h2>
        <div className="mt-2 space-y-2">
          {taskData.map((x) => (
            <TaskItem key={x.taskTitle} {...x} />
          ))}
        </div>
      </div>
    </div>
  );
}
