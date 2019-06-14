import React, { Component } from 'react'
import { StyleSheet } from 'react-native';

import { Button, Block, Text } from '../components';
import { theme } from '../constants';

export default class Welcome extends Component {
    static navigationOptions = {
        header: null,
    }
    renderIllustrations() {
        return (
            <Block>
                <Text>
                    Image
                </Text>
            </Block>
        )
    }
    renderSteps() {
        return (
            <Block>
                <Text>
                    * * *
        </Text>
            </Block>
        )
    }
    render() {
        return (
            <Block>
                <Block center middle flex={0.5}>
                    <Text h1 center bold>
                        Your home.
                    <Text h1 primary>Greener.</Text>
                    </Text>
                    <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}
                    >Enjoy the experience.
                    </Text>
                </Block>
                <Block center middle>
                    {this.renderIllustrations()}
                    {this.renderSteps()}
                </Block>
                <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
                    <Button gradient onPress={() => { }}>
                        <Text center semibold white>Login</Text>
                    </Button >
                    <Button onPress={() => { }}>
                        <Text center semibold>Signup</Text>
                    </Button >
                    <Button onPress={() => { }}>
                        <Text center caption gray>Terms of service</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({

})
