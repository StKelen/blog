import { type ChangeEventHandler, useState } from 'react';
import CustomEditor from './editor';

export default function AdminCreatePostPage() {
  const [title, setTitle] = useState('');

  const onTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="m-4 py-4 px-2">
      <input
        onChange={onTitleChange}
        placeholder="请输入标题"
        value={title}
        className="bg-transparent px-4 focus-visible:outline-none text-3xl font-bold after:content-[attr(data-placeholder)] after:text-muted-foreground/80"
      />
      <CustomEditor placeholder='输入"/"快速插入内容' />
    </div>
  );
}
