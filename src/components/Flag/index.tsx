import { ReactNode } from "react";

type FlagProps = {
  children: ReactNode;
};

export default function Flag({ children }: FlagProps) {
  return (
    <div className="w-full max-w-96 h-8 flex gap-1 items-center bg-flag px-2">
      <span className="max-[463px]:text-xs text-white font-semibold text-base leading-5">
        {children}
      </span>
    </div>
  );
}
