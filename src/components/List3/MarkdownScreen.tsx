import React, { PropsWithChildren } from 'react';
import { StyleSheet, ScrollView, StatusBar } from 'react-native';

import Markdown from 'react-native-markdown-display';

const copy = `# h1 Heading 8-)

**This is some bold text!**

This is normal text
`;
const MarkdownScreen = ({ children }: PropsWithChildren) => {
    return (
        <ScrollView
            style={styles.page}
            contentInsetAdjustmentBehavior="automatic"
        >
            <Markdown style={markdownStyles}>
                {children}
            </Markdown>
        </ScrollView>
    )
}

export default MarkdownScreen;
const markdownStyles = StyleSheet.create({
    heading1: {
        fontFamily: 'BlackOpsOne',
        color: '#212020',
        marginTop: 15,
        marginBottom: 10,
        lineHeight: 40,
    },
    heading2: {
        fontFamily: 'BlackOpsOne',
        color: '#404040',

        marginTop: 10,
        marginBottom: 5,
        lineHeight: 30,
    },
    body: {
        fontSize: 16,
        fontFamily: 'BlackOpsOne',
        lineHeight: 24,
    },
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        borderRadius: 10,
    },
});
