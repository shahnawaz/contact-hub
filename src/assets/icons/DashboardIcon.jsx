import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export function DashboardIcon(props) {
    return (
        <SvgIcon {...props}>
            <defs>
                <clipPath id="clip-path">
                    <rect width="16" height="16" fill="none"/>
                </clipPath>
            </defs>
            <g id="Icon_Dashboard" data-name="Icon Dashboard" clipPath="url(#clip-path)">
                <path
                    id="Union_8"
                    data-name="Union 8"
                    d="M-481-8a.945.945,0,0,1-1-1v-9a.945.945,0,0,1,1-1h2a.945.945,0,0,1,1,1v9a.945.945,0,0,1-1,1Zm-6,0a.944.944,0,0,1-1-1V-23a.945.945,0,0,1,1-1h2a.945.945,0,0,1,1,1V-9a.944.944,0,0,1-1,1Zm-6,0a.945.945,0,0,1-1-1v-4a.945.945,0,0,1,1-1h2a.946.946,0,0,1,1,1v4a.945.945,0,0,1-1,1Z"
                    transform="translate(494 24)"
                />
            </g>
        </SvgIcon>
    );
}