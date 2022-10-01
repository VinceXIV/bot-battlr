import React from 'react'

function SortBar({handleSortAction, handleFilterAction}){

    const parentDivStyle = {
        display: "flex",
        justifyContent:"left",
        alignItems: "start",
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
        fontSize: "1.7rem",
        fontWeight: "900",
        color: "rgba(0, 0, 0, 0.6)"
    }


    function unstyleSiblings(element){
        const siblings = Array.from(element.parentElement.parentElement.children)
        for(const sibling of siblings){
            sibling.querySelector('h2').style.color = "rgba(0, 0, 0, 0.6)"
        }
    }


    function handleClick(event, action, strategy){
        unstyleSiblings(event.target)
        event.target.style.color = "#8db600"
        if(action === 'sort'){
            handleSortAction(strategy)
        }else if (action === 'filter'){
            handleFilterAction(strategy)
        }
    }


    function createOptionList(options, action){
        return options.map(option => (
                <div key={option} onClick={(event) => handleClick(event, action, option.toLowerCase())} style={{cursor: "pointer"}}>
                    <h2 style={sortOptionStyle}>{option}</h2>
                </div>            
            )
        )
    }


    return (
        <div style={parentDivStyle}>
            <div style={{marginLeft: "2rem", paddingTop: "1.5rem"}}>
                <h1 style={{fontSize: "1.3rem"}}>Sort By: </h1>
                <fieldset>
                    <div style={{display: "flex", alignItems: "center"}}>
                        {createOptionList(["Health", "Damage", "Armor"], "sort")}
                    </div>
                </fieldset>
                <p style={{fontSize: "0.7rem", textAlign: "center"}}>Clicking will toggle between sorting in ascending or descending order based on the item clicked</p>
            </div>

            <div style={{marginLeft: "2rem", paddingTop: "1.5rem"}}>
                <h1 style={{fontSize: "1.3rem"}}>Filter By: </h1>
                <fieldset>
                    <div style={{display: "flex", alignItems: "center"}}>
                        {createOptionList(["Support", "Medic", "Assault", "Defender", "Captain", "Witch"], "filter")}
                    </div>                    
                </fieldset>
            </div>
        </div>
    )
}

export default SortBar