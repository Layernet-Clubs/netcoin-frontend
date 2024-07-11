import React from 'react';
import Image from 'next/image';
export interface TaskItemProps {
  taskTitle: string;
  taskBonus: string;
  taskImg: string;
  click: () => void;
}

const TaskItem = (props: TaskItemProps) => {
  const { taskTitle, taskBonus, taskImg, click } = props;
  return (
    <div
      className="mt-2 flex items-center justify-between rounded-2xl bg-zinc-800 p-4 text-white"
      onClick={click}
    >
      <div className="flex items-center space-x-4">
        <Image
          src={taskImg}
          alt="calendar"
          className="mt-1 rounded-sm"
          width={40}
          height={40}
        />
        <div>
          <div className="font-semibold">{taskTitle}</div>
          <div className="flex items-center text-sm text-zinc-400">
            <Image
              src="/dollar.png"
              alt="coin"
              className="mr-2 rounded-full"
              width={15}
              height={15}
            />
            {taskBonus}
          </div>
        </div>
      </div>
      <Image
        src="/earn/right.png"
        alt="coin"
        className="mr-2 rounded-full"
        width={30}
        height={30}
      />
    </div>
  );
};

export default TaskItem;
