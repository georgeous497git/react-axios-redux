import React, { forwardRef } from 'react';

import Wrapper from '../hoc/Wrapper/Wrapper';

const ElementoRegistro = forwardRef ((props, ref) => {

    return (
        <Wrapper>
            <div>
                <label>{props.label}</label>
                <input type="text" name={props.name} defaultValue={props.defaultValue} ref={ref} />
            </div>
        </Wrapper>

    )
})

export default ElementoRegistro;