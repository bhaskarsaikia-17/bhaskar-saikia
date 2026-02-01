import { SVGProps } from "react";

export function Cursor(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <g clipPath="url(#cursor-clip0)">
                <rect width="512" height="512" rx="122" fill="#000" />
                <g clipPath="url(#cursor-clip1)">
                    <mask
                        id="cursor-mask"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="85"
                        y="89"
                        width="343"
                        height="334"
                    >
                        <path d="M85 89h343v334H85V89z" fill="#fff" />
                    </mask>
                    <g mask="url(#cursor-mask)">
                        <path
                            d="M255.428 423l148.991-83.5L255.428 256l-148.99 83.5 148.99 83.5z"
                            fill="url(#cursor-paint0)"
                        />
                        <path
                            d="M404.419 339.5v-167L255.428 89v167l148.991 83.5z"
                            fill="url(#cursor-paint1)"
                        />
                        <path
                            d="M255.428 89l-148.99 83.5v167l148.99-83.5V89z"
                            fill="url(#cursor-paint2)"
                        />
                        <path
                            d="M404.419 172.5L255.428 423V256l148.991-83.5z"
                            fill="#E4E4E4"
                        />
                        <path
                            d="M404.419 172.5L255.428 256l-148.99-83.5h297.981z"
                            fill="#fff"
                        />
                    </g>
                </g>
            </g>
            <defs>
                <linearGradient
                    id="cursor-paint0"
                    x1="255.428"
                    y1="256"
                    x2="255.428"
                    y2="423"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset=".16" stopColor="#fff" stopOpacity=".39" />
                    <stop offset=".658" stopColor="#fff" stopOpacity=".8" />
                </linearGradient>
                <linearGradient
                    id="cursor-paint1"
                    x1="404.419"
                    y1="173.015"
                    x2="257.482"
                    y2="261.497"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset=".182" stopColor="#fff" stopOpacity=".31" />
                    <stop offset=".715" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="cursor-paint2"
                    x1="255.428"
                    y1="89"
                    x2="112.292"
                    y2="342.802"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" stopOpacity=".6" />
                    <stop offset=".667" stopColor="#fff" stopOpacity=".22" />
                </linearGradient>
                <clipPath id="cursor-clip0">
                    <path fill="#fff" d="M0 0h512v512H0z" />
                </clipPath>
                <clipPath id="cursor-clip1">
                    <path fill="#fff" transform="translate(85 89)" d="M0 0h343v334H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}
