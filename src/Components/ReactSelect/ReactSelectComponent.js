import React from 'react';
import Select from "react-select";

const colourOptions=[{
    label:"red",
    value:'red'
},
    {
        label:"Naim",
        value:'Naim'
    }
]

function ReactSelectComponent({setFieldTouched,value, setFieldValue }) {
    return (
        <Select
            onClick={()=>setFieldTouched('color', true)}
            className="basic-single"
            classNamePrefix="select"
            defaultValue={null}
            isSearchable={true}
            name="color"
            options={colourOptions}
            inputValue={value.value}
            onChange={(value)=>setFieldValue('color', value.value)}
        />
    );
}

export default ReactSelectComponent;