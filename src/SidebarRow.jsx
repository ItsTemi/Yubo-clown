import React from "react";

function SidebarRow({ title, one, two, three, four }) {
    return (
        <div>
        
                <h1>{title}</h1>
            
            <br />
            <ul>
                {one}
                <br />
                {two}
                <br />
                {three}
                <br />
                {four}
                <br />
            </ul>
            <br />
        </div>
    );
}

export default SidebarRow;
