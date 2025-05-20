interface LoaderSpinnerParams {
  size?: number;
}

export default function LoaderSpinner({ size }: LoaderSpinnerParams) {
  return (
    <div
      className={`w-[18px] h-[18px] ${
        size ? `w-[${size}px] h-[${size}px]` : ''
      } loader-spinner border-2 border-solid dark:border-y-white/80 dark:border-l-white/80 border-y-black/80 border-l-black/80 rounded-full transition-colors`}
    ></div>
  );
}
