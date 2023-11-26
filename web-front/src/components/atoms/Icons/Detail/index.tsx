/**
 * TrashIcon
 *
 * @package components
 */
import styles from './styles.module.css';

/**
 * TrashIcon
 * @returns {JSX.Element}
 * @constructor
 */
export const DetailIcon = () => {
  return (
    <svg className={styles.img} viewBox="0 0 512 512">
      <g>
        <path
          d="M392.197,26.581h-4.77v-9.699c0-9.316-7.55-16.882-16.881-16.882c-9.332,0-16.898,7.566-16.898,16.882v9.699
            h-42.576v-9.699c0-9.316-7.558-16.882-16.89-16.882c-9.324,0-16.89,7.566-16.89,16.882v9.699h-42.576v-9.699
            c0-9.316-7.566-16.882-16.89-16.882c-9.332,0-16.89,7.566-16.89,16.882v9.699h-42.584v-9.699c0-9.316-7.566-16.882-16.89-16.882
            c-9.332,0-16.89,7.566-16.89,16.882v9.699h-4.77c-38.501,0.008-69.684,31.199-69.7,69.7v306.59
            c0.016,60.28,48.856,109.12,109.129,109.128h156.354l146.312-146.312V96.281C461.89,57.78,430.699,26.589,392.197,26.581z
            M429.173,350.021h-31.679c-51.237,0-92.766,41.53-92.766,92.766v33.787l-2.692,2.692l-142.804,0.008
            c-21.149-0.008-40.148-8.525-54.026-22.378c-13.853-13.878-22.37-32.877-22.378-54.025V96.281
            c0.008-10.258,4.114-19.398,10.834-26.142c6.743-6.719,15.883-10.826,26.142-10.834h4.77v18.121c0,9.332,7.558,16.889,16.89,16.889
            c9.324,0,16.89-7.558,16.89-16.889V59.306h42.584v18.121c0,9.332,7.558,16.889,16.89,16.889c9.323,0,16.89-7.558,16.89-16.889
            V59.306h42.576v18.121c0,9.332,7.566,16.889,16.89,16.889c9.332,0,16.89-7.558,16.89-16.889V59.306h42.576v18.121
            c0,9.332,7.566,16.889,16.898,16.889c9.332,0,16.881-7.558,16.881-16.889V59.306h4.77c10.259,0.008,19.398,4.114,26.142,10.834
            c6.718,6.744,10.825,15.883,10.834,26.142V350.021z"
        ></path>
        <rect x="146.919" y="170.033" width="218.17" height="32.725"></rect>
        <rect x="146.919" y="257.294" width="218.17" height="32.725"></rect>
        <rect x="146.919" y="344.556" width="130.9" height="32.725"></rect>
      </g>
    </svg>
  );
};
