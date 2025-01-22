import React, { createContext, useContext, useEffect, useMemo, useState, useRef } from 'react';

import { cn, withCn } from '@udecode/cn';
import { TElement, isHotkey } from '@udecode/plate';
import { useEditorRef, type PlateEditor } from '@udecode/plate/react';
import { useHTMLInputCursorState } from '@udecode/plate-combobox/react';
import { Popover, PopoverAnchor, PopoverContent } from '@repo/shadcn/popover';
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandPrimitive,
  CommandItem,
  CommandGroup,
} from '@repo/shadcn/command';

interface InlineComboboxContextValue {
  value: string;
  open?: boolean;
  editor?: PlateEditor;
  element?: TElement;
  setValue: (value: string) => void;
  removeInput: () => void;
  trigger: string;
}

const InlineComboboxContext = createContext<InlineComboboxContextValue>(null as any);

interface InlineComboboxProps {
  children: React.ReactNode;
  element: TElement;
  trigger: string;
  hideWhenNoValue?: boolean;
}

export function InlineCombobox({
  children,
  element,
  hideWhenNoValue = false,
  trigger,
}: InlineComboboxProps) {
  const editor = useEditorRef();
  const [value, setValue] = useState('');

  const removeInput = () => {
    if (!editor || !element) return;
    const path = editor.api.findPath(element);
    if (!path) return;
    editor.tf.removeNodes({ at: path });
    editor.tf.focus();
  };

  const contextValue: InlineComboboxContextValue = useMemo(
    () => ({
      value,
      editor,
      element,
      setValue,
      removeInput,
      trigger,
    }),
    [value, trigger, setValue],
  );

  return (
    <InlineComboboxContext.Provider value={contextValue}>
      <Popover open={!hideWhenNoValue || value.length > 0}>
        <Command className="inline">{children}</Command>
      </Popover>
    </InlineComboboxContext.Provider>
  );
}

export function InlineComboboxContent({ children }: { children: React.ReactNode }) {
  return (
    <PopoverContent side="bottom" align="start" className="p-0">
      <CommandList>{children}</CommandList>
    </PopoverContent>
  );
}

export const InlineComboboxInput = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null as any);
  const cursorState = useHTMLInputCursorState(ref);
  const { value, removeInput, trigger, setValue } = useContext(InlineComboboxContext);

  useEffect(() => {
    setTimeout(() => ref?.current?.focus(), 0);
  }, [ref]);

  const onValueChange = (val: string) => {
    setValue(val);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (isHotkey('backspace', e)) {
      if (cursorState?.atStart) removeInput();
    } else if (isHotkey('escape', e)) {
      removeInput();
    } else if (isHotkey('arrowleft', e)) {
      if (cursorState?.atStart) removeInput();
    } else if (isHotkey('arrowright', e)) {
      if (cursorState?.atEnd) removeInput();
    }
  };

  return (
    <PopoverAnchor className="inline">
      {trigger}
      <CommandPrimitive.Input
        ref={ref}
        value={value}
        className={cn('inline bg-transparent outline-none', className)}
        onValueChange={onValueChange}
        onKeyDown={onKeyDown}
        {...props}
      />
    </PopoverAnchor>
  );
};

export type InlineComboboxItemProps = {
  value?: string;
  children?: React.ReactNode;
  className?: string;
  onSelect?: (value: string) => void;
  focusEditor?: boolean;
  group?: string;
  keywords?: string[];
};

export function InlineComboboxItem({
  value,
  className,
  focusEditor = true,
  group,
  keywords,
  onSelect,
  children,
  ...props
}: InlineComboboxItemProps) {
  const { removeInput } = useContext(InlineComboboxContext);
  return (
    <CommandItem
      value={value}
      keywords={keywords}
      className={cn(
        'relative mx-1 flex h-[28px] select-none items-center rounded-sm px-2 text-sm text-foreground cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground data-[active-item=true]:bg-accent data-[active-item=true]:text-accent-foreground',
        className,
      )}
      onSelect={(val) => {
        removeInput();
        onSelect?.(val);
      }}
      {...props}
    >
      {children}
    </CommandItem>
  );
}

export function InlineComboboxEmpty({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <CommandEmpty className={className}>{children}</CommandEmpty>;
}

export const InlineComboboxGroup = withCn(
  CommandGroup,
  'hidden py-1.5 [&:has([role=option])]:block [&:not(:last-child)]:border-b',
);
