import React, { useState, useContext } from 'react';
import { Controller } from 'react-hook-form';

import { DataContext } from '../../context/dataContext';
import editIcon from '../../assets/editIcon.png';
import saveIcon from '../../assets/saveIcon.png';

export default function VenderTable({
  control,
  reset,
  reset2,
  control2,
  onApplicantSubmit,
}) {
  const [selectedVender, setSelectedVender] = useState();
  const [selectedApplicant, setSelectedApplicant] = useState();
  const [isEditOn, setEditOn] = useState(false);
  const [isApplicantEditOn, setApplicantEditOn] = useState(false);

  const { venderData } = useContext(DataContext);

  const venderRows = () => {
    return (
      <>
        {venderData?.map((item, venderIndex) => (
          <>
            <tr
              className={`${
                selectedVender === item?.id ? 'bg-light-blue' : ''
              }`}
            >
              <td
                className={`${
                  selectedVender === item?.id ? 'selected-border' : ''
                }`}
                onClick={() => {
                  setSelectedVender(item.id);
                }}
              >
                {!isEditOn || selectedVender !== item.id ? (
                  item.date
                ) : (
                  <div>
                    <Controller
                      control={control}
                      defaultValue={`${item.date.split('.')[2]}-${
                        item.date.split('.')[1]
                      }-${item.date.split('.')[0]}`}
                      name={`${selectedVender}-date`}
                      render={({ field }) => <input {...field} type="date" />}
                    />
                  </div>
                )}
              </td>
              <td
                colSpan={2}
                onClick={() => {
                  setSelectedVender(item.id);
                }}
              >
                {!isEditOn || selectedVender !== item.id ? (
                  item.pnr
                ) : (
                  <div>
                    <Controller
                      control={control}
                      defaultValue={item.pnr}
                      name={`${selectedVender}-pnr`}
                      render={({ field }) => <input {...field} type="text" />}
                    />
                  </div>
                )}
              </td>
              <td
                colSpan={3}
                onClick={() => {
                  setSelectedVender(item.id);
                }}
              >
                {!isEditOn || selectedVender !== item.id ? (
                  item?.routing
                ) : (
                  <div>
                    <Controller
                      control={control}
                      defaultValue={item?.routing}
                      name={`${selectedVender}-routing`}
                      render={({ field }) => <input {...field} type="text" />}
                    />
                  </div>
                )}
              </td>
              <td
                onClick={() => {
                  setSelectedVender(item.id);
                }}
              >
                {!isEditOn || selectedVender !== item.id ? (
                  item?.cabin
                ) : (
                  <div>
                    <Controller
                      control={control}
                      defaultValue={item?.cabin}
                      name={`${selectedVender}-cabin`}
                      render={({ field }) => <input {...field} type="text" />}
                    />
                  </div>
                )}
              </td>
              <td
                onClick={() => {
                  setSelectedVender(item.id);
                }}
              >
                {!isEditOn || selectedVender !== item.id ? (
                  item?.segment_Status
                ) : (
                  <div>
                    <Controller
                      control={control}
                      defaultValue={item?.segment_Status}
                      name={`${selectedVender}-segment_Status`}
                      render={({ field }) => <input {...field} type="text" />}
                    />
                  </div>
                )}
              </td>
              <td
                onClick={() => {
                  setSelectedVender(item.id);
                }}
              >
                {!isEditOn || selectedVender !== item.id ? (
                  item?.disruption
                ) : (
                  <div>
                    <Controller
                      control={control}
                      defaultValue={item?.disruption}
                      name={`${selectedVender}-disruption`}
                      render={({ field }) => <input {...field} type="text" />}
                    />
                  </div>
                )}
              </td>
              <td
                onClick={() => {
                  setSelectedVender(item.id);
                }}
              >
                +
              </td>
              <td
                onClick={() => {
                  setSelectedVender(item.id);
                }}
              >
                {!isEditOn || selectedVender !== item.id ? (
                  item?.ticket
                ) : (
                  <div>
                    <Controller
                      control={control}
                      defaultValue={item?.ticket}
                      name={`${selectedVender}-ticket`}
                      render={({ field }) => <input {...field} type="text" />}
                    />
                  </div>
                )}
              </td>
              <td>
                {isEditOn && selectedVender === item.id ? (
                  <button>
                    <img
                      src={saveIcon}
                      className="icon"
                      alt="icon"
                      onClick={() =>
                        setTimeout(() => {
                          setEditOn(false);
                          reset();
                        }, 100)
                      }
                    />
                  </button>
                ) : (
                  <img
                    src={editIcon}
                    onClick={() => {
                      setEditOn(true);
                      setSelectedVender(item.id);
                    }}
                    className="icon"
                    alt="icon"
                  />
                )}
              </td>
            </tr>
            {selectedVender === item.id ? (
              <>
                <tr>
                  <th className="selected-border">Departure Date</th>
                  <th>PNR</th>
                  <th>Flight no</th>
                  <th>Flight Times</th>
                  <th>Routing</th>
                  <th>Cabin class</th>
                  <th>Segment Status</th>
                  <th>Disruption type</th>
                  <th colSpan={2}>To be offered</th>
                  <th>Ticket</th>
                  <th></th>
                </tr>
                {item.applicants.map((person, index) => (
                  <tr className="bg-light-blue border-bottom">
                    <td
                      className={`${
                        index === item.applicants.length - 1
                          ? 'border-bottom'
                          : ''
                      } selected-border`}
                    >
                      {/* {person?.date} */}
                      {!isApplicantEditOn || selectedApplicant !== person.id ? (
                        person?.date
                      ) : (
                        <div>
                          <Controller
                            control={control2}
                            defaultValue={`${person.date.split('.')[2]}-${
                              person.date.split('.')[1]
                            }-${person.date.split('.')[0]}`}
                            name={`${selectedApplicant}-${venderIndex}-date`}
                            render={({ field }) => (
                              <input {...field} type="date" />
                            )}
                          />
                        </div>
                      )}
                    </td>
                    <td
                      className={`${
                        index === item.applicants.length - 1
                          ? 'border-bottom'
                          : ''
                      }`}
                    >
                      {!isApplicantEditOn || selectedApplicant !== person.id ? (
                        person?.pnr
                      ) : (
                        <div>
                          <Controller
                            control={control2}
                            defaultValue={person?.pnr}
                            name={`${selectedApplicant}-${venderIndex}-pnr`}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                        </div>
                      )}
                    </td>
                    <td
                      className={`${
                        index === item.applicants.length - 1
                          ? 'border-bottom'
                          : ''
                      }`}
                    >
                      {!isApplicantEditOn || selectedApplicant !== person.id ? (
                        person?.flight_no
                      ) : (
                        <div>
                          <Controller
                            control={control2}
                            defaultValue={person?.flight_no}
                            name={`${selectedApplicant}-${venderIndex}-flight_no`}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                        </div>
                      )}
                    </td>
                    <td
                      className={`${
                        index === item.applicants.length - 1
                          ? 'border-bottom'
                          : ''
                      }`}
                    >
                      {!isApplicantEditOn || selectedApplicant !== person.id ? (
                        person?.flight_times
                      ) : (
                        <div>
                          <Controller
                            control={control2}
                            defaultValue={person?.flight_times}
                            name={`${selectedApplicant}-${venderIndex}-flight_times`}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                        </div>
                      )}
                    </td>
                    <td
                      className={`${
                        index === item.applicants.length - 1
                          ? 'border-bottom'
                          : ''
                      }`}
                    >
                      {!isApplicantEditOn || selectedApplicant !== person.id ? (
                        person?.routing
                      ) : (
                        <div>
                          <Controller
                            control={control2}
                            defaultValue={person?.routing}
                            name={`${selectedApplicant}-${venderIndex}-routing`}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                        </div>
                      )}
                    </td>
                    <td
                      className={`${
                        index === item.applicants.length - 1
                          ? 'border-bottom'
                          : ''
                      }`}
                    >
                      {!isApplicantEditOn || selectedApplicant !== person.id ? (
                        person?.cabin
                      ) : (
                        <div>
                          <Controller
                            control={control2}
                            defaultValue={person?.cabin}
                            name={`${selectedApplicant}-${venderIndex}-cabin`}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                        </div>
                      )}
                    </td>
                    <td
                      className={`${
                        index === item.applicants.length - 1
                          ? 'border-bottom'
                          : ''
                      }`}
                    >
                      {!isApplicantEditOn || selectedApplicant !== person.id ? (
                        person?.segment_Status
                      ) : (
                        <div>
                          <Controller
                            control={control2}
                            defaultValue={person?.segment_Status}
                            name={`${selectedApplicant}-${venderIndex}-segment_Status`}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                        </div>
                      )}
                    </td>
                    <td
                      className={`${
                        index === item.applicants.length - 1
                          ? 'border-bottom'
                          : ''
                      }`}
                    >
                      {!isApplicantEditOn || selectedApplicant !== person.id ? (
                        person?.disruption
                      ) : (
                        <div>
                          <Controller
                            control={control2}
                            defaultValue={person?.disruption}
                            name={`${selectedApplicant}-${venderIndex}-disruption`}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                        </div>
                      )}
                    </td>
                    <td
                      className={`${
                        index === item.applicants.length - 1
                          ? 'border-bottom'
                          : ''
                      }`}
                      colSpan={2}
                    >
                      {person?.to_be_offered}
                    </td>
                    <td
                      className={`${
                        index === item.applicants.length - 1
                          ? 'border-bottom'
                          : ''
                      }`}
                    >
                      {!isApplicantEditOn || selectedApplicant !== person.id ? (
                        person?.ticket
                      ) : (
                        <div>
                          <Controller
                            control={control2}
                            defaultValue={person?.ticket}
                            name={`${selectedApplicant}-${venderIndex}-ticket`}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                        </div>
                      )}
                    </td>
                    <td
                      className={`${
                        index === item.applicants.length - 1
                          ? 'border-bottom'
                          : ''
                      }`}
                    >
                      {isApplicantEditOn && selectedApplicant === person.id ? (
                        // <button>
                        <img
                          src={saveIcon}
                          className="icon"
                          alt="icon"
                          onClick={() => {
                            onApplicantSubmit();
                            setTimeout(() => {
                              setApplicantEditOn(false);
                              reset2();
                            }, 100);
                          }}
                        />
                      ) : (
                        // {/* </button> */}
                        <img
                          src={editIcon}
                          onClick={() => {
                            setApplicantEditOn(true);
                            setSelectedApplicant(person.id);
                          }}
                          className="icon"
                          alt="icon"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </>
            ) : null}
          </>
        ))}
      </>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Departure Date</th>
            <th colSpan={2}>PNR</th>
            <th colSpan={3}>Routing</th>
            <th>Cabin Class</th>
            <th>Segment Status</th>
            <th>Disruption</th>
            <th>To be offered</th>
            <th>Ticket</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{venderRows()}</tbody>
      </table>
    </div>
  );
}
