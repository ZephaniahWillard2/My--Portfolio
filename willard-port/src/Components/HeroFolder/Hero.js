import React, { useState, useEffect } from 'react';
import './HeroStyles.css';

const Hero = () => {
  const message = "Zephaniah Willard<br/>Frontend Developer";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timer = setTimeout(() => {
        if (message[index] === '<') {
          // Skip over the <br/> tag properly
          setDisplayedText((prev) => prev + '<br/>');
          setIndex((prev) => prev + 5); // Move past <br/>
        } else {
          setDisplayedText((prev) => prev + message[index]);
          setIndex((prev) => prev + 1);
        }
      }, 100); // Adjust the delay as needed
      return () => clearTimeout(timer); // Clear the timeout if the component unmounts or the index changes
    }
  }, [index, message]);

  return (
    <div className="heroContainer">
      <p dangerouslySetInnerHTML={{ __html: displayedText }}></p>
    </div>
  );
};

export default Hero;






//1st
// const Hero = () => {
//   const message = "Zephaniah Willard<br/>Frontend Developer";
//   const [displayedText, setDisplayedText] = useState('');
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < message.length) {
//       const timer = setTimeout(() => {
//         setDisplayedText((prev) => prev + message[index]);
//         setIndex((prev) => prev + 1);
//       }, 100); // Adjust the delay as needed
//       return () => clearTimeout(timer); // Clear the timeout if the component unmounts or the index changes
//     }
//   }, [index, message]);

//   return (
//     <div className="heroContainer">
//       <p>{displayedText}</p>
//     </div>
//   );
// };

// export default Hero;

// const Hero = () =>{
    

//   const [hasTransitioned, setHasTransitioned] = useState(false);

//   useEffect(() => {
//     // Trigger the transition after the component mounts
//     setHasTransitioned(true);
//   }, []);

//   return (
//     <div className={`heroContainer ${hasTransitioned ? 'transition' : ''}`}>
//         <h1>Zephaniah Willard</h1>
//         <h2>Frontend Developer</h2>
//     </div>
//   );


// };

// export default Hero;











//2nd
// const Hero = () => {
//   const message = "Zephaniah Willard<br/>Frontend Developer";
//   const [displayedText, setDisplayedText] = useState('');
//   const [index, setIndex] = useState(0);
//   const [hasTransitioned, setHasTransitioned] = useState(false);

//   useEffect(() => {
//     const transitioned = localStorage.getItem('hasTransitioned');
//     if (transitioned) {
//       // If the transition has already happened, show the full message immediately
//       setDisplayedText(message.replace(/<br\/>/g, '\n'));
//       setHasTransitioned(true);
//     }
//   }, [message]);

//   useEffect(() => {
//     if (index < message.length && !hasTransitioned) {
//       const timer = setTimeout(() => {
//         if (message.slice(index, index + 5) === '<br/>') {
//           // Properly handle the <br/> tag
//           setDisplayedText((prev) => prev + '<br/>');
//           setIndex((prev) => prev + 5); // Move past <br/>
//         } else {
//           setDisplayedText((prev) => prev + message[index]);
//           setIndex((prev) => prev + 1);
//         }
//       }, 100); // Adjust the delay as needed

//       if (index === message.length - 1) {
//         localStorage.setItem('hasTransitioned', 'true');
//         setHasTransitioned(true);
//       }

//       return () => clearTimeout(timer); // Clear the timeout if the component unmounts or the index changes
//     }
//   }, [index, message, hasTransitioned]);

//   return (
//     <div className="heroContainer">
//       <p dangerouslySetInnerHTML={{ __html: displayedText.replace(/\n/g, '<br/>') }}></p>
//     </div>
//   );
// };

// export default Hero;


