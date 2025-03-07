import React from 'react';
import { cn } from '@udecode/cn';
import {
  PlateContent,
  useEditorContainerRef,
  useEditorRef,
  type PlateContentProps,
} from '@udecode/plate/react';

export const EditorContainer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const editor = useEditorRef();
  const containerRef = useEditorContainerRef();

  return (
    <div
      id={editor.uid}
      ref={containerRef}
      className={cn(
        'ignore-click-outside/toolbar h-full w-full',
        'relative cursor-text select-text overflow-y-auto caret-primary selection:bg-brand/25 focus-visible:outline-none [&_.slate-selection-area]:border [&_.slate-selection-area]:border-brand/25 [&_.slate-selection-area]:bg-brand/15',
        className,
      )}
      {...props}
    />
  );
};

EditorContainer.displayName = 'EditorContainer';

export const Editor = React.forwardRef<HTMLDivElement, PlateContentProps>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <PlateContent
        ref={ref}
        className={cn(
          'group/editor',
          'relative w-full cursor-text select-text overflow-x-hidden whitespace-pre-wrap break-words',
          'rounded-md ring-offset-background  focus-visible:outline-none',
          'placeholder:text-muted-foreground/80 [&_[data-slate-placeholder]]:top-[auto_!important] [&_[data-slate-placeholder]]:text-muted-foreground/80 [&_[data-slate-placeholder]]:!opacity-100',
          '[&_strong]:font-bold',
          'size-full px-4 text-base',
          className,
        )}
        disabled={disabled}
        disableDefaultStyles
        {...props}
      />
    );
  },
);

Editor.displayName = 'Editor';
