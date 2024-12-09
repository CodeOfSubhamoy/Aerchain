import React, { useState, useMemo, useEffect, useContext } from "react";
import data from "../data/frontendAssignment";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import TableHeader from "./TableHeader";
import AddModal from "./AddModal";
import { TableDataContext } from "../context/TableDataContext";

const TableComponent = () => {
  const [currentTableData, setCurrentTableData] = useState(data);
  const [selectedRow, setSelectedRow] = useState({});
  const [rowData, setRowData] = useState([]);
  const [openAddModal, setAddModalOpen] = useState(false);
  const { tableData, setTableData } = useContext(TableDataContext);
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      field: "tripId",
      flex: 2,
      cellStyle: { color: "#1976d2" },
    },
    { field: "transporter", flex: 1 },
    { field: "source", flex: 1 },
    { field: "destination", flex: 1 },
    { field: "phone", flex: 1 },
    { field: "ETA", flex: 0.5 },
    {
      field: "DistanceRemaining",
      flex: 1,
    },
    { field: "tripStatus", flex: 1 },
    { field: "tatStatus", flex: 1 },
  ]);
  const rowSelection = {
    mode: "singleRow",
    headerCheckbox: true,
    enableClickSelection: true,
  };
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      flex: 1,
      minWidth: 100,
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    };
  }, []);
  const createRowData = () => {
    let customRowData = [];
    currentTableData.map((value, index) => {
      const tatStatus = () => {
        if (value.tripEndTime) {
          if (
            value.etaDays <=
            new Date(value.tripEndTime).getDate() -
              new Date(value.tripStartTime).getDate()
          ) {
            return "Ontime";
          } else {
            return "Delayed";
          }
        } else {
          if (
            value.etaDays >
            new Date(value.lastPingTime).getDate() -
              new Date(value.tripStartTime).getDate()
          ) {
            return "Delayed";
          } else {
            return "Others";
          }
        }
      };
      let eachRow = {
        tripId: value.tripId,
        transporter: value.transporter,
        source: value.source,
        destination: value.dest,
        phone: value.phoneNumber,
        ETA: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() + value.etaDays
        )
          .toISOString()
          .split("T")[0],
        DistanceRemaining: value.distanceRemaining,
        tripStatus: value.currenStatus,
        tatStatus: tatStatus(),
      };
      customRowData.push(eachRow);
    });
    //setTableData(customRowData);
    setRowData(customRowData);
  };
  const updateTabledata = () => {
    setRowData([...rowData, tableData[tableData.length - 1]]);
  };
  useEffect(() => {
    updateTabledata();
  }, [tableData]);
  useEffect(() => {
    createRowData();
  }, []);

  const onSelectionChanged = (event) => {
    setSelectedRow(event.api.getSelectedRows()[0]);
  };
  return (
    <div>
      <TableHeader
        selectedRow={selectedRow}
        setAddModalOpen={setAddModalOpen}
      />
      <div
        className="ag-theme-quartz table" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowSelection={rowSelection}
          onSelectionChanged={onSelectionChanged}
        />
      </div>
      {openAddModal && (
        <AddModal
          openAddModal={openAddModal}
          setAddModalOpen={setAddModalOpen}
        />
      )}
    </div>
  );
};

export default TableComponent;
