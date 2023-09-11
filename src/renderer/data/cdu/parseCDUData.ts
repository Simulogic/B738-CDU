import { updateScreens } from '../../store/cduData';
import { RootState } from 'renderer/store';
import sampleData from '../../store/defaultData/cduDefault';
import { useAppDispatch, useAppSelector } from 'renderer/store/hooks';

export default function parseCDUData() {
  const cduData = useAppSelector((state: RootState) => state.cduData);
  const dispatch = useAppDispatch();

  dispatch(updateScreens(sampleData));
}
