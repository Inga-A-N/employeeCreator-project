import { useState } from "preact/hooks";

function CreateEmployeeForm() {
  const initialData = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    contractType: "Permanent",
    startDate: "",
    finishDate: "",
    workBasis: "Full_time",
    hoursPerWeek: 0,
  };
  const [newEmployeeData, setNewEmployeeData] = useState(initialData);
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    const { name, value } = e.target;
    setNewEmployeeData({ ...newEmployeeData, [name]: value });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(newEmployeeData, "data to send");
    console.log("submitted");
  };

  return (
    <>
      <h1 className="text-xl font-bold pb-7">Create new employee</h1>

      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            for="firstName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="middleName"
            id="middleName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
            placeholder=" "
            onChange={handleChange}
          />
          <label
            for="middleName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Middle name (optional)
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            for="lastName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            onChange={handleChange}
          />
          <label
            for="address"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              onChange={handleChange}
            />
            <label
              for="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email (Ex. johnsmith@gmail.com)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              pattern="[0-9]+()"
              minlength="8"
              name="phoneNumber"
              id="phoneNumber"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              for="phoneNumber"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              name="contractType"
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
              name="contractType"
              value="Contract"
              className="w-4 h-4 text-[#04c4b2] border-gray-300 focus:ring-2 focus:ring-[#04c4b2] dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
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
              pattern="[0-9]"
              name="startDate"
              id="startDate"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              for="startDate"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Start date
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              pattern="[0-9]"
              name="finishDate"
              id="finishDate"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#058078] peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              for="finishDate"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#058078] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              name="workBasis"
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
              name="workBasis"
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
            min="1"
            step="0.1"
            name="hoursPerWeek"
            id="hoursPerWeek"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={handleChange}
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
