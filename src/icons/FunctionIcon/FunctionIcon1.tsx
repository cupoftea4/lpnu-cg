interface Props {
  className: string;
}

export const FunctionIcon = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`function-icon-1 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 34 28"
      width="34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_61_637)">
        <path
          className="path"
          d="M15.3388 17C15.3388 14.2194 16.2398 11.5164 17.8893 9.29953C18.164 8.93084 18.1257 8.42084 17.7751 8.12334L16.4634 7.00878C16.0916 6.69269 15.5162 6.73838 15.2214 7.12725C13.0735 9.95669 11.9 13.4289 11.9 17C11.9 20.5716 13.0735 24.0438 15.2214 26.8728C15.5167 27.2616 16.0916 27.3073 16.4634 26.9912L17.7751 25.8761C18.1252 25.5781 18.1634 25.0686 17.8893 24.6999C16.2393 22.4841 15.3388 19.7806 15.3388 17ZM11.9 0.85C11.9 0.380375 11.5196 0 11.05 0H8.5C5.4485 0 2.975 2.4735 2.975 5.525V8.925H0.85C0.380375 8.925 0 9.30538 0 9.775V12.325C0 12.7946 0.380375 13.175 0.85 13.175H2.975V19.975C2.975 20.6763 2.40125 21.25 1.7 21.25H0.85C0.380375 21.25 0 21.6304 0 22.1V24.65C0 25.1196 0.380375 25.5 0.85 25.5H1.7C4.7515 25.5 7.225 23.0265 7.225 19.975V13.175H9.35C9.81962 13.175 10.2 12.7946 10.2 12.325V9.775C10.2 9.30538 9.81962 8.925 9.35 8.925H7.225V5.525C7.225 4.82375 7.79875 4.25 8.5 4.25H11.05C11.5196 4.25 11.9 3.86963 11.9 3.4V0.85ZM30.6786 7.12725C30.3832 6.73838 29.8084 6.69269 29.4366 7.00878L28.1249 8.12334C27.7748 8.42138 27.7366 8.93084 28.0107 9.29953C29.6602 11.5154 30.5612 14.2194 30.5612 17C30.5612 19.7806 29.6602 22.4841 28.0107 24.7005C27.736 25.0692 27.7743 25.5792 28.1249 25.8767L29.4366 26.9918C29.8084 27.3078 30.3838 27.2622 30.6786 26.8733C32.8265 24.0428 34 20.5711 34 17C34 13.4284 32.8265 9.95616 30.6786 7.12725ZM27.8008 19.4469L25.3539 17L27.8008 14.5531C28.1329 14.221 28.1329 13.6829 27.8008 13.3508L26.5992 12.1492C26.2671 11.8171 25.729 11.8171 25.3969 12.1492L22.95 14.5961L20.5031 12.1492C20.171 11.8171 19.6329 11.8171 19.3008 12.1492L18.0992 13.3508C17.7671 13.6829 17.7671 14.221 18.0992 14.5531L20.5461 17L18.0992 19.4469C17.7671 19.779 17.7671 20.3171 18.0992 20.6492L19.3008 21.8508C19.6329 22.1829 20.171 22.1829 20.5031 21.8508L22.95 19.4039L25.3969 21.8508C25.729 22.1829 26.2671 22.1829 26.5992 21.8508L27.8008 20.6492C28.1329 20.3171 28.1329 19.779 27.8008 19.4469Z"
          fill="var(--main-color)"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_61_637">
          <rect className="rect" fill="white" height="27.2" width="34" />
        </clipPath>
      </defs>
    </svg>
  );
};
