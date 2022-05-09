import * as dungeonsAPI from '../../utilities/dandd-api';
import { useEffect, useState } from 'react';
import RaceSection from '../../components/RaceSection/RaceSection';
import ClassList from '../../components/ClassList/ClassList';
import LevelSection from '../../components/LevelSection/LevelSection';
import AblityScoreSection from '../../components/AblityScoreSection/AbilityScoreSection';
import CharacterDescription from '../../components/CharacterDescription/CharacterDescripton';
import EquipmentSection from '../../components/EquipmentSection/EquipmentSection';

export default function NewCharacter() {
    const [characterData, setCharacterData] = useState([]);
    const [classesData, setClassesData] = useState([]);
    const [activeClass, setActiveClass] = useState('');
    const [raceData, setRaceData] = useState([]);
    const [alignmentData, setAlignmentData] = useState([]);
    const [languageData, setLanguageData] = useState([]);

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
            let raceArray = [];
            raceArray = await race.results;
            setRaceData(raceArray);
        }
        getRacesData()

        async function getAlignmentsData() {
            const alignment = await dungeonsAPI.getAlignments();
            let alignmentArray = [];
            alignmentArray = await alignment.results;
            setAlignmentData(alignmentArray);
        }
        getAlignmentsData()

        async function getLanguagesData() {
            const language = await dungeonsAPI.getLanguages();
            let languageArray = [];
            languageArray = await language.results;
            setLanguageData(languageArray);
        }
        getLanguagesData();

    }, []);

    let classNames = classesData.map((el, idx) => <li value="{el.name}" key={idx}>{el.name}</li>);
    let raceNames = raceData.map((el, idx) => <option value="{el.name}" key={idx}>{el.name}</option>);
    let alignmentNames = alignmentData.map((el, idx) => <option value="{el.name}" key={idx}>{el.name}</option>);
    let languageNames = languageData.map((el, idx) => <option value="{el.name}" key={idx}>{el.name}</option>);
    
    return (
        <main>
            <form>
                <label>Name: </label>
                <input type="text"></input>
                <ClassList classNames={classNames}/>
                <label>Level: </label>
                <label>Background: </label>
                <label>Race: </label>
                <select>{raceNames}</select>
                <label>Alignment:</label>
                <select>{alignmentNames}</select>
                <br></br>
                <input type="submit" value="Submit"/>
                
            </form>
        </main>
    );
}