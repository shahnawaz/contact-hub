import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export function InboxIcon(props) {
    return (
        <SvgIcon {...props}>
            <defs>
                <clipPath id="clip-path">
                    <rect width="16" height="14" fill="none"/>
                </clipPath>
            </defs>
            <g id="Icon_Inbox" data-name="Icon Inbox" clipPath="url(#clip-path)">
                <path id="Path_358" data-name="Path 358" d="M15,1H1A1,1,0,0,0,0,2V14a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V2A1,1,0,0,0,15,1ZM14,13H2V6.723L7.5,9.868a1,1,0,0,0,.992,0L14,6.723Zm0-8.58L8,7.849,2,4.42V3H14Z" transform="translate(0 -1)"/>
            </g>
        </SvgIcon>
    );
}