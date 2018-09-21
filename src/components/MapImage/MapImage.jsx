import React from 'react';
import PropTypes from 'prop-types';

const MapImage = ({ tablesRect }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="100%"
    height="100%"
    viewBox="0 0 1005 766"
  >
    <g fill="none" fillRule="evenodd">
      <g fill="#E0E0E0" transform="translate(239 116)">
        {tablesRect}
      </g>
      <g stroke="#7D92A9">
        <path
          strokeWidth="8"
          d="M287.827 136.938l428.398-36.38v147.697h150.432v417.377H437.251V626.45H201.954v39.182h-78.557V294.876l65.799-8.948V232.4h98.63z"
        />
        <path
          strokeWidth="4"
          d="M714 665.903V576M715 542.903v-40.159h150.967M684.116 574.256v25.645h28.761M684.304 542.785v-132.08M684.292 422.544H531.387M714.287 240.712H580.254v22.632M621.95 241.054v127.782M580.154 290.224v23.86M580.102 300.21h42.07M579.995 340.678v28.38h56.57M684.073 378.6v-9.622"
        />
        <path strokeWidth="3" d="M663.07 369.333h50.89V252.118" />
        <path strokeWidth="4" d="M531.262 341.2v107.53h-91.717v-53.766" />
        <path
          strokeWidth="4"
          d="M439.9 367.93v-7.702h90.436M531.087 314.393v-7.68h48.65M438.79 530.332l.806-79.782M439.24 127.035v188.548h-35.43M403.064 220.456h35.611M289.91 236.14v87.086M190.614 267.24h98.813M124.394 487.9h23.976M180.711 487.212h19.248V625.59M290 438.364V350M390.944 359.901H190.47M191 288v74M290.776 219.844h83.457v31.128"
        />
        <path strokeWidth="5" d="M289.599 316.804h84.582V288.73" />
        <path
          strokeWidth="4"
          d="M290 254h56.467M290 286h56.467M346.645 247.637v11.887M346.581 280.59v10.59M346.669 310.934v6.114M346.661 220.508v5.768"
        />
        <path d="M288.233 438.614h102.485v-78.922M189.767 361.618h-64.209" />
      </g>
      <path
        fill="#484545"
        d="M346.176 177h-2.46l-1.5-2.35-.37.5V177h-2.02v-6.67h2.02v2.5l1.75-2.5h2.47l-2.52 3.1 2.63 3.57zm2.808 0h-2.02v-6.67h2.02V177zm4.959 0h-2.02v-4.91h-1.79v-1.76h5.59v1.76h-1.78V177zm6.038.12c-2.09 0-3.67-1.4-3.67-3.45 0-2.06 1.58-3.45 3.67-3.45 1.75 0 2.63 1.02 3.03 1.94l-1.74.81c-.17-.52-.69-.97-1.29-.97-.97 0-1.62.74-1.62 1.67 0 .93.65 1.67 1.62 1.67.6 0 1.12-.45 1.29-.97l1.74.8c-.39.89-1.28 1.95-3.03 1.95zM370.5 177h-2.02v-2.55h-2.39V177h-2.02v-6.67h2.02v2.36h2.39v-2.36h2.02V177zm6.569 0h-5.06v-6.67h5.06v1.76h-3.04v.66h2.97v1.76h-2.97v.73h3.04V177zm7.748 0h-1.94l-2.46-3.38V177h-2.02v-6.67h2.08l2.32 3.16v-3.16h2.02V177zM323.289 405.12c-2.02 0-3.67-1.32-3.67-3.45 0-2.14 1.65-3.45 3.67-3.45 1.59 0 2.51.88 2.93 1.74l-1.7.87c-.19-.41-.63-.83-1.23-.83-.97 0-1.62.74-1.62 1.67 0 .93.65 1.67 1.62 1.67.38 0 .83-.14 1.04-.3v-.24h-1.24v-1.76h3.25v2.73c-.74.82-1.74 1.35-3.05 1.35zm8.928-.12h-4.55v-6.67h2.02v4.91h2.53V405zm7.979 0h-2.29l-.24-.78h-2.4l-.24.78h-2.29l2.46-6.67h2.54l2.46 6.67zm-3.07-2.54l-.66-2.15-.66 2.15h1.32zm6.448 2.66c-1.42 0-2.39-.42-3.1-1.06l1.05-1.5c.5.48 1.25.86 2.15.86.38 0 .74-.1.74-.36 0-.21-.4-.28-.94-.37-1.1-.2-2.78-.48-2.78-2.25 0-1.13.94-2.21 2.77-2.21 1.09 0 2.07.31 2.83.93l-1.08 1.43a3.37 3.37 0 0 0-1.96-.66c-.4 0-.51.13-.51.3 0 .21.42.29.98.4 1.1.21 2.73.53 2.73 2.17 0 1.47-1.09 2.32-2.88 2.32zm6.559 0c-1.42 0-2.39-.42-3.1-1.06l1.05-1.5c.5.48 1.25.86 2.15.86.38 0 .74-.1.74-.36 0-.21-.4-.28-.94-.37-1.1-.2-2.78-.48-2.78-2.25 0-1.13.94-2.21 2.77-2.21 1.09 0 2.07.31 2.83.93l-1.08 1.43a3.37 3.37 0 0 0-1.96-.66c-.4 0-.51.13-.51.3 0 .21.42.29.98.4 1.1.21 2.73.53 2.73 2.17 0 1.47-1.09 2.32-2.88 2.32zM475.104 405h-2.12l-.86-3.78-.86 3.78h-2.12l-1.91-6.67h2.26l.86 4.08 1.01-4.08h1.52l1.01 4.08.85-4.08h2.27l-1.91 6.67zm5.848.12c-2.06 0-3.65-1.4-3.65-3.45 0-2.05 1.59-3.45 3.65-3.45 2.06 0 3.65 1.4 3.65 3.45 0 2.05-1.59 3.45-3.65 3.45zm0-1.78c.97 0 1.6-.74 1.6-1.67 0-.93-.63-1.67-1.6-1.67-.97 0-1.6.74-1.6 1.67 0 .93.63 1.67 1.6 1.67zm8.089 1.78c-2.06 0-3.65-1.4-3.65-3.45 0-2.05 1.59-3.45 3.65-3.45 2.06 0 3.65 1.4 3.65 3.45 0 2.05-1.59 3.45-3.65 3.45zm0-1.78c.97 0 1.6-.74 1.6-1.67 0-.93-.63-1.67-1.6-1.67-.97 0-1.6.74-1.6 1.67 0 .93.63 1.67 1.6 1.67zm7.788 1.66h-2.99v-6.67h2.98c2.1 0 3.66 1.2 3.66 3.33s-1.56 3.34-3.65 3.34zm-.01-1.76c1.01 0 1.61-.74 1.61-1.58 0-.9-.52-1.57-1.6-1.57h-.97v3.15h.96zm7.399 1.88c-1.42 0-2.39-.42-3.1-1.06l1.05-1.5c.5.48 1.25.86 2.15.86.38 0 .74-.1.74-.36 0-.21-.4-.28-.94-.37-1.1-.2-2.78-.48-2.78-2.25 0-1.13.94-2.21 2.77-2.21 1.09 0 2.07.31 2.83.93l-1.08 1.43a3.37 3.37 0 0 0-1.96-.66c-.4 0-.51.13-.51.3 0 .21.42.29.98.4 1.1.21 2.73.53 2.73 2.17 0 1.47-1.09 2.32-2.88 2.32zM770.39 584h-2.02v-4.91h-1.79v-1.76h5.59v1.76h-1.78V584zm7.989 0h-5.06v-6.67h5.06v1.76h-3.04v.66h2.97v1.76h-2.97v.73h3.04V584zm7.298 0h-2.3l-.92-2.1h-.73v2.1h-2.02v-6.67h3.56c1.56 0 2.4 1.04 2.4 2.29 0 1.15-.67 1.76-1.2 2.02l1.21 2.36zm-2.72-3.86c.34 0 .66-.16.66-.53 0-.36-.32-.52-.66-.52h-1.23v1.05h1.23zm9.929 3.86h-2.3l-.92-2.1h-.73v2.1h-2.02v-6.67h3.56c1.56 0 2.4 1.04 2.4 2.29 0 1.15-.67 1.76-1.2 2.02l1.21 2.36zm-2.72-3.86c.34 0 .66-.16.66-.53 0-.36-.32-.52-.66-.52h-1.23v1.05h1.23zm10.698 3.86h-2.29l-.24-.78h-2.4l-.24.78h-2.29l2.46-6.67h2.54l2.46 6.67zm-3.07-2.54l-.66-2.15-.66 2.15h1.32zm6.869 2.66c-2.09 0-3.67-1.4-3.67-3.45 0-2.06 1.58-3.45 3.67-3.45 1.75 0 2.63 1.02 3.03 1.94l-1.74.81c-.17-.52-.69-.97-1.29-.97-.97 0-1.62.74-1.62 1.67 0 .93.65 1.67 1.62 1.67.6 0 1.12-.45 1.29-.97l1.74.8c-.39.89-1.28 1.95-3.03 1.95zm9.148-.12h-5.06v-6.67h5.06v1.76h-3.04v.66h2.97v1.76h-2.97v.73h3.04V584zM651.05 306.12c-1.42 0-2.39-.42-3.1-1.06l1.05-1.5c.5.48 1.25.86 2.15.86.38 0 .74-.1.74-.36 0-.21-.4-.28-.94-.37-1.1-.2-2.78-.48-2.78-2.25 0-1.13.94-2.21 2.77-2.21 1.09 0 2.07.31 2.83.93l-1.08 1.43a3.37 3.37 0 0 0-1.96-.66c-.4 0-.51.13-.51.3 0 .21.42.29.98.4 1.1.21 2.73.53 2.73 2.17 0 1.47-1.09 2.32-2.88 2.32zm7.418-.12h-2.02v-4.91h-1.79v-1.76h5.59v1.76h-1.78V306zm9.068 0h-2.29l-.24-.78h-2.4l-.24.78h-2.29l2.46-6.67h2.54l2.46 6.67zm-3.07-2.54l-.66-2.15-.66 2.15h1.32zm5.879 2.54h-2.02v-6.67h2.02V306zm7.479 0h-2.3l-.92-2.1h-.73v2.1h-2.02v-6.67h3.56c1.56 0 2.4 1.04 2.4 2.29 0 1.15-.67 1.76-1.2 2.02l1.21 2.36zm-2.72-3.86c.34 0 .66-.16.66-.53 0-.36-.32-.52-.66-.52h-1.23v1.05h1.23zm6.548 3.98c-1.42 0-2.39-.42-3.1-1.06l1.05-1.5c.5.48 1.25.86 2.15.86.38 0 .74-.1.74-.36 0-.21-.4-.28-.94-.37-1.1-.2-2.78-.48-2.78-2.25 0-1.13.94-2.21 2.77-2.21 1.09 0 2.07.31 2.83.93l-1.08 1.43a3.37 3.37 0 0 0-1.96-.66c-.4 0-.51.13-.51.3 0 .21.42.29.98.4 1.1.21 2.73.53 2.73 2.17 0 1.47-1.09 2.32-2.88 2.32zM229.753 312h-2.02v-4.01l-1.49 4.01h-.9l-1.49-4.01V312h-2.02v-6.67h2.79l1.17 3.2 1.17-3.2h2.79V312zm8.248 0h-2.29l-.24-.78h-2.4l-.24.78h-2.29l2.46-6.67h2.54l2.46 6.67zm-3.07-2.54l-.66-2.15-.66 2.15h1.32zm5.879 2.54h-2.02v-6.67h2.02V312zm7.929 0h-1.94l-2.46-3.38V312h-2.02v-6.67h2.08l2.32 3.16v-3.16h2.02V312zm-36.213 12h-5.06v-6.67h5.06v1.76h-3.04v.66h2.97v1.76h-2.97v.73h3.04V324zm7.748 0h-1.94l-2.46-3.38V324h-2.02v-6.67h2.08l2.32 3.16v-3.16h2.02V324zm4.959 0h-2.02v-4.91h-1.79v-1.76h5.59v1.76h-1.78V324zm8.898 0h-2.3l-.92-2.1h-.73v2.1h-2.02v-6.67h3.56c1.56 0 2.4 1.04 2.4 2.29 0 1.15-.67 1.76-1.2 2.02l1.21 2.36zm-2.72-3.86c.34 0 .66-.16.66-.53 0-.36-.32-.52-.66-.52h-1.23v1.05h1.23zM242.11 324h-2.29l-.24-.78h-2.4l-.24.78h-2.29l2.46-6.67h2.54l2.46 6.67zm-3.07-2.54l-.66-2.15-.66 2.15h1.32zm10.279 2.54h-1.94l-2.46-3.38V324h-2.02v-6.67h2.08l2.32 3.16v-3.16h2.02V324zm4.818.12c-2.09 0-3.67-1.4-3.67-3.45 0-2.06 1.58-3.45 3.67-3.45 1.75 0 2.63 1.02 3.03 1.94l-1.74.81c-.17-.52-.69-.97-1.29-.97-.97 0-1.62.74-1.62 1.67 0 .93.65 1.67 1.62 1.67.6 0 1.12-.45 1.29-.97l1.74.8c-.39.89-1.28 1.95-3.03 1.95zm9.149-.12h-5.06v-6.67h5.06v1.76h-3.04v.66h2.97v1.76h-2.97v.73h3.04V324zM220.05 256h-5.06v-6.67h5.06v1.76h-3.04v.66h2.97v1.76h-2.97v.73h3.04V256zm5.88 0h-4.55v-6.67h2.02v4.91h2.53V256zm6.298 0h-5.06v-6.67h5.06v1.76h-3.04v.66h2.97v1.76h-2.97v.73h3.04V256zm5.608 0h-2.54l-2.46-6.67h2.29l1.44 4.49 1.44-4.49h2.29l-2.46 6.67zm9.589 0h-2.29l-.24-.78h-2.4l-.24.78h-2.29l2.46-6.67h2.54l2.46 6.67zm-3.07-2.54l-.66-2.15-.66 2.15h1.32zm6.709 2.54h-2.02v-4.91h-1.79v-1.76h5.59v1.76h-1.78V256zm6.018.12c-2.06 0-3.65-1.4-3.65-3.45 0-2.05 1.59-3.45 3.65-3.45 2.06 0 3.65 1.4 3.65 3.45 0 2.05-1.59 3.45-3.65 3.45zm0-1.78c.97 0 1.6-.74 1.6-1.67 0-.93-.63-1.67-1.6-1.67-.97 0-1.6.74-1.6 1.67 0 .93.63 1.67 1.6 1.67zm10.769 1.66h-2.3l-.92-2.1h-.73v2.1h-2.02v-6.67h3.56c1.56 0 2.4 1.04 2.4 2.29 0 1.15-.67 1.76-1.2 2.02l1.21 2.36zm-2.72-3.86c.34 0 .66-.16.66-.53 0-.36-.32-.52-.66-.52h-1.23v1.05h1.23zM138.24 332.12c-2.09 0-3.67-1.4-3.67-3.45 0-2.06 1.58-3.45 3.67-3.45 1.75 0 2.63 1.02 3.03 1.94l-1.74.81c-.17-.52-.69-.97-1.29-.97-.97 0-1.62.74-1.62 1.67 0 .93.65 1.67 1.62 1.67.6 0 1.12-.45 1.29-.97l1.74.8c-.39.89-1.28 1.95-3.03 1.95zm7.378 0c-2.06 0-3.65-1.4-3.65-3.45 0-2.05 1.59-3.45 3.65-3.45 2.06 0 3.65 1.4 3.65 3.45 0 2.05-1.59 3.45-3.65 3.45zm0-1.78c.97 0 1.6-.74 1.6-1.67 0-.93-.63-1.67-1.6-1.67-.97 0-1.6.74-1.6 1.67 0 .93.63 1.67 1.6 1.67zm10.768 1.66h-2.3l-.92-2.1h-.73v2.1h-2.02v-6.67h3.56c1.56 0 2.4 1.04 2.4 2.29 0 1.15-.67 1.76-1.2 2.02l1.21 2.36zm-2.72-3.86c.34 0 .66-.16.66-.53 0-.36-.32-.52-.66-.52h-1.23v1.05h1.23zm10.379 3.86h-1.94l-2.46-3.38V332h-2.02v-6.67h2.08l2.32 3.16v-3.16h2.02V332zm6.569 0h-5.06v-6.67h5.06v1.76h-3.04v.66h2.97v1.76h-2.97v.73h3.04V332zm7.298 0h-2.3l-.92-2.1h-.73v2.1h-2.02v-6.67h3.56c1.56 0 2.4 1.04 2.4 2.29 0 1.15-.67 1.76-1.2 2.02l1.21 2.36zm-2.72-3.86c.34 0 .66-.16.66-.53 0-.36-.32-.52-.66-.52h-1.23v1.05h1.23z"
      />
      <path
        fill="#59C634"
        d="M155.941 481h-4.401v-6.003h4.401v1.35h-2.853v.936h2.79v1.35h-2.79v1.017h2.853V481zm6.964 0h-1.827l-1.305-2.016-1.305 2.016h-1.836l2.097-3.078-1.962-2.925h1.827l1.179 1.881 1.161-1.881h1.836l-1.953 2.916 2.088 3.087zm2.428 0h-1.548v-6.003h1.548V481zm4.399 0h-1.548v-4.653h-1.683v-1.35h4.905v1.35h-1.674V481zm8.519 0h-1.548v-4.023l-1.008 1.017-.882-.927 2.097-2.07h1.341V481zM642.941 383h-4.401v-6.003h4.401v1.35h-2.853v.936h2.79v1.35h-2.79v1.017h2.853V383zm6.964 0h-1.827l-1.305-2.016-1.305 2.016h-1.836l2.097-3.078-1.962-2.925h1.827l1.179 1.881 1.161-1.881h1.836l-1.953 2.916 2.088 3.087zm2.428 0h-1.548v-6.003h1.548V383zm4.399 0h-1.548v-4.653h-1.683v-1.35h4.905v1.35h-1.674V383zm10.139 0h-4.707v-1.206c2.601-1.881 3.087-2.295 3.087-2.889 0-.414-.387-.63-.828-.63-.666 0-1.17.252-1.602.657l-.855-1.026c.639-.702 1.593-.999 2.43-.999 1.413 0 2.43.792 2.43 1.998 0 .918-.657 1.701-2.151 2.745h2.196V383z"
      />
    </g>
  </svg>
);

MapImage.propTypes = {
  tablesRect: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MapImage;