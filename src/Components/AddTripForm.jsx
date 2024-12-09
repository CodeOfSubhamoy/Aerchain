import React, { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import data from "../data/frontendAssignment";
import FormHelperText from "@mui/material/FormHelperText";
import { TableDataContext } from "../context/TableDataContext";

const AddTripForm = ({ setAddModalOpen, open }) => {
  const [transporter, setTransporter] = useState(null);
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [phone, setPhone] = useState(null);
  const [trip, setTrip] = useState(null);
  const [tripError, setTripError] = useState(false);
  const [sourceError, setSourceError] = useState(false);
  const [destError, setDestError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [transporterList, setTransporterList] = useState(false);
  const [formError, setFormError] = useState(false);
  const { tableData, setTableData } = useContext(TableDataContext);
  const [formData, setFormData] = useState({
    tripId: "",
    transporter: "",
    source: "",
    destination: "",
    phone: "",
  });
  useEffect(() => {
    populateTransporter();
  }, []);
  const populateTransporter = () => {
    let transporterList = [];
    data.map((value, index) => {
      let eachTransporter = {
        value: value.transporter,
        label: value.transporter,
      };
      transporterList.push(eachTransporter);
    });
    const finalList = transporterList.filter(
      (obj, index, self) =>
        index === self.findIndex((t) => t.value === obj.value)
    );
    setTransporterList(finalList);
  };
  const handleTripIDChange = (e) => {
    setFormError(false);
    let numberRegex = /^\d+$/;
    if (
      !numberRegex.test(Number(e.target.value)) &&
      e.target.name == "tripId" &&
      e.target.value !== ""
    ) {
      setTripError(true);
    } else {
      setTripError(false);
      setTrip(e.target.value);
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleTransSelect = (optionvalue, key) => {
    setFormError(false);
    setTransporter(optionvalue);
    setFormData({ ...formData, [key]: optionvalue });
  };
  const handleSourceChange = (e) => {
    setFormError(false);
    let sourceRegex = /^[a-zA-Z]+$/;
    if (
      !sourceRegex.test(e.target.value) &&
      e.target.name == "source" &&
      e.target.value !== ""
    ) {
      setSourceError(true);
    } else {
      setSourceError(false);
      setSource(e.target.value);
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleDestinationChange = (e) => {
    setFormError(false);
    let destRegex = /^[a-zA-Z]+$/;
    if (
      !destRegex.test(e.target.value) &&
      e.target.name == "destination" &&
      e.target.value !== ""
    ) {
      setDestError(true);
    } else {
      setDestError(false);
      setDestination(e.target.value);
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };
  const handlePhoneChange = (e) => {
    setFormError(false);
    let phoneRegex = /^[6-9]\d{9}$/;
    if (
      !phoneRegex.test(e.target.value) &&
      e.target.value.length != 10 &&
      e.target.name == "phone" &&
      e.target.value !== ""
    ) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
      setPhone(e.target.value);
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (trip != null || trip != undefined) &&
      (source != null || source != undefined) &&
      (destination != null || destination != undefined) &&
      (phone != null || phone != undefined) &&
      (transporter != null || transporter != undefined)
    ) {
      const newUuid = uuid();
      const obj = {
        _id: newUuid,
        tripId: formData.tripId,
        transporter: formData.transporter,
        tripStartTime: "2024-02-07T10:59:56Z",
        currentStatusCode: "BK",
        currenStatus: "Booked",
        phone: Number(formData.phone),
        etaDays: 1,
        distanceRemaining: 716,
        tripEndTime: "",
        source: formData.source,
        sourceLatitude: 8.6,
        sourceLongitude: 73.4,
        destination: formData.destination,
        destLatitude: 36.3,
        destLongitude: 95.5,
        lastPingTime: "",
        createdAt: new Date(),
      };
      setTableData([...tableData, obj]);
      setAddModalOpen(!open);
    } else {
      setFormError(true);
    }
  };
  return (
    <div className="AddtripContainer">
      <form className="AddForm">
        <FormControl>
          <InputLabel htmlFor="component-outlined">
            <span className="starIcon">*</span>Trip ID
          </InputLabel>
          <OutlinedInput
            name="tripId"
            error={tripError}
            id="component-outlined"
            defaultValue=""
            label="tripId"
            required
            onChange={handleTripIDChange}
          />
          {tripError && (
            <FormHelperText error id="accountId-error">
              Invalid Trip Id
            </FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-select-currency"
            select
            defaultValue=""
            label="Transporter"
            required
          >
            {transporterList &&
              transporterList.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  onClick={() => handleTransSelect(option.value, "transporter")}
                >
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">
            <span className="starIcon">*</span>Source
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue=""
            name="source"
            label="source"
            required
            onChange={handleSourceChange}
          />
          {sourceError && (
            <FormHelperText error id="accountId-error">
              Invalid Source
            </FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">
            <span className="starIcon">*</span>Destination
          </InputLabel>
          <OutlinedInput
            name="destination"
            id="component-outlined"
            defaultValue=""
            label="destination"
            required
            onChange={handleDestinationChange}
          />
          {destError && (
            <FormHelperText error id="accountId-error">
              Invalid Destination
            </FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">
            <span className="starIcon">*</span>Phone
          </InputLabel>
          <OutlinedInput
            name="phone"
            id="component-outlined"
            defaultValue=""
            label="phone"
            required
            onChange={handlePhoneChange}
          />
          {phoneError && (
            <FormHelperText error id="accountId-error">
              Invalid phone number
            </FormHelperText>
          )}
        </FormControl>
      </form>
      {formError && (
        <FormHelperText error id="form-error">
          Please fill all the fields
        </FormHelperText>
      )}
      <div className="modalContainer">
        <Button
          className="AddTripBtn"
          variant="contained"
          onClick={handleSubmit}
        >
          Add trip
        </Button>
      </div>
    </div>
  );
};

export default AddTripForm;
