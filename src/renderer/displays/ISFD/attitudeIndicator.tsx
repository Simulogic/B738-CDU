import Glideslope from './Glideslope';
import Localiser from './Localiser';

export default function () {
  return (
    <g>
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath13">
          <rect
            style={{
              display: 'inline',
              fill: '#000000',
              fillOpacity: '0.310881',
              stroke: '#ffffff',
              strokeWidth: '0',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            id="AHRSClip"
            width="203.51819"
            height="231.62616"
            x="45.254303"
            y="32.582802"
            transform="scale(1,-1)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath14">
          <rect
            style={{
              display: 'inline',
              fill: '#000000',
              fillOpacity: '0.310881',
              stroke: '#ffffff',
              strokeWidth: '0',
              strokeDasharray: 'none',
              strokeOpacity: '1',
            }}
            id="AHRSClip"
            width="203.51819"
            height="231.62616"
            x="45.254303"
            y="32.582802"
            transform="scale(1,-1)"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clipPath14)" transform="scale(1,-1)">
        <rect
          style={{
            fill: '#6fbedc',
            fillOpacity: '1',
            stroke: 'none',
            strokeWidth: '1.7707',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          id="rect11"
          width="712.20288"
          height="374.57828"
          x="-209.40454"
          y="-209.90129"
          // x="-42.40023"
          // y="-344.89737"
          // clipPath="url(#clipPath13)"
        />
        {/* <use clipPath="url(#AHRSClip)" href="#rect11" fill="red" /> */}
        <rect
          style={{
            //   display: 'none',
            fill: '#b59570',
            fillOpacity: '1',
            stroke: 'none',
            strokeWidth: '0.499999',
            strokeDasharray: 'none',
            strokeOpacity: '1',
          }}
          id="rect12"
          width="388.56329"
          height="180.99202"
          x="-42.40023"
          y="-344.89737"
        />
      </g>

      {/* <use clipPath="url(#AHRSClip)" href="#rect12" fill="red" /> */}
      {/* <rect
        style={{
          display: 'inline',
          fill: '#000000',
          fillOpacity: '0.310881',
          stroke: '#ffffff',
          strokeWidth: '0',
          strokeDasharray: 'none',
          strokeOpacity: '1',
        }}
        id="rect6"
        width="203.51819"
        height="231.62616"
        x="45.254303"
        y="32.582802"
      /> */}
      <path
        style={{
          fill: '#000000',
          fillOpacity: '1',
          stroke: '#ffffff',
          strokeWidth: '0.5',
          strokeDasharray: 'none',
          strokeOpacity: '1',
        }}
        d="m 82.267393,159.84708 v 9.37723 H 119.0686 v 13.4466 h 7.07716 v -22.29304 z"
        id="path6"
      />
      <path
        style={{
          fill: '#000000',
          fillOpacity: '1',
          stroke: '#ffffff',
          strokeWidth: '0.5',
          strokeDasharray: 'none',
          strokeOpacity: '1',
        }}
        d="m 213.52604,159.96651 v 9.37727 h -36.8009 v 13.44668 h -7.0771 V 160.4973 Z"
        id="path6-6"
      />
      <rect
        style={{
          fill: '#000000',
          fillOpacity: '1',
          stroke: '#ffffff',
          strokeWidth: '0.499999',
          strokeDasharray: 'none',
          strokeOpacity: '1',
        }}
        id="rect7"
        width="11.631154"
        height="12.782753"
        x="141.9922"
        y="158.57524"
      />
      <Glideslope></Glideslope>
      <Localiser></Localiser>
      {/* <rect
        style={{
          fill: '#6fbedc',
          fillOpacity: '1',
          stroke: 'none',
          strokeWidth: '1.7707',
          strokeDasharray: 'none',
          strokeOpacity: '1',
        }}
        id="rect11"
        width="712.20288"
        height="374.57828"
        x="-209.40454"
        y="-209.90129"
      />
      <rect
        style={{
          fill: '#b59570',
          fillOpacity: '1',
          stroke: 'none',
          strokeWidth: '0.499999',
          strokeDasharray: 'none',
          strokeOpacity: '1',
        }}
        id="rect12"
        width="388.56329"
        height="180.99202"
        x="-42.40023"
        y="-344.89737"
        transform="scale(1,-1)"
      /> */}
    </g>
  );
}
