import React from 'react'

function SortBar({handleSortAction}){

    const parentDivStyle = {
        display: "flex",
        justifyContent:"left",
        alignItems: "center",
        width: "100vw",
        height: "10rem",
        backgroundColor: "rgba(0, 0, 0, 0.10)",
        marginBottom: "2rem"
    }


    const sortOptionStyle = {
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingBottom: "0",
        marginBottom: '0',
        fontSize: "2rem",
        fontWeight: "900"
    }


    return (
        <div style={parentDivStyle}>
            <div style={{marginLeft: "2rem"}}>
                <h1 style={{fontSize: "1.5rem"}}>Sort By: </h1>
                <fieldset>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div onClick={()=>{handleSortAction("health")}} style={{cursor: "pointer"}}>
                            <h2 style={sortOptionStyle}>Health</h2>
                        </div>

                        <div onClick={()=>{handleSortAction("damage")}} style={{cursor: "pointer"}}>
                            <h2 style={sortOptionStyle}>Damage</h2>
                        </div>

                        <div onClick={()=>{handleSortAction("armor")}} style={{cursor: "pointer"}}>
                            <h2 style={sortOptionStyle}>Armor</h2>
                        </div>
                    </div>
                </fieldset>
                <p style={{fontSize: "0.7rem", textAlign: "center"}}>Clicking will toggle between sorting in ascending or descending order based on the item clicked</p>
            </div>
        </div>
    )
}

export default SortBar