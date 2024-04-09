import React from 'react'

function SvgIcon({ path, size = 20, color = 'currentColor', ...rest }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
            {...rest}
        >
            <path d={path} />
        </svg>
    )
}

export default SvgIcon
