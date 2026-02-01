import { SVGProps } from "react";

export function Lovable(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M151.083 0c83.413 0 151.061 67.819 151.061 151.467v57.6h50.283c83.413 0 151.082 67.797 151.082 151.466 0 83.691-67.626 151.467-151.082 151.467H0V151.467C0 67.84 67.627 0 151.083 0z"
                fill="url(#lovable-gradient)"
            />
            <defs>
                <radialGradient
                    id="lovable-gradient"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(92.545 118.724 174.844) scale(480.474 650.325)"
                >
                    <stop offset=".25" stopColor="#FE7B02" />
                    <stop offset=".433" stopColor="#FE4230" />
                    <stop offset=".548" stopColor="#FE529A" />
                    <stop offset=".654" stopColor="#DD67EE" />
                    <stop offset=".95" stopColor="#4B73FF" />
                </radialGradient>
            </defs>
        </svg>
    );
}
