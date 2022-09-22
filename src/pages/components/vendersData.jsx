import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { DataContext } from '../../context/dataContext';
import VenderTable from './venderTable';

export default function VendersData() {
  const { venderDispatch } = useContext(DataContext);

  const { handleSubmit, control, reset } = useForm();
  const {
    // handleSubmit: handleApplicantSubmit,
    control: control2,
    reset: reset2,
    getValues,
  } = useForm();

  const onVenderSubmit = (data) => {
    const venderId = Object.keys(data)[0].split('-')[0];
    let elements = {
      cabin: data[`${venderId}-cabin`],
      disruption: data[`${venderId}-disruption`],
      pnr: data[`${venderId}-pnr`],
      routing: data[`${venderId}-routing`],
      segment_Status: data[`${venderId}-segment_Status`],
      ticket: data[`${venderId}-ticket`],
    };
    const finalData = {
      venderId: venderId,
      elements: elements,
    };
    venderDispatch({ type: 'UPDATE_VENDER', payload: finalData });
  };

  const onApplicantSubmit = () => {
    const data = getValues();
    const applicantId = Object.keys(data)[0].split('-')[0];
    const venderIndex = Object.keys(data)[0].split('-')[1];
    let elements = {
      cabin: data[`${applicantId}-${venderIndex}-cabin`],
      disruption: data[`${applicantId}-${venderIndex}-disruption`],
      pnr: data[`${applicantId}-${venderIndex}-pnr`],
      routing: data[`${applicantId}-${venderIndex}-routing`],
      segment_Status: data[`${applicantId}-${venderIndex}-segment_Status`],
      ticket: data[`${applicantId}-${venderIndex}-ticket`],
      flight_no: data[`${applicantId}-${venderIndex}-flight_no`],
      flight_times: data[`${applicantId}-${venderIndex}-flight_times`],
    };
    const finalData = {
      applicantId: applicantId,
      venderIndex: venderIndex,
      elements: elements,
    };
    venderDispatch({ type: 'UPDATE_APPLICANT', payload: finalData });
  };

  return (
    <div className="vender-container">
      <div className="venter-container-header">
        <div className="left-div">
          <p className="text-light-gray">Status</p>
          <p className="text-lg text-light-gray font-medium">VIP 28991100</p>
        </div>
        <div className="right-div">
          <div>
            <p className="text-light-gray">Gift Box</p>
            <div className="right-subdiv text-gray">
              <div>
                <p>Business upgrade</p>
                <p>Baggage</p>
              </div>
              <div>
                <p>Sport equipment</p>
                <p>Meal x2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onVenderSubmit)}>
        <VenderTable
          control={control}
          reset={reset}
          control2={control2}
          reset2={reset2}
          onApplicantSubmit={onApplicantSubmit}
        />
      </form>
    </div>
  );
}
