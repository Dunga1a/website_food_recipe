<template>
    <header class="p-3 text-[16px] text-center text-[#444]">
        <div>
            <button
                class="px-5 py-2 m-3 text-[1em] border border-[#444] text-[#444] rounded"
            >
                Go back
            </button>
            <button
                @click="print"
                class="px-5 py-2 m-3 text-[1em] border border-[#444] text-white bg-[#444444] rounded"
            >
                Print
            </button>
        </div>
        <div class="flex justify-center items-center flex-wrap">
            <div class="flex items-center m-3">
                <input
                    v-model="checkboxValue[0]"
                    type="checkbox"
                    name=""
                    @change="checkboxToggle(0)"
                    id="recipe-check"
                    class="w-6 h-6 text-[#444] bg-gray-100 border-gray-300 rounded focus:ring-slate-200 dark:focus:ring-slate-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label class="ml-2 font-semibold" for="recipe-check">
                    Recipe Image
                </label>
            </div>
            <div class="flex items-center m-3">
                <input
                    v-model="checkboxValue[1]"
                    type="checkbox"
                    name=""
                    @change="checkboxToggle(1)"
                    id="intruction-check"
                    class="w-6 h-6 text-[#444] bg-gray-100 border-gray-300 rounded focus:ring-slate-200 dark:focus:ring-slate-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label class="ml-2 font-semibold" for="intruction-check">
                    Instruction Images
                </label>
            </div>
            <div class="flex items-center m-3">
                <input
                    v-model="checkboxValue[2]"
                    type="checkbox"
                    name=""
                    @change="checkboxToggle(2)"
                    id="notes-check"
                    class="w-6 h-6 text-[#444] bg-gray-100 border-gray-300 rounded focus:ring-slate-200 dark:focus:ring-slate-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label class="ml-2 font-semibold" for="notes-check">
                    Notes
                </label>
            </div>
            <div>
                <input
                    v-model="checkboxValue[3]"
                    type="checkbox"
                    name=""
                    id="nutrition-check"
                    @change="checkboxToggle(3)"
                    class="w-6 h-6 text-[#444] bg-gray-100 border-gray-300 rounded focus:ring-slate-200 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label class="ml-2 font-semibold" for="nutrition-check">
                    Nutrition
                </label>
            </div>
            <div class="w-full"></div>
            <div class="w-full"></div>
            <div class="m-3">
                <span
                    @click.prevent="decrement"
                    class="inline-block w-5 leading-[30px] bg-[#444444] h-[30px] text-white text-center cursor-pointer rounded-l"
                    >-</span
                >
                <input
                    type="text"
                    name=""
                    id=""
                    min="1"
                    class="h-[30px] w-[40px] text-[14px]"
                    v-model="rangeValue"
                />
                <span
                    @click="increment"
                    class="inline-block w-5 leading-[30px] bg-[#444444] h-[30px] text-white text-center cursor-pointer rounded-r"
                    >+</span
                >
                <span class="ml-1 text-[#333]">slices</span>
            </div>
            <div class="m-3">
                <button
                    :class="[
                        'border',
                        'border-[#444]',
                        'text-[#444]',
                        'px-3',
                        'h-[30px]',
                        'rounded-l',
                        fontSize === 'small'
                            ? 'focus:bg-[#444] focus:text-white'
                            : '',
                    ]"
                    @click="changeFontSize('small')"
                >
                    Smaller
                </button>
                <button
                    @click="changeFontSize('normal')"
                    :class="[
                        'border',
                        'border-[#444]',
                        'text-[#444]',
                        'px-3',
                        'h-[30px]',
                        fontSize === 'normal'
                            ? 'bg-[#444] text-white focus:bg-[#444] focus:text-white'
                            : '',
                    ]"
                >
                    Normal
                </button>
                <button
                    @click="changeFontSize('large')"
                    :class="[
                        'border',
                        'border-[#444]',
                        'text-[#444]',
                        'px-3',
                        'h-[30px]',
                        'rounded-r',
                        fontSize === 'large'
                            ? 'focus:bg-[#444] focus:text-white'
                            : '',
                    ]"
                >
                    Large
                </button>
            </div>
        </div>
    </header>
    <div
        :class="[
            'max-w-[950px]',
            'mx-auto',
            'my-[20px]',
            { 'font-size-small': fontSize === 'small' },
            { 'font-size-normal': fontSize === 'normal' },
            { 'font-size-large': fontSize === 'large' },
        ]"
    >
        <div class="border border-slate-400 border-solid p-2" id="recipes">
            <div class="flex">
                <div>
                    <h2 class="font-bold text-[#000000]">
                        Gà xé Mexico (Nồi ăn liền + Nồi hầm)
                    </h2>
                    <span class="block text-black font-light mb-2">
                        Anna Hunley | Keto trong ngọc trai
                    </span>
                    <p class="">
                        Gà xé Mexico theo phong cách nhà hàng có thể được dùng
                        trong món tacos, enchiladas, salad, v.v.!
                    </p>
                </div>
                <div v-if="checkboxValue[0]">
                    <img
                        src="https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-scaled-720x720.jpg.webp"
                        alt=""
                        class="p-3"
                        width="300"
                        height="300"
                    />
                </div>
            </div>

            <div class="flex flex-wrap items-center mb-5">
                <span
                    class="flex-auto h-[1px] border-b-solid border-b-[1px] border-b-[#e0e0e0]"
                ></span>
                <span class="mx-3 text-[24px]"
                    ><svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g fill="#9e9e9e">
                                <g>
                                    <path
                                        d="M12,0 C18.627,0 24,4.373 24,11 C24,19.406 18.646,24 18.646,24 L18.646,24 L5.354,24 C5.354,24 0,19.406 0,11 C0,4.373 5.373,0 12,0 Z M12,2 C6.206,2 2,5.785 2,11 C2,16.956 4.962,20.716 6.168,22 L6.168,22 L17.832,22 C19.032,20.724 22,16.962 22,11 C22,5.785 17.794,2 12,2 Z M15.4175,17.7983 C15.9697847,17.7983 16.4175,18.2460153 16.4175,18.7983 C16.4175,19.3111358 16.0314598,19.7338072 15.5341211,19.7915723 L15.4175,19.7983 L8.5825,19.7983 C8.03021525,19.7983 7.5825,19.3505847 7.5825,18.7983 C7.5825,18.2854642 7.96854019,17.8627928 8.46587887,17.8050277 L8.5825,17.7983 L15.4175,17.7983 Z M12,4.2544 C15.173,4.2544 17.746,6.8264 17.746,10.0004 C17.746,13.1734 15.173,15.7454 12,15.7454 C8.827,15.7454 6.254,13.1734 6.254,10.0004 C6.254,6.8264 8.827,4.2544 12,4.2544 Z M10.9999773,6.38993761 C9.41864646,6.82850486 8.254,8.28073633 8.254,10.0004 C8.254,12.0654 9.935,13.7454 12,13.7454 C14.065,13.7454 15.746,12.0654 15.746,10.0004 C15.746,8.28110051 14.5818468,6.82911997 13.0010273,6.39021638 L13,9.2962 C13,9.84848475 12.5522847,10.2962 12,10.2962 C11.4871642,10.2962 11.0644928,9.91015981 11.0067277,9.41282113 L11,9.2962 Z"
                                    ></path>
                                </g>
                            </g>
                        </g></svg
                ></span>
                <span
                    class="flex-auto h-[1px] border-b-solid border-b-[1px] border-b-[#e0e0e0]"
                ></span>
            </div>
            <div
                class="flex items-center justify-between text-center px-8 mb-5"
            >
                <div>
                    <span class="block"> PREP TIME </span>
                    <span class="block"> 5 mins </span>
                </div>
                <div>
                    <span class="block"> COOK TIME </span>
                    <span class="block"> 15 mins </span>
                </div>
                <div>
                    <span class="block"> TOTAL TIME </span>
                    <span class="block"> 20 mins </span>
                </div>
            </div>
            <!-- <div class="flex flex-wrap justify-between"> -->
            <div class="flex flex-wrap justify-around">
                <div class="flex-auto">
                    <div class="text-[24px] flex flex-wrap items-center">
                        <span
                            class="flex-auto h-[1px] border-b border-b-solid border-b-[#e0e0e0]"
                        ></span>
                        <span class="mx-3">
                            <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    <g fill="#9e9e9e">
                                        <path
                                            d="M19.5441,12.0586 L17.8411,12.3146 L17.8411,14.0376 L17.8411,17.8606 L6.1591,17.8606 L6.1591,14.0376 L6.1591,12.3146 L4.4561,12.0586 C3.0331,11.8446 2.0001,10.6536 2.0001,9.2246 C2.0001,7.6626 3.2471,6.3876 4.7971,6.3406 C4.8651,6.3486 4.9351,6.3556 5.0051,6.3576 L6.3221,6.4136 L6.8931,5.2246 C7.8481,3.2356 9.8051,1.9996 12.0001,1.9996 C14.1951,1.9996 16.1521,3.2356 17.1071,5.2246 L17.6781,6.4136 L18.9951,6.3576 C19.0641,6.3556 19.1321,6.3486 19.2021,6.3406 C20.7531,6.3866 22.0001,7.6626 22.0001,9.2246 C22.0001,10.6536 20.9671,11.8446 19.5441,12.0586 L19.5441,12.0586 Z M6.1591,22.0006 L17.8411,22.0006 L17.8411,19.8606 L6.1591,19.8606 L6.1591,22.0006 Z M19.1141,4.3386 C19.0451,4.3386 18.9801,4.3566 18.9101,4.3596 C17.6741,1.7836 15.0491,-0.0004 12.0001,-0.0004 C8.9511,-0.0004 6.3261,1.7836 5.0901,4.3596 C5.0211,4.3566 4.9551,4.3386 4.8861,4.3386 C2.1881,4.3386 0.0001,6.5266 0.0001,9.2246 C0.0001,11.6736 1.8081,13.6836 4.1591,14.0376 L4.1591,22.3756 C4.1591,23.2696 4.8901,23.9996 5.7831,23.9996 L18.2171,23.9996 C19.1101,23.9996 19.8411,23.2696 19.8411,22.3756 L19.8411,14.0376 C22.1911,13.6836 24.0001,11.6736 24.0001,9.2246 C24.0001,6.5266 21.8131,4.3386 19.1141,4.3386 L19.1141,4.3386 Z"
                                            id="Fill-1"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <div
                            class="flex-auto h-[1px] border-b-[1px] border-b-[#e0e0e0] border-b-solid"
                        ></div>
                    </div>
                    <div class="flex my-3">
                        <div class="flex-1 flex flex-col text-center">
                            <span> COURSE </span>
                            <span> Breads & Muffins </span>
                        </div>
                        <div class="flex-1 flex flex-col text-center">
                            <span> COURSE </span>
                            <span> Breads & Muffins </span>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
                <div class="flex-auto">
                    <div class="text-[24px] flex flex-wrap items-center">
                        <div
                            class="flex-auto h-[1px] border-b-solid border-b-[1px] border-b-[#e0e0e0]"
                        ></div>
                        <span class="mx-3">
                            <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    <g fill="#9e9e9e">
                                        <path
                                            d="M15.9199,4.9443 L18.1399,2.7243 C18.5509,2.3133 19.0909,2.1083 19.6299,2.1083 C20.1699,2.1083 20.7099,2.3133 21.1209,2.7243 C21.9429,3.5473 21.9419,4.8843 21.1209,5.7073 L18.9019,7.9253 C18.0799,8.7483 16.7419,8.7483 15.9199,7.9253 C15.0979,7.1033 15.0979,5.7663 15.9199,4.9443 M23.5529,22.1383 L13.3369,11.9233 L15.3109,9.9493 C15.9559,10.3353 16.6809,10.5413 17.4109,10.5413 C18.4629,10.5413 19.5159,10.1403 20.3159,9.3403 L22.5349,7.1213 C24.1369,5.5183 24.1369,2.9123 22.5349,1.3103 C21.7599,0.5343 20.7279,0.1073 19.6299,0.1073 C18.5329,0.1073 17.5019,0.5343 16.7259,1.3103 L14.5059,3.5303 C13.7299,4.3063 13.3029,5.3383 13.3029,6.4343 C13.3029,7.1883 13.5179,7.9053 13.8959,8.5363 L11.9229,10.5083 L9.9489,8.5353 C10.8909,6.9593 10.6959,4.8863 9.3399,3.5303 L6.1039,0.2933 C5.7129,-0.0977 5.0799,-0.0977 4.6899,0.2933 C4.2989,0.6833 4.2989,1.3163 4.6899,1.7073 L7.9259,4.9443 C8.4909,5.5093 8.6579,6.3153 8.4459,7.0323 L3.6539,2.2403 C3.2639,1.8493 2.6309,1.8493 2.2399,2.2403 C1.8499,2.6313 1.8499,3.2633 2.2399,3.6543 L7.0319,8.4463 C6.3149,8.6583 5.5089,8.4913 4.9429,7.9253 L1.7069,4.6893 C1.3159,4.2983 0.6839,4.2983 0.2929,4.6893 C-0.0981,5.0803 -0.0981,5.7133 0.2929,6.1033 L3.5289,9.3403 C4.3309,10.1403 5.3829,10.5413 6.4349,10.5413 C7.1649,10.5413 7.8899,10.3353 8.5349,9.9493 L10.5089,11.9233 L0.2929,22.1383 C-0.0981,22.5293 -0.0981,23.1623 0.2929,23.5523 C0.4879,23.7483 0.7439,23.8453 0.9999,23.8453 C1.2559,23.8453 1.5119,23.7483 1.7069,23.5523 L11.9229,13.3373 L22.1389,23.5523 C22.3339,23.7483 22.5899,23.8453 22.8459,23.8453 C23.1019,23.8453 23.3569,23.7483 23.5529,23.5523 C23.9429,23.1623 23.9429,22.5293 23.5529,22.1383"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <div
                            class="flex-auto h-[1px] border-b-[1px] border-b-[#e0e0e0] border-b-solid"
                        ></div>
                    </div>
                    <div class="flex my-3">
                        <div class="flex-1 flex flex-col text-center">
                            <span> SERVINGS </span>
                            <span>
                                <p>{{ rangeValue }} slices</p>
                            </span>
                        </div>
                        <div class="flex-1 flex flex-col text-center">
                            <span> CALORIES </span>
                            <span> 264 kcal </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-5">
                <div class="flex items-center">
                    <h2 class="text-black mr-3 font-bold">INGREDIENTS</h2>
                    <span
                        class="flex-auto h-[1px] border-b-solid border-b-[1px] border-b-[#e0e0e0]"
                    ></span>
                </div>
                <ul class="ml-14">
                    <li
                        class="text-black"
                        style="list-style-type: disc"
                        v-for="ingredient in ingredients"
                        :key="ingredient.name"
                    >
                        <span class="mr-3">{{ computeValue(ingredient) }}</span>

                        <span class="">{{ ingredient.name }}</span>
                    </li>
                </ul>
            </div>
            <div class="mb-5">
                <div class="flex items-center">
                    <h2 class="text-black mr-3 font-bold">INSTRUCTIONS</h2>
                    <span
                        class="flex-auto h-[1px] border-b-solid border-b-[1px] border-b-[#e0e0e0]"
                    ></span>
                </div>
                <ul class="ml-14">
                    <li style="list-style-type: decimal">
                        <div style="margin-bottom: 5px">
                            Add the water, chicken, and lime juice to the pot.
                        </div>
                        <img
                            v-if="checkboxValue[1]"
                            width="225"
                            height="300"
                            src="https://ketoinpearls.com/wp-content/uploads/2023/03/Keto-Almond-Flour-Bread-Step2-900x1200.jpg.webp"
                            alt=""
                        />
                    </li>
                    <li style="list-style-type: decimal">
                        <div style="margin-bottom: 5px">
                            Sprinkle spices on top of the chicken.
                        </div>
                        <img
                            v-if="checkboxValue[1]"
                            width="225"
                            height="300"
                            src="https://ketoinpearls.com/wp-content/uploads/2023/03/Keto-Almond-Flour-Bread-Step2-900x1200.jpg.webp"
                            alt=""
                        />
                    </li>
                    <li style="list-style-type: decimal">
                        <div style="margin-bottom: 5px">
                            Add garlic, onion, jalapeño.
                        </div>
                        <img
                            v-if="checkboxValue[1]"
                            width="225"
                            height="300"
                            src="https://ketoinpearls.com/wp-content/uploads/2023/03/Keto-Almond-Flour-Bread-Step2-900x1200.jpg.webp"
                            alt=""
                        />
                    </li>
                    <li style="list-style-type: decimal">
                        <div style="margin-bottom: 5px">
                            Add tomatoes to the top. Do NOT stir.
                        </div>
                        <img
                            v-if="checkboxValue[1]"
                            width="225"
                            height="300"
                            src="https://ketoinpearls.com/wp-content/uploads/2023/03/Keto-Almond-Flour-Bread-Step2-900x1200.jpg.webp"
                            alt=""
                        />
                    </li>
                    <li style="list-style-type: decimal">
                        <div style="margin-bottom: 5px">
                            Close the lid and seal the vent. Cook on HIGH
                            pressure for 15 minutes. Manually (naturally)
                            release the steam.
                        </div>
                        <img
                            v-if="checkboxValue[1]"
                            width="225"
                            height="300"
                            src="https://ketoinpearls.com/wp-content/uploads/2023/03/Keto-Almond-Flour-Bread-Step2-900x1200.jpg.webp"
                            alt=""
                        />
                    </li>
                    <li style="list-style-type: decimal">
                        <div style="margin-bottom: 5px">
                            Remove the chicken to a cutting board. Shred with
                            two forks and return to juices until ready to use or
                            serve.
                        </div>
                        <img
                            v-if="checkboxValue[1]"
                            width="225"
                            height="300"
                            src="https://ketoinpearls.com/wp-content/uploads/2023/03/Keto-Almond-Flour-Bread-Step2-900x1200.jpg.webp"
                            alt=""
                        />
                    </li>
                </ul>
            </div>
            <div class="mb-5" v-if="checkboxValue[2]">
                <div class="flex items-center">
                    <h2 class="text-black mr-3 font-bold">NOTES</h2>
                    <span
                        class="flex-auto h-[1px] border-b-solid border-b-[1px] border-b-[#e0e0e0]"
                    ></span>
                </div>
                <div class="ml-12 text-[#333]">
                    <span style="display: block; margin-bottom: 10px"
                        >Crockpot: add all ingredients to the slow cooker. Cook
                        on low for 5 hours or high for 3 hours.</span
                    >

                    <span style="display: block; margin-bottom: 10px"
                        >Store leftovers in the refrigerator up to 1 week in an
                        airtight container. Freeze leftovers in a freezer safe
                        bag up to 6 months. Thaw in the refrigerator when ready
                        to use.</span
                    >

                    <span style="display: block; margin-bottom;: 10px"
                        ><span><span>Yield:</span>&nbsp;6</span>&nbsp;<span
                            ><span>Serving Size:</span>&nbsp;1</span
                        ><br /><span><em>Amount Per Serving:</em></span
                        >&nbsp;<span><span>Calories:</span>&nbsp;119</span
                        ><span><span>Total Fat:</span>&nbsp;0.6g</span
                        ><span><span>Carbohydrates:</span>&nbsp;5.1g</span
                        ><span><span>Net Carbohydrates:</span>&nbsp;4g</span
                        ><span><span>Fiber:</span>&nbsp;1.1g</span
                        ><span><span>Protein:</span>&nbsp;22.1g</span></span
                    >
                </div>
            </div>
            <div v-if="checkboxValue[3]">
                <div class="flex items-center">
                    <h2 class="text-black mr-3 font-bold">NUTRITION</h2>
                    <span
                        class="flex-auto h-[1px] border-b-solid border-b-[1px] border-b-[#e0e0e0]"
                    ></span>
                </div>
                <div class="flex flex-wrap text-center">
                    <span class="px-3"> Serving: <strong>11g </strong> </span>
                    <span class="px-3">
                        Calories: <strong> 119kcal</strong>
                    </span>
                    <span class="px-3">
                        Carbohydrates: <strong> 5.1g</strong>
                    </span>
                    <span class="px-3"> Protein: <strong> 22.1g</strong> </span>
                    <span class="px-3"> Fat: <strong>0.6g </strong> </span>
                    <span class="px-3"> Fiber: <strong>1.1g </strong> </span>
                    <span class="px-3">
                        Saturated Fat: <strong>6g </strong>
                    </span>
                    <span class="px-3">
                        Polyunsaturated Fat: <strong>22g </strong></span
                    >
                    <span class="px-3">
                        Monounsaturated Fat: <strong>22g </strong></span
                    >
                    <span class="px-3">
                        Cholesterol: <strong>0.2mg </strong></span
                    >
                    <span class="px-3">Sodium: <strong>26mg </strong></span>
                    <span class="px-3"> Potassium: <strong> 29mg</strong></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
const rangeValue = ref(12);
const fontSize = ref("normal");
const checkboxValue = ref([false, false, true, true]);
const ingredients = ref([
    {
        name: "Cups Almond flour",
        multiplier: 0.3,
    },
    {
        name: "Cup Flaxseed flour",
        multiplier: 0.2,
    },
    {
        name: "tsp Baking powder",
        multiplier: 0.1,
    },
]);

const checkboxToggle = (index) => {
    if (checkboxValue.value[index]) {
        checkboxValue.value[index] = true;
        console.log(index);
    } else {
        checkboxValue.value[index] = false;
    }
};

const increment = () => {
    rangeValue.value++;
};

const decrement = () => {
    if (rangeValue.value > 1) {
        rangeValue.value--;
    }
};

const changeFontSize = (size) => {
    fontSize.value = size;
};
onMounted(() => {
    changeFontSize("normal");
});

const computeValue = (component) => {
    const result = rangeValue.value * component.multiplier * 1.5;
    return result.toFixed(2); // Nhân với 1.5
};

const print = () => {
    window.print();
};
</script>

<style scoped>
.font-size-small {
    font-size: 14px;
}

.font-size-normal {
    font-size: 18px;
}

.font-size-large {
    font-size: 22px;
}

@media print {
    header {
        display: none;
    }
}
</style>
