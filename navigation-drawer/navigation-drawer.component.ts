import { Component, ChangeDetectorRef, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

interface I_NavigationDrawerMainItem {
  id: number;
  icon: string;
  description: string;
  action: () => void;
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

  @Input() navigationDrawerMainItems: I_NavigationDrawerMainItem[] = [];
  @Input() navigationDrawerSubItems: I_NavigationDrawerSubItem[] = [];
  @Input() mainFolded = false;
  @Input() subFolded = true;
  @Input() currentMainId = 1;
  @Input() currentSubId = 11;

  focusOnSub: boolean;
  focusOnMain: boolean;
  currentFocusMainId: number;
  currentFocusSubId: number;
  changeOfFoldingState: Subject<boolean> = new Subject<boolean>();
  changeOfMainIndex: Subject<number> = new Subject<number>();
  changeOfSubIndex: Subject<number> = new Subject<number>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.currentFocusMainId = this.currentMainId;
    this.currentFocusSubId = this.currentSubId;
    this.focusOnMain = false;
    this.focusOnSub = false;
  }

  @HostListener('window:keydown', ['$event'])
  private translateEnterToClick(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (this.focusOnMain) {
        const mainItem = this.getItemForMainId(this.currentFocusMainId);
        if (mainItem !== undefined) {
          this.mainNavigation(mainItem.id, mainItem.action);
        }
      }
      if (this.focusOnSub) {
        const subItem = this.getSubItemForIds(this.currentMainId, this.currentFocusSubId);
        if (subItem !== undefined) {
          this.subNavigation(subItem.id, subItem.action);
        }
      }
    }
  }

  getSubItemsForMainId(mainId: number): I_NavigationDrawerSubItem[] {
    return this.navigationDrawerSubItems.filter(item => item.parentId === mainId);
  }

  getSubItemForIds(mainId: number, subId: number): I_NavigationDrawerSubItem | undefined {
    const subItems = this.getSubItemsForMainId(mainId);
    return subItems.find(item => item.id === subId);
  }

  getItemForMainId(id: number): I_NavigationDrawerMainItem | undefined {
    return this.navigationDrawerMainItems.find(item => item.id === id);
  }

  onMainFocus(id: number): void {
    this.currentFocusMainId = id;
    this.focusOnMain = true;
  }

  onSubFocus(id: number): void {
    this.currentFocusSubId = id;
    this.focusOnSub = true;
  }

  onMainBlur(): void {
    this.focusOnMain = false;
  }

  onSubBlur(): void {
    this.focusOnSub = false;
  }

  isMainSelected(id: number): boolean {
    return id === this.currentMainId;
  }

  isSubSelected(id: number): boolean {
    return id === this.currentSubId;
  }

  toggleFolding(): void {
    this.mainFolded = !this.mainFolded;
    this.changeOfFoldingState.next(this.mainFolded);
    this.changeDetectorRef.markForCheck();
  }

  mainNavigation(id: number, callbackFunction: () => void): void {
    this.currentMainId = id;
    this.changeOfMainIndex.next(this.currentMainId);
    callbackFunction();
  }

  subNavigation(id: number, callbackFunction: () => void): void {
    this.currentSubId = id;
    this.changeOfSubIndex.next(this.currentSubId);
    callbackFunction();
  }
}

