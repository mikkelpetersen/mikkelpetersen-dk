import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  return (
    <Box className="logo" onClick={() => router.push("/")}>
      <svg
        width="50"
        viewBox="0 0 423 234"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M271.312 16.888L422.866 223.138H119.758L271.312 16.888Z"
          fill="#3182CE"
        />
        <path
          d="M171.312 16.888L322.866 223.138H19.7575L171.312 16.888Z"
          fill="#3182CE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M171.312 0L342.624 233.138H0L171.312 0ZM171.312 16.888L19.7575 223.138H322.866L171.312 16.888Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

export default Logo;
