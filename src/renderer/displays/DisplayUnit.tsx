import { useParams } from 'react-router-dom';
import ISFD from './ISFD/ISFD';

export default function DisplayUnit() {
  const params = useParams();
  const { location } = params;
  switch (location) {
    // Lets check firstly what display location is being requested
    case 'capt_outer':
      return <div>Capt Outer</div>;
    case 'capt_inner':
      return <div>Capt Inner</div>;
    case 'fo_inner':
      return <div>FO Inner</div>;
    case 'fo_outer':
      return <div>FO Outer</div>;
    case 'eicas_upper':
      return <div>Eicas Upper</div>;
    case 'eicas_lower':
      return <div>Eicas Lower</div>;
    case 'isfd':
      return ISFD();
    default:
      break;
  }
  return <div>displayUnit</div>;
}
