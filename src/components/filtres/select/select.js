import React, {Component} from 'react';
import "../../../js/filter";
class Select extends Component {
    render() {
        let arr;
        let itemsArr;
        let name = "matherial";
        if(this.props.matherial){
            arr = Array.from(this.props.matherial);
            itemsArr = arr.map(function x(element){
                return <option key={element.name} value={element.name}>{element.name}</option>
            })
        } else {
            name = "moreLess";
            arr = ["Дороже", "Дешевле"];
            itemsArr = arr.map(function x(element){
                return <option>{element}</option>
            })
        }

        return (
            <select className="form-control" id={name}>
                {itemsArr}
            </select>
        );
    }
}

export default Select;