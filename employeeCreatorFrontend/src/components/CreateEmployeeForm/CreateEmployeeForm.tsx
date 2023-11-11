function CreateEmployeeForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <h1 className="text-xl font-bold">Create new employee</h1>

      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
            placeholder=" "
            required
          />
          <label
            for="first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="middle_name"
            id="middle_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
            placeholder=" "
          />
          <label
            for="middle_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Middle name (optional)
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
            placeholder=" "
            required
          />
          <label
            for="last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="address"
            id="address"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
            placeholder=" "
            required
          />
          <label
            for="address"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Address
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer
              "
              placeholder=" "
              required
            />
            <label
              for="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email (Ex. johnsmith@gmail.com)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              pattern="[0-9]+()"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
              placeholder=" "
              required
            />
            <label
              for="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
        </div>
        {/* Contract type */}
        <legend className="pb-4 font-bold text-gray-600">Contract type</legend>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="flex items-center mb-4  ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              id="type-option-1"
              type="radio"
              name="types"
              value="Permanent"
              className="w-4 h-4 text-[#04c4b2] border-gray-300 focus:ring-2 focus:ring-[#04c4b2] dark:focus:ring-[#058078] dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              checked
            />
            <label
              for="type-option-1"
              className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Permanent
            </label>
          </div>

          <div className="flex items-center mb-4 p-4 ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              id="type-option-2"
              type="radio"
              name="types"
              value="Contract"
              className="w-4 h-4 text-[#04c4b2] border-gray-300 focus:ring-2 focus:ring-[#04c4b2] dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="type-option-2"
              className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Contract
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              pattern="[0-9]-"
              name="start_date"
              id="start_date"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
              placeholder=" "
              required
            />
            <label
              for="start_date"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Start date
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              pattern="[0-9]-"
              name="finish_date"
              id="finish_date"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
              placeholder=" "
              required
            />
            <label
              for="finish_date"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Finish date
            </label>
          </div>
        </div>

        {/* Work basis */}
        <legend className="pb-4 font-bold text-gray-600">Work basis</legend>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="flex items-center mb-4  ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              id="basis-option-1"
              type="radio"
              name="basis"
              value="Full_time"
              className="w-4 h-4 text-[#04c4b2] border-gray-300 focus:ring-2 focus:ring-[#04c4b2] dark:focus:ring-[#058078] dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              checked
            />
            <label
              for="type-option-1"
              className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Full-time
            </label>
          </div>

          <div className="flex items-center mb-4 p-4 ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              id="basis-option-2"
              type="radio"
              name="basis"
              value="Part_time"
              className="w-4 h-4 text-[#04c4b2] border-gray-300 focus:ring-2 focus:ring-[#04c4b2] dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="type-option-2"
              className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Part-time
            </label>
          </div>
        </div>

        <div class="flex w-1/4">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            Hours per week
          </span>
          <input
            type="number"
            pattern="[0-9]."
            name="hours_per_week"
            id="hours_per_week"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-[#04c4b2] hover:bg-[#058078] focus:ring-4 focus:outline-none focus:ring-[#c7fff5] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </>
  );
}

export default CreateEmployeeForm;
