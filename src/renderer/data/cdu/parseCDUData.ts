import { updateScreens } from '../../store/cdu/cduData';
import { RootState } from 'renderer/store';
import sampleData from '../../store/defaultData/cduDefault';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export default function parseCDUData(data: any) {
  const dispatch = useAppDispatch();

  console.log('parsing data: ', data);

  dispatch(updateScreens(sampleData));
}
