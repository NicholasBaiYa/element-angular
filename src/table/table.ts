import { Component } from '@angular/core'
import { TableColumns } from './table.interface'
import { ElTableProps } from './table.props'

@Component({
  selector: 'el-table',
  template: `
    <div class="el-table" [class.el-table--enable-row-transition]="true"
      [class.el-table--fit]="fit" [class.el-table--striped]="stripe"
      [class.el-table--border]="border" [class.el-table--hidden]="false"
      [class.el-table--fluid-height]="maxHeight" [class.el-table--enable-row-hover]="isComplex"
      (mouseleave)="mouseLeaveHandle($event)">
      <div class="hidden-columns"><slot></slot></div>
      <div class="el-table__header-wrapper" *ngIf="showHeader">
        <el-table-header [model]="columns" [layout]="layout" [border]="border"
          [default-sort]="defaultSort" [ngStyle]="{ width: layout.bodyWidth ? layout.bodyWidth + 'px' : '' }">
        </el-table-header>
      </div>
      <!--<div class="el-table__body-wrapper" style="">-->
        <!--<table-body [context]="context" [model]="model" [stripe]="stripe"-->
          <!--[layout]="layout" [row-class-name]="rowClassName" [row-style]="rowStyle"-->
          <!--[highlight]="highlightCurrentRow" [ngStyle]="{ width: bodyWidth }">-->
        <!--</table-body>-->
        <!--<div [ngStyle]="{ width: bodyWidth }" class="el-table__empty-block" *ngIf="!data || data.length === 0">-->
          <!--<span class="el-table__empty-text">-->
            <!--<slot name="empty">-->
              <!--{{ emptyText || t('el.table.emptyText') }}-->
            <!--</slot>-->
          <!--</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="el-table__footer-wrapper"*ngIf="showSummary" *ngIf="data && data.length > 0">-->
        <!--<table-footer [model]="model"  [ngStyle]="{ width: layout.bodyWidth ? layout.bodyWidth + 'px' : '' }"-->
          <!--[sum-text]="sumText || t('el.table.sumText')" [summary-method]="summaryMethod"-->
          <!--[default-sort]="defaultSort" [layout]="layout" [border]="border">-->
        <!--</table-footer>-->
      <!--</div>-->
      <!--<div class="el-table__fixed" *ngIf="fixedColumns.length > 0"-->
        <!--[ngStyle]="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }"-->
        <!--[style]="fixedHeight">-->
        <!--<div class="el-table__fixed-header-wrapper" *ngIf="showHeader">-->
          <!--<table-header [model]="model" fixed="left" [border]="border" [layout]="layout"-->
            <!--[ngStyle]="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }"></table-header>-->
        <!--</div>-->
        <!--<div class="el-table__fixed-body-wrapper" [style]="fixedBodyHeight"-->
          <!--[ngStyle]="{ top: layout.headerHeight + 'px' }">-->
          <!--<table-body [model]="model" fixed="left" [stripe]="stripe"-->
            <!--[layout]="layout" [highlight]="highlightCurrentRow"-->
            <!--[row-class-name]="rowClassName" [row-style]="rowStyle"-->
            <!--[ngStyle]="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }">-->
          <!--</table-body>-->
        <!--</div>-->
        <!--<div class="el-table__fixed-footer-wrapper"*ngIf="showSummary && data && data.length > 0">-->
          <!--<table-footer [model]="model" fixed="left" [border]="border"-->
            <!--[sum-text]="sumText" [summary-method]="summaryMethod" [layout]="layout"-->
            <!--[ngStyle]="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }"></table-footer>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="el-table__fixed-right" *ngIf="rightFixedColumns.length > 0"-->
        <!--[ngStyle]="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '',-->
          <!--right: layout.scrollY ? (border ? layout.gutterWidth : (layout.gutterWidth || 1)) + 'px' : ''}"-->
        <!--[style]="fixedHeight">-->
        <!--<div class="el-table__fixed-header-wrapper" *ngIf="showHeader">-->
          <!--<table-header [model]="model" fixed="right" [border]="border" [layout]="layout"-->
            <!--[ngStyle]="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }"></table-header>-->
        <!--</div>-->
        <!--<div class="el-table__fixed-body-wrapper" [style]="fixedBodyHeight"-->
          <!--[ngStyle]="{ top: layout.headerHeight + 'px' }">-->
          <!--<table-body [model]="model" fixed="right" [stripe]="stripe"-->
            <!--[layout]="layout" [row-class-name]="rowClassName"-->
            <!--[row-style]="rowStyle" [highlight]="highlightCurrentRow"-->
            <!--[ngStyle]="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }">-->
          <!--</table-body>-->
        <!--</div>-->
        <!--<div class="el-table__fixed-footer-wrapper" *ngIf="showSummary data && data.length > 0">-->
          <!--<table-footer [model]="model" fixed="right" [border]="border"-->
            <!--[sum-text]="sumText" [summary-method]="summaryMethod" [layout]="layout"-->
            <!--[ngStyle]="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }"></table-footer>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="el-table__fixed-right-patch" *ngIf="rightFixedColumns.length > 0"-->
        <!--[ngStyle]="{ width: layout.scrollY ? layout.gutterWidth + 'px' : '0', height: layout.headerHeight + 'px' }"></div>-->
      <!--<div class="el-table__column-resize-proxy" *ngIf="resizeProxyVisible"></div>-->
    </div>
  `,
})
export class ElTable extends ElTableProps {
  
  columns: TableColumns[] = []
  layout: any = {}
  
  constructor(
  ) {
    super()
  }
  
  mouseLeaveHandle(): void {
  
  }
  
  updateColumns(columns: TableColumns): void {
    console.log(columns)
    this.columns.push(columns)
  }
  
  
}
