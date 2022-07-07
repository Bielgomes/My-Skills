import React from 'react';

import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface Skill extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest } : Skill) {
    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={.7}
            {...rest}
        >
            <Text style={styles.name}>{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1F1C21',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        alignItems: 'center'
    },
    name: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
    }
})