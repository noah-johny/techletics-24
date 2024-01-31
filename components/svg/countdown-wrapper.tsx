interface CountdownWrapperProps {
  size?: "small" | "large";
}

const CountdownWrapper = ({ size = "large" }: CountdownWrapperProps) => {
  return size === "large" ? (
    <svg
      width="646"
      height="135"
      viewBox="0 0 646 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M1.401 25.1668C1.18047 18.4757 6.47769 12.8981 13.1713 12.7736L633.021 1.24147C640.018 1.11129 645.642 6.97205 645.223 13.9579L638.677 123.084C638.297 129.421 633.047 134.366 626.698 134.366H16.611C10.1375 134.366 4.83077 129.231 4.61753 122.761L1.401 25.1668Z"
        stroke="#DFFF1B"
      />
      <path opacity="0.5" d="M509 4L488.162 133.347" stroke="#DFFF1B" />
    </svg>
  ) : (
    <svg
      width="277"
      height="497"
      viewBox="0 0 277 497"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M2.62301 32.8746C2.66904 19.9879 12.884 9.43767 25.7626 8.97573L250.967 0.897893C264.616 0.408333 275.921 11.3911 275.827 25.0482L272.738 472.29C272.645 485.819 261.394 496.597 247.873 496.109L24.217 488.035C11.2743 487.568 1.03673 476.916 1.08299 463.965L2.62301 32.8746Z"
        stroke="#DFFF1B"
      />
      <path d="M2 302L274 283" stroke="#DFFF1B" stroke-linecap="round" />
    </svg>
  );
};

export default CountdownWrapper;
