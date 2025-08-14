
import { useState } from 'react';
import './style.css';
import data from "./data";

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(currentId) {
        setSelected(currentId ===selected ? null :currentId );
        console.log(currentId);
    }

    function handleMultiSelection(currentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId=copyMultiple.indexOf(currentId)
        if (findIndexOfCurrentId === -1) copyMultiple.push(currentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(copyMultiple);
        console.log(copyMultiple);
    }

    return (
        <div className="wrapper">
            <div className="accordian">
                <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}
                className=''>Enable Multi selection</button>
                {
                    data && data.length > 0 ?
                        data.map(dataItem =>
                            <div className="item">
                                <div className="title" onClick={
                                    () => enableMultiSelect ? handleMultiSelection(dataItem.id) : handleSingleSelection(dataItem.id)}>
                                    <h3 key={dataItem.id}>
                                        {dataItem.question}
                                    </h3>
                                    <span>
                                        +
                                    </span>
                                </div>

                                {
                                    enableMultiSelect
                                        ? multiple.indexOf(dataItem.id) !== -1 && (
                                        <div className="acc-content">{dataItem.answer}</div>
                                    ) :
                                        selected === dataItem.id && (
                                            <div className="acc-content">{dataItem.answer}</div>
                                        )
                                }
                            </div>
                        ) :
                        <div>
                        no data found!    
                        </div>
                }

            </div>
           
        </div>
    );
    
}