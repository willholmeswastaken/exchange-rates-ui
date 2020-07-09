import React, { useState, useEffect } from 'react';
import axios from 'axios';
import currencies from 'currency-codes'
import config from '../../config.json';
import {
    useParams
} from "react-router-dom";
import { Table, Segment } from 'semantic-ui-react';

const Results = () => {
    const [rates, setRates] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [hasFailed, setHasFailed] = useState(false);
    const { currency } = useParams();
    useEffect(() => {
        if (currencies.code(currency)) {
            axios.get(`${config.CURRENCY_RATES_SERVICE_URL}/rates/${currency}`)
                .then(res => {
                    if ([200, 201, 204].includes(res.status)) {
                        setRates(res.data.rates);
                        setIsFetching(false);
                        setHasFailed(false);
                    } else {
                        setIsFetching(false);
                        setHasFailed(true);
                    }
                });
        } else {
            setIsFetching(false);
            setHasFailed(true);
        }
    }, [currency]);

    return (
        <>
            {
                isFetching &&
                <Segment loading>
                </Segment>
            }
            {
                hasFailed &&
                <Segment>
                    Failed
            </Segment>
            }
            {
                rates.length > 0 &&
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Currency</Table.HeaderCell>
                            <Table.HeaderCell>Value</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            rates.map(r => (
                                <Table.Row key={r.name}>
                                    <Table.Cell>{r.name}</Table.Cell>
                                    <Table.Cell>{r.value}</Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
            }
        </>
    )
}

export default Results;
