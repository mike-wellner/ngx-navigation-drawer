import { Component } from '@angular/core';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {

  // Navigation items
  readonly MAIN_NAVIGATION_DRAWER_ITEMS: { id: number; icon: string; description: string; action: () => void; }[] = [
    { id: 1, icon: 'home', description: 'Home', action: this.dummy.bind(this) as () => void },
    { id: 2, icon: 'library_books', description: 'Assets', action: this.dummy.bind(this) as () => void },
    { id: 3, icon: 'people', description: 'Friends', action: this.dummy.bind(this) as () => void },
    { id: 4, icon: 'image', description: 'Photos', action: this.dummy.bind(this) as () => void },
    { id: 5, icon: 'folder', description: 'Documents', action: this.dummy.bind(this) as () => void },
    { id: 6, icon: 'admin_panel_settings', description: 'Developer', action: this.dummy.bind(this) as () => void },
  ];

  // Navigation subitems
  readonly SUB_NAVIGATION_DRAWER_ITEMS: { id: number; parentId: number; icon: string; description: string; action: () => void; }[] = [
    // Home
    { id: 11, parentId: 1, icon: 'view_module', description: 'Overview', action: this.dummy.bind(this) as () => void },
    { id: 12, parentId: 1, icon: 'add', description: 'Add', action: this.dummy.bind(this) as () => void },
    { id: 13, parentId: 1, icon: 'info', description: 'About', action: this.dummy.bind(this) as () => void },
    { id: 14, parentId: 1, icon: 'help', description: 'Help', action: this.dummy.bind(this) as () => void },

    // Assets
    { id: 21, parentId: 2, icon: 'view_module', description: 'Overview', action: this.dummy.bind(this) as () => void },
    { id: 22, parentId: 2, icon: 'add', description: 'Add', action: this.dummy.bind(this) as () => void },
    { id: 23, parentId: 2, icon: 'edit', description: 'Edit', action: this.dummy.bind(this) as () => void },
    { id: 24, parentId: 2, icon: 'cloud', description: 'Upload', action: this.dummy.bind(this) as () => void },
    { id: 25, parentId: 2, icon: 'show_chart', description: 'Statistic', action: this.dummy.bind(this) as () => void },
    { id: 26, parentId: 2, icon: 'place', description: 'Map', action: this.dummy.bind(this) as () => void },

    // Friends
    { id: 31, parentId: 3, icon: 'view_module', description: 'Overview', action: this.dummy.bind(this) as () => void },
    { id: 32, parentId: 3, icon: 'add', description: 'Add', action: this.dummy.bind(this) as () => void },
    { id: 33, parentId: 3, icon: 'edit', description: 'Edit', action: this.dummy.bind(this) as () => void },
    { id: 34, parentId: 3, icon: 'cloud', description: 'Upload', action: this.dummy.bind(this) as () => void },
    { id: 35, parentId: 3, icon: 'show_chart', description: 'Statistic', action: this.dummy.bind(this) as () => void },
    { id: 36, parentId: 3, icon: 'place', description: 'Map', action: this.dummy.bind(this) as () => void },

    // Photos
    { id: 41, parentId: 4, icon: 'view_module', description: 'Overview', action: this.dummy.bind(this) as () => void },
    { id: 42, parentId: 4, icon: 'add', description: 'Add', action: this.dummy.bind(this) as () => void },
    { id: 43, parentId: 4, icon: 'edit', description: 'Edit', action: this.dummy.bind(this) as () => void },
    { id: 44, parentId: 4, icon: 'cloud', description: 'Upload', action: this.dummy.bind(this) as () => void },
    { id: 45, parentId: 4, icon: 'show_chart', description: 'Statistic', action: this.dummy.bind(this) as () => void },
    { id: 46, parentId: 4, icon: 'place', description: 'Map', action: this.dummy.bind(this) as () => void },
    { id: 47, parentId: 4, icon: 'mood', description: 'Optimize', action: this.dummy.bind(this) as () => void },
    { id: 48, parentId: 4, icon: 'filter_b_and_w', description: 'Colormode', action: this.dummy.bind(this) as () => void },

    // Documents
    { id: 51, parentId: 5, icon: 'view_module', description: 'Overview', action: this.dummy.bind(this) as () => void },
    { id: 52, parentId: 5, icon: 'add', description: 'Add', action: this.dummy.bind(this) as () => void },
    { id: 53, parentId: 5, icon: 'edit', description: 'Edit', action: this.dummy.bind(this) as () => void },
    { id: 54, parentId: 5, icon: 'cloud', description: 'Upload', action: this.dummy.bind(this) as () => void },
    { id: 55, parentId: 5, icon: 'show_chart', description: 'Statistic', action: this.dummy.bind(this) as () => void },
    { id: 56, parentId: 5, icon: 'place', description: 'Map', action: this.dummy.bind(this) as () => void },

    { id: 61, parentId: 6, icon: 'view_module', description: 'Overview', action: this.dummy.bind(this) as () => void },
    { id: 62, parentId: 6, icon: 'build_circle', description: 'Debug Console', action: this.dummy.bind(this) as () => void },
    { id: 63, parentId: 6, icon: 'castle', description: 'Sandbox', action: this.dummy.bind(this) as () => void }
  ];

  constructor() { }

  dummy(): void { }
}
