"use client";

import { submitSearch } from "@/app/actions/actions"
import { useActionState } from "react"

export default function Searchbar() {
    const [state, action] = useActionState(submitSearch, "")
    return (
        <div>
            <form className="flex items-center max-w-lg mx-auto" action={action}>
                <label htmlFor="search-input" className="sr-only">Search</label>
                <div className="relative w-full">
                    <input type="text" id="search-bar" name="query" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a word" required />
                    <div className="absolute inset-y-0 end-0 flex items-center pe-3">
                        <button type="button" id="tamil-btn">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 200 200">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m 125.51562,42.503906 c -10.03834,0.0032 -11.47233,0.242658 -16.15429,2.708985 C 103.23718,48.438923 97.761169,54.51567 96.160156,59.859375 95.373595,62.484681 95,75.214518 95,99.365234 V 135 H 77 59 V 89.5 44 H 50.5 42 V 93.5 143 h 26.373047 26.373047 l 0.482422,5.0332 c 0.576187,5.99649 3.371088,9.46764 8.974604,11.14649 l 3.82422,1.14453 -4.11914,2.33984 c -2.26504,1.28657 -6.297632,4.29882 -8.960934,6.69336 -6.075464,5.46236 -11.427465,7.05055 -21.69336,6.4375 -9.380681,-0.56019 -15.369847,-3.24682 -17.224609,-7.72461 -1.660909,-4.00979 -0.884333,-5.65364 3.679687,-7.79492 3.093133,-1.45119 3.84787,-2.37695 4.103516,-5.02734 0.262982,-2.72644 -0.108857,-3.40949 -2.314453,-4.24805 -4.332382,-1.64717 -7.296008,-1.1532 -10.560547,1.76367 -5.046184,4.50876 -5.669673,15.07799 -1.242188,21.04883 2.982465,4.02211 9.541151,8.29292 14.976563,9.75391 6.691572,1.79866 22.655802,1.75881 29.693359,-0.0742 3.182274,-0.82888 10.803066,-4.31638 16.933596,-7.75 L 122.44531,169.5 134.72266,169.14648 147,168.79492 V 162.89648 157 h -9.81836 c -12.12082,0 -19.05213,-1.86852 -22.60742,-6.09375 C 113.15794,149.2231 112,146.75664 112,145.42383 112,143.31555 112.46124,143 115.54297,143 c 1.94819,0 7.01069,-0.70248 11.25,-1.56055 19.91259,-4.03044 33.15361,-15.62033 37.67383,-32.97461 1.81816,-6.98037 2.05281,-25.893299 0.41797,-33.666012 -2.72157,-12.939495 -10.69743,-23.613351 -21.6836,-29.017578 -6.31481,-3.106332 -7.25484,-3.280744 -17.68555,-3.277344 z m 4.85938,7.869141 c 3.14754,0.08213 6.33378,0.85106 9.23828,2.373047 6.42693,3.367773 12.88089,11.259496 15.5625,19.03125 3.11531,9.028687 3.3307,27.79396 0.41602,36.222656 -4.53864,13.12487 -13.0537,20.47393 -28.29688,24.42383 C 123.94852,133.29097 119.13858,134 116.60547,134 H 112 V 97.648438 c 0,-36.058802 0.0187,-36.380429 2.25391,-39.697266 3.15573,-4.682803 8.81364,-7.356967 14.77539,-7.572266 0.44713,-0.01615 0.89605,-0.01759 1.3457,-0.0059 z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <button type="submit" id="submit-btn" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>Search
                </button>
            </form>
        </div>
    )
}
//   const keyboardPopup = document.getElementById('keyboard-popup');
//   const input = document.getElementById('tamil-input');

//   document.getElementById('keyboard-toggle').addEventListener('click', () => {
//     toggleKeyboard();
//   });
