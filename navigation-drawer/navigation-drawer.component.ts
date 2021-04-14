import { Component, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

interface I_NavigationDrawerItem {
  id: number;
  icon: string;
  description: string;
  navigationTarget: string;
}

interface I_NavigationDrawerSubItem {
  id: number;
  parentId: number;
  icon: string;
  description: string;
  action: () => void;
}

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationDrawerComponent {

  @Input() navigationDrawerItems: I_NavigationDrawerItem[] = [];
  @Input() navigationDrawerSubItems: I_NavigationDrawerSubItem[] = [];
  @Input() folded = false;
  @Input() subFolded = true;
  @Input() currentId = 1;
  @Input() currentSubId = 11;

  changeOfFoldingState: Subject<boolean> = new Subject<boolean>();
  changeOfIndex: Subject<number> = new Subject<number>();
  changeOfSubIndex: Subject<number> = new Subject<number>();

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  getSubItemsForCurrentId(): I_NavigationDrawerSubItem[] {
    return this.navigationDrawerSubItems.filter(item => item.parentId === this.currentId);
  }

  isSelected(id: number): boolean {
    return id === this.currentId;
  }

  isSubSelected(id: number): boolean {
    return id === this.currentSubId;
  }

  toggleFolding(): void {
    this.folded = !this.folded;
    this.changeOfFoldingState.next(this.folded);
    this.changeDetectorRef.markForCheck();
  }

  async navigation(id: number, target: string): Promise<void> {
    this.currentId = id;
    this.changeOfIndex.next(this.currentId);
    await this.router.navigateByUrl(target);
  }

  subNavigation(id: number, callbackFunction: () => void): void {
    this.currentSubId = id;
    this.changeOfSubIndex.next(this.currentSubId);
    callbackFunction();
  }
}

