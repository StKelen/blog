import clsx from 'clsx';

export enum EIconType {
  ArrowRightSLine = 'arrow-right-s-line',
  ArticleLine = 'article-line',
  Archive2Line = 'archive-2-line',
}

interface IProps {
  name: EIconType;
  size?: number;
  color?: string;
  className?: string;
}

export function RemixIcon({ name, size, color, className }: IProps) {
  return (
    <i
      className={clsx(`ri-${name}`, className)}
      style={{
        fontSize: size ? `${size}px` : undefined,
        color: color,
      }}
    />
  );
}
