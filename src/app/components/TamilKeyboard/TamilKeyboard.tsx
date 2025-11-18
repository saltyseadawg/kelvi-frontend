// export default function TamilKeyboard() {
//     return (
//         <div id="keyboard-popup">
//             <strong>தமிழ்99 விசைப்பலகை:</strong>

//             {/* <!-- Row 1: Vowels --> */}
//             <div className="keyboard-row">
//                 <button className="char-btn" onClick="addChar('அ')">அ</button>
//                 <button className="char-btn" onClick="addChar('ஆ')">ஆ</button>
//                 <button className="char-btn" onClick="addChar('இ')">இ</button>
//                 <button className="char-btn" onClick="addChar('ஈ')">ஈ</button>
//                 <button className="char-btn" onClick="addChar('உ')">உ</button>
//                 <button className="char-btn" onClick="addChar('ஊ')">ஊ</button>
//                 <button className="char-btn" onClick="addChar('எ')">எ</button>
//                 <button className="char-btn" onClick="addChar('ஏ')">ஏ</button>
//                 <button className="char-btn" onClick="addChar('ஐ')">ஐ</button>
//                 <button className="char-btn" onClick="addChar('ஒ')">ஒ</button>
//                 <button className="char-btn" onClick="addChar('ஓ')">ஓ</button>
//                 <button className="char-btn" onClick="addChar('ஔ')">ஔ</button>
//             </div>

//             {/* <!-- Row 2: Consonants --> */}
//             <div className="keyboard-row">
//                 <button className="char-btn" onClick="addChar('க')">க</button>
//                 <button className="char-btn" onClick="addChar('ங')">ங</button>
//                 <button className="char-btn" onClick="addChar('ச')">ச</button>
//                 <button className="char-btn" onClick="addChar('ஞ')">ஞ</button>
//                 <button className="char-btn" onClick="addChar('ட')">ட</button>
//                 <button className="char-btn" onClick="addChar('ண')">ண</button>
//                 <button className="char-btn" onClick="addChar('த')">த</button>
//                 <button className="char-btn" onClick="addChar('ந')">ந</button>
//                 <button className="char-btn" onClick="addChar('ப')">ப</button>
//                 <button className="char-btn" onClick="addChar('ம')">ம</button>
//             </div>

//             {/* <!-- Row 3: More consonants --> */}
//             <div className="keyboard-row">
//                 <button className="char-btn" onClick="addChar('ய')">ய</button>
//                 <button className="char-btn" onClick="addChar('ர')">ர</button>
//                 <button className="char-btn" onClick="addChar('ல')">ல</button>
//                 <button className="char-btn" onClick="addChar('வ')">வ</button>
//                 <button className="char-btn" onClick="addChar('ழ')">ழ</button>
//                 <button className="char-btn" onClick="addChar('ள')">ள</button>
//                 <button className="char-btn" onClick="addChar('ற')">ற</button>
//                 <button className="char-btn" onClick="addChar('ன')">ன</button>
//             </div>

//             {/* <!-- Row 4: Special symbols --> */}
//             <div className="keyboard-row">
//                 <button className="char-btn" onClick="addChar('ஶ')">ஶ</button>
//                 <button className="char-btn" onClick="addChar('ஷ')">ஷ</button>
//                 <button className="char-btn" onClick="addChar('ஸ')">ஸ</button>
//                 <button className="char-btn" onClick="addChar('ஹ')">ஹ</button>
//                 <button className="char-btn" onClick="addChar('ஃ')">ஃ</button>
//                 <button className="char-btn" onClick="addChar('ௐ')">ௐ</button>
//                 <button className="char-btn" onClick="addChar(' ')">␣</button>
//                 <button className="char-btn" onClick="removeChar()">⌫</button>
//             </div>
//         </div>
//     )

// }

// function ButtonZH() {
//     return (
//         <button type="button">
//             <img src="/images/tamil-zh.svg" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white icon-svg" aria-hidden="true">
//             </img>
//         </button>
//     )
// }


// function addChar(char) {
//     const start = input.selectionStart;
//     const end = input.selectionEnd;
//     const text = input.value;
//     input.value = text.substring(0, start) + char + text.substring(end);
//     input.selectionStart = input.selectionEnd = start + char.length;
//     input.focus();
// }

// function removeChar() {
//     const start = input.selectionStart;
//     const end = input.selectionEnd;
//     if (start === end && start > 0) {
//         input.value = input.value.slice(0, start - 1) + input.value.slice(end);
//         input.selectionStart = input.selectionEnd = start - 1;
//     } else {
//         input.value = input.value.slice(0, start) + input.value.slice(end);
//         input.selectionStart = input.selectionEnd = start;
//     }
//     input.focus();
// }

// function toggleKeyboard() {
//     keyboardPopup.style.display = keyboardPopup.style.display === 'none' ? 'block' : 'none';
//     input.focus();
// }