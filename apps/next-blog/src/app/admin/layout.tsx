import { type ReactNode } from 'react';
import Link from 'next/link';
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarInset,
} from '@repo/shadcn/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@repo/shadcn/collapsible';

import { RemixIcon, EIconType } from '@repo/shadcn/components';

import '@repo/plate-editor/styles.css';
import '@repo/shadcn/styles.css';

const menus = [
  {
    title: '文章',
    logo: EIconType.ArticleLine,
    url: '#',
    children: [
      {
        title: '撰写文章',
        url: '/admin/post',
      },
      {
        title: '文章列表',
        url: '#',
      },
    ],
  },
  {
    title: '管理',
    logo: EIconType.Archive2Line,
    url: '#',
    children: [
      {
        title: '评论管理',
        url: '#',
      },
      {
        title: '标签管理',
        url: '#',
      },
    ],
  },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarMenu>
            {menus.map((item) => (
              <Collapsible className="group/collapsible" key={item.title} defaultOpen asChild>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.logo && <RemixIcon size={16} className="opacity-75" name={item.logo} />}
                      <span>{item.title}</span>
                      <RemixIcon
                        size={18}
                        name={EIconType.ArrowRightSLine}
                        className="ml-auto opacity-75 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                      />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children.map((menu) => (
                        <SidebarMenuSubItem key={menu.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={menu.url}>
                              <span>{menu.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
