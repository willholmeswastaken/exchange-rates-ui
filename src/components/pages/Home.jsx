import React, { useState } from 'react';
import PropTypes from 'prop-types';
import currencies from 'currency-codes';
import { useHistory } from "react-router-dom";
import { Container, Header, Dropdown, Button, Icon } from 'semantic-ui-react';

/* eslint-disable react/no-multi-comp */
/* Heads up! Home uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const Home = ({ mobile }) => {
    const history = useHistory();
    const [ selectedCurrency, setSelectedCurrency ] = useState(null);
    return (
        <Container text>
            <Header
                as='h1'
                content='Select your currency'
                inverted
                style={{
                    fontSize: mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                }}
            />
            <Header
                as='h2'
                content='We will then compare all the latest rates around the world!'
                inverted
                style={{
                    fontSize: mobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: mobile ? '0.5em' : '1.5em',
                }}
            />
            <Dropdown
                placeholder='Select Currency'
                fluid
                search
                selection
                onChange={(ev, { name, value }) => setSelectedCurrency(value)}
                options={currencies.codes().map(c => ({ text: c, value: c }))}
            />
            <Button primary size='huge' style={{ marginTop: mobile ? '0.5em' : '1.5em' }} onClick={() => history.push(`/results/${selectedCurrency}`)}>
                Compare
        <Icon name='right arrow' />
            </Button>
        </Container>
    );
}

Home.propTypes = {
    mobile: PropTypes.bool,
}

export default Home;
