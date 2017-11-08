import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from 'src/common-ui/components'

const Concurrency = ({ concurrency, onConcurrencyChange }) => (
    <Wrapper>
        <label htmlFor="concurrency">Import item concurrency level</label>
        <input
            id="concurrency"
            onChange={onConcurrencyChange}
            value={concurrency}
            type="number"
            min="1"
            max="5"
        />
    </Wrapper>
)

Concurrency.propTypes = {
    concurrency: PropTypes.number.isRequired,
    onConcurrencyChange: PropTypes.func.isRequired,
}

export default Concurrency
