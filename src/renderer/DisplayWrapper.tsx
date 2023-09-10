import { ReactNode, UIEvent } from 'react';

interface DisplayWrapperProps {
  children: ReactNode;
}

// TODO FIX THIS SHIT. IT NO WORKIE

export default function DisplayWrapper({ children }: DisplayWrapperProps) {
  let i = 0;

  const handleUIEvent = (e: UIEvent<HTMLDivElement>) => {
    // Do something
    console.log(e);
    e.preventDefault();
  };

  const handleScroll = (e: Event) => {
    i += 1;
    console.log(e);
  };

  window.addEventListener('onclick', handleScroll);

  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  return (
    <div onMouseDown={handleUIEvent}>
      {children}
      {i}
    </div>
  );
}
