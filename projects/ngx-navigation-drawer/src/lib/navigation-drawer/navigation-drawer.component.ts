import { Component, ChangeDetectorRef, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { I_NavigationDrawerItem } from '../navigation-drawer-item';



/**
 *
 */
@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationDrawerComponent {

  @Input() mainNavigationDrawerItems: I_NavigationDrawerItem[] = [];
  @Input() subNavigationDrawerItems: I_NavigationDrawerItem[] = [];
  @Input() mainFolded = false;
  @Input() subFolded = true;
  @Input() enableMainFolding = true;
  @Input() enableSubFolding = true;
  @Input() currentMainId = 1;
  @Input() currentSubId = 11;

  focusOnSub: boolean;
  focusOnMain: boolean;
  currentFocusMainId: number;
  currentFocusSubId: number;
  changeOfMainFoldingState = new Subject<boolean>();
  changeOfSubFoldingState = new Subject<boolean>();
  changeOfMainIndex = new Subject<number>();
  changeOfSubIndex = new Subject<number>();

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

  getSubItemsForMainId(mainId: number): I_NavigationDrawerItem[] {
    return this.subNavigationDrawerItems.filter(item => item.parentId === mainId);
  }

  getSubItemForIds(mainId: number, subId: number): I_NavigationDrawerItem | undefined {
    const subItems = this.getSubItemsForMainId(mainId);
    return subItems.find(item => item.id === subId);
  }

  getItemForMainId(id: number): I_NavigationDrawerItem | undefined {
    return this.mainNavigationDrawerItems.find(item => item.id === id);
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

  toggleFoldingMain(): void {
    this.mainFolded = !this.mainFolded;
    this.changeOfMainFoldingState.next(this.mainFolded);
    this.changeDetectorRef.markForCheck();
  }

  toggleFoldingSub(): void {
    this.subFolded = !this.subFolded;
    this.changeOfSubFoldingState.next(this.subFolded);
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

