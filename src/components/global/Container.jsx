import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Responsive, Visibility, Segment, Menu, Container, Button, Sidebar, Icon } from 'semantic-ui-react';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const DesktopContainer = ({ children }) => {
    const [fixed, setFixed] = useState(null);
    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility
                once={false}
                onBottomPassed={() => setFixed(true)}
                onBottomPassedReverse={() => setFixed(false)}
            >
                <Segment
                    inverted
                    textAlign='center'
                    style={{ padding: '1s0em' }}
                    vertical
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                    >
                        <Container>
                            <Menu.Item position='left'>
                                ExchangeRates
                            </Menu.Item>
                            <Menu.Item as='a' active>
                                Home
                            </Menu.Item>
                            <Menu.Item as='a'>Work</Menu.Item>
                            <Menu.Item as='a'>Company</Menu.Item>
                            <Menu.Item as='a'>Careers</Menu.Item>
                            <Menu.Item position='right'>
                                <Button as='a' inverted={!fixed}>
                                    Log in
                                </Button>
                                <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                    Sign Up
                                </Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </Visibility>

            {children}
        </Responsive>
    )
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

const MobileContainer = ({ children }) => {
    const [ sidebarOpened, setSidebarOpened ] = useState(false);
    return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <Sidebar
                as={Menu}
                animation='push'
                inverted
                onHide={() => setSidebarOpened(false)}
                vertical
                visible={sidebarOpened}
            >
                <Menu.Item as='a' active>
                    Home
        </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item as='a'>Log in</Menu.Item>
                <Menu.Item as='a'>Sign Up</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                    inverted
                    textAlign='center'
                    style={{ padding: '1em 0em' }}
                    vertical
                >
                    <Container>
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item onClick={() => setSidebarOpened(true)}>
                                <Icon name='sidebar' />
                            </Menu.Item>
                            <Menu.Item position='right'>
                                <Button as='a' inverted>
                                    Log in
                </Button>
                                <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                    Sign Up
                </Button>
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>
                {children}
            </Sidebar.Pusher>
        </Responsive>
    )
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

export default {
    DesktopContainer,
    MobileContainer,
    ResponsiveContainer
};
