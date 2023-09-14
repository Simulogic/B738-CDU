import { RootState } from 'renderer/store';
import { useAppSelector } from 'renderer/store/hooks';

export default function () {
  const isfdData = useAppSelector((state: RootState) => state.ISFDData);
  return (
    <g id="AirspeedIndicator" style={{ display: 'inline' }}>
      <defs>
        <rect
          x="-3.0928428"
          y="572.1759"
          width="159.2814"
          height="111.34234"
          id="airspeedValueBox"
        />
      </defs>

      <rect
        style={{
          display: 'inline',
          fill: '#797979',
          fillOpacity: '1',
          stroke: '#000000',
          strokeWidth: '0.999368',
          strokeDasharray: 'none',
          strokeOpacity: '1',
        }}
        id="AirspeedIndicatorStrip"
        width="43.287304"
        height="317.76926"
        x="-0.15601641"
        y="-0.34885794"
      />
      <rect
        style={{
          fill: '#000000',
          stroke: '#ffffff',
          strokeWidth: '0.494944',
          strokeDasharray: 'none',
          strokeOpacity: '1',
        }}
        id="AirspeedIndicatorBox"
        width="53.609268"
        height="48.202332"
        x="-2.6726928"
        y="141.509"
        ry="0"
      />

      <g id="SmallLines">
        <path
          style={{
            fill: '#797979',
            fillOpacity: '0.619469',
            stroke: '#ffffff',
            strokeWidth: '0.499999',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          d="m 36.602434,284.0896 c 5.995228,0 5.995228,0 5.995228,0"
          id="path15"
        />
        <path
          style={{
            fill: '#797979',
            fillOpacity: '0.619469',
            stroke: '#ffffff',
            strokeWidth: '0.499999',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          d="m 36.602434,224.45287 c 5.784869,0 5.679689,0 5.679689,0"
          id="path16"
        />
        <path
          style={{
            fill: '#797979',
            fillOpacity: '0.619469',
            stroke: '#ffffff',
            strokeWidth: '0.499999',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          d="m 38.180126,106.12603 h 4.312356"
          id="path17"
        />
        <path
          style={{
            fill: '#797979',
            fillOpacity: '0.619469',
            stroke: '#ffffff',
            strokeWidth: '0.499999',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          d="m 37.65423,46.384119 h 4.733073"
          id="path18"
        />
      </g>

      <g id="BigLines">
        <path
          style={{
            fill: '#797979',
            fillOpacity: '0.619469',
            stroke: '#ffffff',
            strokeWidth: '0.499999',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          d="M 30.716286,254.35027 H 42.492884"
          id="path23"
        />
        <path
          style={{
            fill: '#797979',
            fillOpacity: '0.619469',
            stroke: '#ffffff',
            strokeWidth: '0.499999',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          d="M 30.716286,314.44734 H 42.492884"
          id="path24"
        />
        <path
          style={{
            fill: '#797979',
            fillOpacity: '0.619469',
            stroke: '#ffffff',
            strokeWidth: '0.499999',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          d="M 30.716286,194.73882 H 42.371475"
          id="path22"
        />
        <path
          style={{
            fill: '#797979',
            fillOpacity: '0.619469',
            stroke: '#ffffff',
            strokeWidth: '0.499999',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          d="m 30.47347,16.268704 c 11.169557,0 11.412373,0 11.412373,0"
          id="path19"
        />

        <path
          style={{
            fill: '#797979',
            fillOpacity: '0.619469',
            stroke: '#ffffff',
            strokeWidth: '0.499999',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          d="M 30.594876,76.244375 H 42.735701"
          id="path20"
        />
        <path
          style={{
            fill: '#797979',
            fillOpacity: '0.619469',
            stroke: '#ffffff',
            strokeWidth: '0.499999',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          d="M 30.47347,135.85582 H 42.250068"
          id="path21"
        />
      </g>

      {airspeedTextBoxRenderer(isfdData.data.IAS)}
    </g>
  );
}

/**
 * Renders the Current IAS text in the black box
 * @param speed The IAS
 * @returns JSX object containing a SVG text element
 */
const airspeedTextBoxRenderer = (speed: number) => {
  return (
    <text
      // xml:space="preserve"
      // transform="scale(0.26458333)"
      x="46"
      y="178"
      width="100"
      id="text24"
      textAnchor="right"
      key={speed}
      style={{
        //   shapeInside: 'url(#rect24)',
        fill: '#FFFFFF',
        fontFamily: 'PMDG',
        fontStretch: 'expanded',
        fontSize: '1.8em',
        textAlign: 'right',
        textAnchor: 'end',
      }}
    >
      {speed}
    </text>
  );
};
