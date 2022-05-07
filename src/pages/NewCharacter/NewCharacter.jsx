import * as dungeonsAPI from '../../utilities/dandd-api';
import { useEffect, useState } from 'react';

export default function NewCharacter() {
    // const [classes, setClasses] = useState('')
    // async function addClass(index) {
    //     const newClass = await dungeonsAPI.chooseClass(index);
    //     setClasses(newClass)
    // }
    const [characterData, setCharacterData] = useState([]);
    const [classesData, setClassesData] = useState([]);
    const [raceData, setRaceData] = useState([])
    const [alignmentData, setAlignmentData] = useState([]);
    // const [activeCat, setActiveCat] = useState('')
    // const categoriesRef = useRef([])
    // useEffect(function() {
    //     async function getData() {
    //         const data = await dungeonsAPI.getAll();
    //         categoriesRef.current = data.reduce((cats, data) => {
    //             const cat = data.category.name;
    //             return cats.includes(cat) ? cats : [...cats, cat]
    //         }, []);
    //         setActiveCat(categoriesRef.current[1]);
    //         setCharacterData(data)
    //     }
    //     getData()
    // }, [])
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
    }, []);

    let classNames = classesData.map((el, idx) => <option value="{el.name}" key={idx}>{el.name}</option>);
    let raceNames = raceData.map((el, idx) => <option value="{el.name}" key={idx}>{el.name}</option>);
    let alignmentNames = alignmentData.map((el, idx) => <option value="{el.name}" key={idx}>{el.name}</option>);
    //const classData = classesData.map(({classData}) =>

    //console.log(classesData.results.size)
    return (
        <main>
            <form>
                <label>Name: </label>
                <input type="text"></input>
                <label>Class: </label>
                <select>{classNames}</select>
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