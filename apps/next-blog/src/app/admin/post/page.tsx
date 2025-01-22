'use client';
import { type FormEventHandler, useState, useRef, useEffect } from 'react';
import CustomEditor from '@repo/plate-editor';

interface IProps {
  title?: string;
}

export default function Post({ title }: IProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const updateTitle = (_title: string) => {
    const trimTitle = _title.trim();
    if (titleRef.current) {
      titleRef.current.textContent = trimTitle;
      titleRef.current.setAttribute('data-placeholder', trimTitle ? '' : '请输入标题');
    }
  };

  const onTitleChange: FormEventHandler<HTMLHeadingElement> = (e) => {
    updateTitle(e.currentTarget.textContent ?? '');
  };

  useEffect(() => {
    updateTitle(title ?? '');
  }, [title]);

  return (
    <div className="w-full mx-auto my-8 prose">
      <h1
        ref={titleRef}
        contentEditable="plaintext-only"
        suppressContentEditableWarning={true}
        onInput={onTitleChange}
        className="bg-transparent mx-8 focus-visible:outline-none text-3xl font-bold after:content-[attr(data-placeholder)] after:text-muted-foreground/80"
      />
      <CustomEditor className="mt-6" placeholder='输入"/"快速插入内容' />
    </div>
  );
}
