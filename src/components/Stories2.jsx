import React from 'react'

function Stories2() {
  return (
    <div>
        <ul class="flex space-x-6">
    <li class="flex flex-col items-center space-y-1 ">
      <div class="relative bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
          <img class="w-24 h-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty"/>
        </a>
        <button class="absolute bg-blue-500 text-white text-2xl font-medium w-8 h-8 rounded-full bottom-0 right-1 border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700 focus:outline-none">
          <div class="transform -translate-y-px">+</div>
        </button>
      </div>

      <a href="#">kitty_one</a>
    </li>

    <li class="flex flex-col items-center space-y-1 ">
      <div class="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
          <img class="w-24 h-24 rounded-full" src="https://placekitten.com/201/200" alt="cute kitty"/>
        </a>
      </div>

      <a href="#">kitty_two</a>
    </li>

    <li class="flex flex-col items-center space-y-1 ">
      <div class="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
          <img class="w-24 h-24 rounded-full" src="https://placekitten.com/200/203" alt="cute kitty"/>
        </a>
      </div>

      <a href="#">kitty_three</a>
    </li>

    <li class="flex flex-col items-center space-y-1 ">
      <div class="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
          <img class="w-24 h-24 rounded-full" src="https://placekitten.com/202/201" alt="cute kitty"/>
        </a>
      </div>

      <a href="#">kitty_four</a>
    </li>

  </ul>
    </div>
  )
}

export default Stories2