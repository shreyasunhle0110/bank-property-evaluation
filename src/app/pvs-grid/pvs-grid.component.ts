import { Component } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { DataService } from '../service/DataService';

@Component({
  selector: 'app-pvs-grid',
  templateUrl: './pvs-grid.component.html',
  styleUrls: ['./pvs-grid.component.css']
})
export class PVSGridComponent {
  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;
  rowData !: any[];
  columnDefs: ColDef[] = [
    { field: 'referenceNumber', headerName: 'Reference' },
    { field: 'receivedOn', headerName: 'Received On' },
    { field: 'customerName', headerName: 'Borrowers name' },
    { field: 'fosReference', headerName: 'FOS Ref' },
    { field: 'createdOn', headerName: 'Created On' },
    { field: 'modifiedOn', headerName: 'Modified On' }
  ];
  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.dataService.getRowData().subscribe(data => {
      this.rowData = data;
    });
  }

  onGridReady(params : GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
