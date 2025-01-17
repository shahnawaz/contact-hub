import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export function SettingsIcon(props) {
    return (
        <SvgIcon {...props}>
            <defs>
                <clipPath id="clip-path">
                    <rect width="16" height="16" fill="none"/>
                </clipPath>
            </defs>
            <g id="Icon_Setting" data-name="Icon Setting" clipPath="url(#clip-path)">
                <path id="Path_108" data-name="Path 108" d="M13.3,5.2l1.1-2.1L13,1.7,10.9,2.8a3.582,3.582,0,0,0-1.1-.4L9,0H7L6.2,2.3a4.179,4.179,0,0,0-1,.4L3.1,1.6,1.6,3.1,2.7,5.2a4.179,4.179,0,0,0-.4,1L0,7V9l2.3.8c.1.4.3.7.4,1.1L1.6,13,3,14.4l2.1-1.1a3.582,3.582,0,0,0,1.1.4L7,16H9l.8-2.3c.4-.1.7-.3,1.1-.4L13,14.4,14.4,13l-1.1-2.1a3.582,3.582,0,0,0,.4-1.1L16,9V7l-2.3-.8A4.179,4.179,0,0,0,13.3,5.2ZM8,11A2.946,2.946,0,0,1,5,8,2.946,2.946,0,0,1,8,5a2.946,2.946,0,0,1,3,3A2.946,2.946,0,0,1,8,11Z"/>
            </g>
        </SvgIcon>
    );
}