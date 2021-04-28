import React from 'react';
import './form-input.styles.scss';

//functional component because we dont want any state to be saved in it. 

const FormInput = ({handleChange, label, ... otherProps}) => (
    <div class='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<label 
            className={`${
                otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
            </label>) : null
        }

    </div>
);
export default FormInput;