import React, { createContext, useReducer } from 'react';
export const DataContext = createContext();

let initialState = [
  {
    id: 1,
    date: '11.10.2016',
    pnr: '2Q95DE',
    routing: 'LAX-AMS-VNO',
    cabin: 'C',
    segment_Status: 'HK 1',
    disruption: 'N',
    to_be_offered: '+',
    ticket: 'OK',
    applicants: [
      {
        id: 'A1',
        date: '11.10.2016',
        flight_no: 'BT343',
        flight_times: '1215-1305',
        pnr: '2Q95DE',
        routing: 'LAX-AMS-VNO',
        cabin: 'C',
        segment_Status: 'HK 1',
        disruption: 'N',
        to_be_offered: '+',
        ticket: 'OK',
      },
      {
        id: 'A5',
        date: '30.10.2016',
        flight_no: 'BT393',
        flight_times: '1230-2005',
        pnr: '2Q95AA',
        routing: 'LAX-CNH-VNO',
        cabin: 'C',
        segment_Status: 'HK 1',
        disruption: 'N',
        to_be_offered: '+',
        ticket: 'OK',
      },
    ],
  },
  {
    id: 2,
    date: '13.10.2016',
    pnr: '2Q95DA',
    routing: 'VNO-RIX-CDG-VNO',
    cabin: 'Y',
    segment_Status: 'TK 1',
    disruption: 'Y',
    to_be_offered: '+',
    ticket: 'OK',
    applicants: [
      {
        id: 'A3',
        date: '11.10.2016',
        flight_no: 'BT252',
        flight_times: '1245-1350',
        pnr: '2Q95AB',
        routing: 'VNO-RIX',
        cabin: 'C',
        segment_Status: 'HK 1',
        disruption: 'Y',
        to_be_offered: '+',
        ticket: 'OK',
      },
      {
        id: 'A6',
        date: '31.10.2016',
        flight_no: 'BT343',
        flight_times: '1215-1305',
        pnr: '2Q95FE',
        routing: 'LAX-MKI-VNO',
        cabin: 'C',
        segment_Status: 'HK 1',
        disruption: 'N',
        to_be_offered: '+',
        ticket: 'OK',
      },
    ],
  },
  {
    id: 3,
    date: '20.10.2016',
    pnr: '2Q95BE',
    routing: 'LAX-AMS-CDG',
    cabin: 'C',
    segment_Status: 'HK 1',
    disruption: 'N',
    to_be_offered: '+',
    ticket: 'OK',
    applicants: [
      {
        id: 'A5',
        date: '30.10.2016',
        flight_no: 'BT393',
        flight_times: '1230-2005',
        pnr: '2Q95AA',
        routing: 'LAX-CNH-VNO',
        cabin: 'C',
        segment_Status: 'HK 1',
        disruption: 'N',
        to_be_offered: '+',
        ticket: 'OK',
      },
      {
        id: 'A2',
        date: '21.04.2016',
        flight_no: 'BT555',
        flight_times: '2315-1305',
        pnr: '2Q95FF',
        routing: 'LAX-KKK-VNO',
        cabin: 'C',
        segment_Status: 'HK 1',
        disruption: 'N',
        to_be_offered: '+',
        ticket: 'OK',
      },
    ],
  },
  {
    id: 4,
    date: '20.06.2016',
    pnr: '2Q99MN',
    routing: 'LAX-AMS-VNO',
    cabin: 'Y',
    segment_Status: 'HK 1',
    disruption: 'Y',
    to_be_offered: '+',
    ticket: 'OK',
    applicants: [
      {
        id: 'A6',
        date: '31.10.2016',
        flight_no: 'BT343',
        flight_times: '1215-1305',
        pnr: '2Q95FE',
        routing: 'LAX-MKI-VNO',
        cabin: 'C',
        segment_Status: 'HK 1',
        disruption: 'N',
        to_be_offered: '+',
        ticket: 'OK',
      },
      {
        id: 'A10',
        date: '03.06.2016',
        flight_no: 'BT222',
        flight_times: '1015-1305',
        pnr: '2QAAA',
        routing: 'LAX-MKI-VNO',
        cabin: 'Y',
        segment_Status: 'HK 1',
        disruption: 'N',
        to_be_offered: '+',
        ticket: 'OK',
      },
    ],
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_VENDER':
      const updatedArray = state.map((item) =>
        ~~item.id === ~~action.payload.venderId
          ? {
              ...item,
              date: action.payload.elements.date,
              cabin: action.payload.elements.cabin,
              disruption: action.payload.elements.disruption,
              pnr: action.payload.elements.pnr,
              routing: action.payload.elements.routing,
              segment_Status: action.payload.elements.segment_Status,
              ticket: action.payload.elements.ticket,
            }
          : item
      );
      return updatedArray;
    case 'UPDATE_APPLICANT':
      const updatedFinalArray = state.map((vender1, index) => {
        if (~~index === ~~action.payload.venderIndex) {
          return {
            ...vender1,
            applicants: vender1.applicants.map((applicant) => {
              return applicant.id === action.payload.applicantId
                ? {
                    ...applicant,
                    date: action.payload.elements.date,
                    cabin: action.payload.elements.cabin,
                    disruption: action.payload.elements.disruption,
                    pnr: action.payload.elements.pnr,
                    routing: action.payload.elements.routing,
                    segment_Status: action.payload.elements.segment_Status,
                    ticket: action.payload.elements.ticket,
                    flight_times: action.payload.elements.flight_times,
                    flight_no: action.payload.elements.flight_no,
                  }
                : applicant;
            }),
          };
        } else return vender1;
      });
      return updatedFinalArray;
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [venderData, venderDispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider
      value={{
        venderData,
        venderDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
