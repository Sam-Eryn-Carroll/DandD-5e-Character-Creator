import './NewCharacter.css'
import * as dungeonsAPI from '../../utilities/dandd-api';
import { useEffect, useState, useRef } from 'react';
import RaceSection from '../../components/RaceSection/RaceSection';
import ClassList from '../../components/ClassList/ClassList';
import LevelSection from '../../components/LevelSection/LevelSection';
import AbilityScoreSection from '../../components/AbilityScoreSection/AbilityScoreSection';
import CharacterDescription from '../../components/CharacterDescription/CharacterDescripton';
import EquipmentSection from '../../components/EquipmentSection/EquipmentSection';

export default function NewCharacter() {
    const [classes, setClasses] = useState([]);
    const [races, setRaces] = useState([]);
    const [proficiencies, setProficiencies] = useState([]);
    const [traits, setTraits] = useState([]);
    const [languages, setLanguages] = useState([])
    const [newCharacterData, setNewCharacterData] = useState({
        name: '',
        charClass: '',
        race: '',
        level: 0,
        proficiencies: [],
        traits: '',
        languages: ''
    });
    
    useEffect(function() {

        async function getClassesData() {
            const classes = await dungeonsAPI.getClasses();
            setClasses(classes.results);
        }
        getClassesData();

        async function getRacesData() {
            const races = await dungeonsAPI.getRaces();
            console.log(races)
            setRaces(races.results);
        }
        getRacesData()
        
        async function specificRaceData(index) {
            const specificRace = await dungeonsAPI.specificRace(index);
            if (specificRace.starting_proficiency_options, specificRace.language_options) {
                console.log(specificRace)
                setProficiencies(specificRace.starting_proficiency_options.from);
                setLanguages(specificRace.language_options.from);
            }
        //     setTraits(specificRace.traits);
                
        }
        specificRaceData(newCharacterData.race)
        
    }, [newCharacterData.race,]);
   
    function handleChange(propToChange, value) {
        //console.log(propToChange, value)
        setNewCharacterData({
            ...newCharacterData, 
            [propToChange]: value
        })
    }
    function handleMultiChange(evt) {
        let value = evt.target.value;
        let name = evt.target.name;

        setNewCharacterData({
            ...newCharacterData,
            [name]: value
            
        })
    }
    function handleNameChange(evt) {
        setNewCharacterData({
            ...newCharacterData,
            [evt.target.name]: evt.target.value
        })
    }
    return (
        <main className='NewCharacter'>
            <aside>
                <ClassList classes={classes} handleChange={handleChange} newCharacterData={newCharacterData} handleNameChange={handleNameChange}/>
                <RaceSection races={races} handleChange={handleChange} proficiencies={proficiencies} handleMultiChange={handleMultiChange} languages={languages} />
            </aside>
            <section>
                
            </section>
        </main>
    );
}