import BlackMirror from '../img/BlackMirror.jpg';
import BreakingBad from '../img/BreakingBad.jpg';
import DeathNote from '../img/DeathNote.jpg';
import GameOfThrones from '../img/GameOfThrones.jpg';
import TheWalkingDead from '../img/TheWalkingDead.jpg';
import TheWire from '../img/TheWire.jpg';


const covers = [
    {
        id: 'blackmirror',
        title: 'Black Mirror',
        image: BlackMirror,
        synopsis: `An anthology series exploring a twisted, high-tech world where humanity's greatest innovations and darkest instincts collide.`,
        stars: `Stars: Daniel Lapaine, Hannah John-Kamen, Michaela Coel`, 
        creator: 'Creator: Charlie Brooker'
},
    {
        id: 'breakingbad', 
        title: 'Breaking Bad', 
        image: BreakingBad, 
        synopsis: `A “Breaking Bad” movie from original series creator Vince Gilligan is set to begin production in New Mexico later this month.

    According to the Albuquerque Journal, the film will begin shooting under the title “Greenbrier” in mid-November and will run through February.
    
    The New Mexico film office told the Journal a film from Sony Pictures with such a title will begin shooting next month. The project is said to track the escape of a kidnapped man and his quest for freedom. The film office did not immediately respond to TheWrap’s request for comment.
    ` },
    {
        id: 'deathnote', 
        title: 'Death Note', 
        image: DeathNote, 
        synopsis: `A high school student named Light Turner discovers a mysterious notebook that has the power to kill anyone whose name is written within its pages, and launches a secret crusade to rid the world of criminals.`,
        creator: `Director: Adam Wingard`,
        stars: `Stars: Nat Wolff, Lakeith Stanfield, Margaret Qualley`
    },
    {
        id: 'gameofthrones', 
        title: 'Game Of Thrones', 
        image: GameOfThrones, 
        synopsis: `Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.`,
        creator: `Creators: David Benioff, D.B. Weiss`,
        stars: `Stars: Emilia Clarke, Peter Dinklage, Kit Harington`
    },
    {
        id: 'thewalkingdead', 
        title: 'The Walking Dead', 
        image: TheWalkingDead, 
        synopsis: `Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins, and must lead a group of survivors to stay alive.`,
        creator: `Creators: Frank Darabont, Angela Kang`,
        stars: `Stars: Andrew Lincoln, Norman Reedus, Melissa McBride `
    },
    {
        id: 'thewire',
        title: 'The Wire', 
        image: TheWire, 
        synopsis: `Baltimore drug scene, seen through the eyes of drug dealers and law enforcement.`,
        creator: `Creator: David Simon`,
        stars: `Stars: Dominic West, Lance Reddick, Sonja Sohn` 
    }
];


export default covers;