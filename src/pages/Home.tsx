import React, { useState, useEffect } from 'react';

import { 
    Text,
    View,
    TextInput,
    FlatList,
    StyleSheet
} from 'react-native';

import { SkillButton } from '../components/SkillButton';
import { SkillCard } from '../components/SkillCard';

interface MySkillsData {
    id: string;
    skill: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<MySkillsData[]>([]);
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill() {

        const data = {
            id: String(new Date().getTime()),
            skill: newSkill
        }

        setMySkills(oldState => [...oldState, data])
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    }
    
    useEffect( () => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting('Good morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }

    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Gabriel</Text>
            <Text style={styles.greeting}>{greeting}</Text>

            <TextInput
                style={styles.input}
                placeholder='New Skill'
                placeholderTextColor={'#666'}
                onChangeText={setNewSkill}
            />

            <SkillButton onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginTop: 30}]}>My Skills</Text>

            <FlatList
                data={mySkills}
                keyExtractor={ item => item.id }
                renderItem = { ({ item }) => (
                    <SkillCard skill={item.skill} onPress={ () => handleRemoveSkill(item.id)} />
                )}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 30,
        backgroundColor: '#151016'
    },
    title: {
        fontSize: 27,
        color: '#FFF',
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1C21',
        borderRadius: 7,
        marginTop: 20,
        paddingHorizontal: 15
    },
    greeting: {
        color: '#666',
        fontWeight: 'bold',
    }
})