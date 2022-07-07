import React from 'react';

import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

type SkillCardProps = TouchableOpacityProps

export function SkillButton({ ...rest } : SkillCardProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            {...rest}
        >
            <Text style={styles.title}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        paddingVertical: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
    }
})