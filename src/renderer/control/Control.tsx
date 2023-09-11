import { FaCirclePlus } from 'react-icons/fa6';
import Navbar from './navbar';

export default function () {
  return (
    <div>
      <Navbar />
      <div className="rounded-md bg-gray-300 m-4">
        <div className="flex flex-row justify-between align-middle">
          <p className="text-xl pl-3 py-4">Windows</p>
          <div className="pr-3 py-4 text-xl align-middle my-auto">
            <FaCirclePlus />
          </div>
        </div>
      </div>
    </div>
  );
}
