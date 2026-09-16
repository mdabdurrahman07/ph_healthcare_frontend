export interface SidebarItem {
  title: string;
  url: string;
  isActive?: boolean;
}

export interface SidebarGroup {
  title: string;
  url?: string;
  items: SidebarItem[];
}

export type SidebarItems = SidebarGroup[];
