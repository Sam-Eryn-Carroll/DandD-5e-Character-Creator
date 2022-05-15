import './NewCharacter.css'
import * as dungeonsAPI from '../../utilities/dandd-api';
import { useEffect, useState, useRef } from 'react';
import RaceSection from '../../components/RaceSection/RaceSection';
import ClassList from '../../components/ClassList/ClassList';
import BasicInfo from '../../components/BasicInfo/BasicInfo';
import RaceDetails from '../../components/RaceDetails/RaceDetails';

export default function NewCharacter() {
    const [classes, setClasses] = useState([]);
    const [races, setRaces] = useState([]);
    const [proficiencies, setProficiencies] = useState([]);
    const [proficienciesChoice, setProficienciesChoice] = useState([])
    const [traits, setTraits] = useState([]);
    const [languages, setLanguages] = useState([])
    const [languageChoice, setLanguageChoice] = useState([])
    const [newCharacterData, setNewCharacterData] = useState({
        name: '',
        charClass: '',
        race: '',
        level: 0,
        proficiencies: [],
        traits: [],
        languages: '',
        speed: '',
    });
    
    useEffect(function() {
        async function getClassesData() {
            const classes = await dungeonsAPI.getClasses();
            setClasses(classes.results);
        }
        getClassesData();

        async function getRacesData() {
            const races = await dungeonsAPI.getRaces();
            setRaces(races.results);
        }
        getRacesData()

        async function specificRaceData(index) {
            setProficiencies([])
            setLanguages([])
            setTraits([])
            const specificRace = await dungeonsAPI.specificRace(index);

            if (specificRace.starting_proficiency_options && specificRace.starting_proficiency_options.from.length + 1 > 0) {
                function getRaceProficiencies() {
                    setProficienciesChoice(specificRace.starting_proficiency_options.choose)
                    setProficiencies(specificRace.starting_proficiency_options.from);
                    console.log(specificRace.starting_proficiency_options.from)
                }
                getRaceProficiencies()
            }

            if (specificRace.language_options) {
                function getRaceLanguages() {
                    setLanguageChoice(specificRace.language_options.choose)
                    setLanguages(specificRace.language_options.from);
                }
                getRaceLanguages()
            } 

            if (specificRace.traits) {
                function getRaceTraits() {
                    setTraits(specificRace.traits)
                }
                getRaceTraits()
            }

            setNewCharacterData({
                ...newCharacterData,
                traits: specificRace.traits,
                proficiencies: [],
                languages: [],
                speed: specificRace.speed
            })
        }
        specificRaceData(newCharacterData.race)

    }, [newCharacterData.race]);
   
    function handleChange(propToChange, value) {
        setNewCharacterData({
            ...newCharacterData, 
            [propToChange]: value
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
            <aside id='LeftAside'>
                <RaceSection races={races} handleChange={handleChange} proficiencies={proficiencies} languages={languages} languageChoice={languageChoice} proficienciesChoice={proficienciesChoice} traits={traits} newCharacterData={newCharacterData}/>
            </aside>
            <section>
            <BasicInfo newCharacterData={newCharacterData} handleNameChange={handleNameChange} />
                <RaceDetails races={races} handleChange={handleChange} proficiencies={proficiencies} languages={languages} languageChoice={languageChoice} proficienciesChoice={proficienciesChoice} traits={traits} newCharacterData={newCharacterData}/>
            </section>
            <ClassList classes={classes} handleChange={handleChange} newCharacterData={newCharacterData} />
        </main>
    );
}