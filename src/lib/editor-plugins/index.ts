import { BasicMarksPlugin } from '@udecode/plate-basic-marks/react';
import { BasicElementsPlugin } from '@udecode/plate-basic-elements/react';

import { NodeIdPlugin } from '@udecode/plate-node-id';
import { DeletePlugin } from '@udecode/plate-select';
import { ListPlugin } from '@udecode/plate-list/react';
import { ImagePlugin } from '@udecode/plate-media/react';
import { ColumnPlugin } from '@udecode/plate-layout/react';
import { TogglePlugin } from '@udecode/plate-toggle/react';
import { EquationPlugin } from '@udecode/plate-math/react';
import { SlashPlugin } from '@udecode/plate-slash-command/react';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';

import {
  FontBackgroundColorPlugin,
  FontColorPlugin,
  FontSizePlugin,
} from '@udecode/plate-font/react';

import Align from './align';
import Table from './table';
import DndPlugin from './dnd';
import Indent from './indent';
import SoftBreak from './soft-break';
import ExitBreak from './exit-break';
import AutoFormat from './auto-format';
import IndentList from './indent-list';
import CursorOverlay from './cursor-overlay';
import ResetBlockType from './reset-block-type';
import SelectOnBackspace from './select-on-backspace';

export default [
  BasicElementsPlugin,
  BasicMarksPlugin,
  NodeIdPlugin,
  FontBackgroundColorPlugin,
  FontColorPlugin,
  FontSizePlugin,
  ListPlugin,
  ImagePlugin,
  DeletePlugin,
  SlashPlugin,
  ColumnPlugin,
  EquationPlugin,
  HorizontalRulePlugin,

  Align,
  Indent,
  Table,
  DndPlugin,
  AutoFormat,
  CursorOverlay,
  ExitBreak,
  SoftBreak,
  IndentList,
  TogglePlugin,
  ResetBlockType,
  SelectOnBackspace,
];
