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
    const [characterData, setCharacterData] = useState([]);
    const [classesData, setClassesData] = useState([]);
    const [activeRace, setActiveRace] = useState('')
    //const [activeClass, setActiveClass] = useState('');
    const [raceData, setRaceData] = useState([]);
    // const [alignmentData, setAlignmentData] = useState([]);
    // const [languageData, setLanguageData] = useState([]);
    // const [abilityScoreData, setAbilityScoreData] = useState([]);
    // const [equipmentData, setEquipmentData] = useState([]);
    // const racesRef = useRef([])

    useEffect(function() {
        async function getData() {
            const data = await dungeonsAPI.getAll();
            setCharacterData(data);
        }
        getData();

        async function getClassesData() {
            const classes = await dungeonsAPI.getClasses();
            let classesArray = [];
            classesArray = await classes.results;
            setClassesData(classesArray);

        }
        getClassesData();

        async function getRacesData() {
            const race = await dungeonsAPI.getRaces();
            const raceArray = race.results.map(raceObj => raceObj.name);
            setRaceData(raceArray);
            setActiveRace(raceArray)
            
        }
        getRacesData()

        // async function getAlignmentsData() {
        //     const alignment = await dungeonsAPI.getAlignments();
        //     let alignmentArray = [];
        //     alignmentArray = await alignment.results;
        //     setAlignmentData(alignmentArray);
        // }
        // getAlignmentsData()

        // async function getLanguagesData() {
        //     const language = await dungeonsAPI.getLanguages();
        //     let languageArray = [];
        //     languageArray = await language.results;
        //     setLanguageData(languageArray);
        // }
        // getLanguagesData();

        // async function getAbilityScoreData() {
        //     const abilityScore = await dungeonsAPI.getAbilityScores();
        //     let abilityScoreArray = [];
        //     abilityScoreArray = await abilityScore.results;
        //     setAbilityScoreData(abilityScoreArray);
        // }
        // getAbilityScoreData();

        // async function getEquipmentData() {
        //     const equipment = await dungeonsAPI.getEquipment();
        //     let equipmentArray = [];
        //     equipmentArray = await equipment.results;
        //     setEquipmentData(equipmentArray);
        // }
        // getEquipmentData()
        
    }, []);

    let classNames = classesData.map((el, idx) => <li key={idx}>{el.name}</li>);
    let raceNames = raceData.map((el, idx) => <li key={idx} className={el === activeRace ? 'active': ''} onClick={() => setActiveRace(el)}>{el}</li>);
    async function specificRaceData(index) {
        const currentRace = await dungeonsAPI.specificRace(index);
        currentRace = activeRace;
    } 
    //let alignmentNames = alignmentData.map((el, idx) => <li key={idx}>{el.name}</li>);
    //let languageNames = languageData.map((el, idx) => <li key={idx} >{el.name}</li>);
    //let abilityScoreNames = abilityScoreData.map((el, idx) => <li key={idx}>{el.name}</li>);
    //let equipmentNames = equipmentData.map((el, idx) => <li key={idx}>{el.name}</li>);
    // <AbilityScoreSection abilityScoreNames={abilityScoreNames} />
    // <CharacterDescription alignmentNames={alignmentNames} languageNames={languageNames} />
    // <EquipmentSection equipmentNames={equipmentNames} />
    return (
        <main className='NewCharacter'>
            <aside>
                <ClassList classNames={classNames} />
                <RaceSection raceNames={raceNames} activeRace={activeRace} setActiveRace={setActiveRace} specificRaceData={specificRaceData}/>
            </aside>
            <section id="AbilitySection">
                
            </section>
            <section id="CharacterDescription">
                
            </section>
            <section>
                
            </section>
        </main>
    );
}