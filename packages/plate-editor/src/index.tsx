import { Plate } from '@udecode/plate/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useCreateEditor } from '@/hooks/use-create-editor';
import type { PlateContentProps } from '@udecode/plate/react';
import { Editor, EditorContainer } from '@/components/editor';

export default function PlateEditor(props: PlateContentProps) {
  const editor = useCreateEditor();

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor}>
        {/* <EditorContainer> */}
        <Editor {...props} />
        {/* </EditorContainer> */}
      </Plate>
    </DndProvider>
  );
}
