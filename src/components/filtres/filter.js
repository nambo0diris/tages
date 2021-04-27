import React, {Component} from 'react';
import "./filter.css";
import matherial from "../../api/materials.json";
import items from "../../api/items.json";
import Select from "./select/select";



class Filter extends Component {
    render() {

        return (
            <div className="filter">
                <div className="filter_item">
                    <div className="filter_name">Сортировать по:</div>
                    <div className="rail-select">
                        <div className="select-side">
                            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 0.292908L17.7071 1.70712L9.00001 10.4142L0.292908 1.70712L1.70712 0.292908L9.00001 7.5858L16.2929 0.292908Z" fill="black"/>
                            </svg>

                        </div>
                        <Select more_less_filter="more"/>
                    </div>

                </div>

                <div className="filter_item">
                    <div className="filter_name">Материал</div>
                    <div className="rail-select">
                        <div className="select-side">
                            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 0.292908L17.7071 1.70712L9.00001 10.4142L0.292908 1.70712L1.70712 0.292908L9.00001 7.5858L16.2929 0.292908Z" fill="black"/>
                            </svg>

                        </div>
                        <Select matherial={matherial}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Filter;