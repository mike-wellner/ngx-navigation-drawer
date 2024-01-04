export interface I_NavigationDrawerItem {
  id: number;
  parentId?: number;
  icon: string;
  description: string;
  action: () => void;
}
