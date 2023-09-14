import AirspeedIndicator from './AirspeedIndicator';
import Altimeter from './Altimeter';
import FlightModeAnnunciator from './FlightModeAnnunciator';
import AttitudeIndicator from './attitudeIndicator';
import './ISFD.css';
import { useAppSelector } from 'renderer/store/hooks';
import { RootState } from 'renderer/store';

export default function () {
  return (
    <div className="ISFD">
      <svg viewBox="0 0 317.49999 317.5">
        <AttitudeIndicator></AttitudeIndicator>
        <FlightModeAnnunciator></FlightModeAnnunciator>
        <AirspeedIndicator></AirspeedIndicator>
        <Altimeter></Altimeter>
        <div className="compass"></div>
      </svg>
      {/* The next line is not exactly a FMA, however it is the most logical way to name the top part indicator QNH and app mode */}
    </div>
  );
}
