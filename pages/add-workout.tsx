import type { NextPage } from "next";
import { Header } from "../components/Header";
import { RadioInput } from "../components/RadioInput";

const AddWorkout: NextPage = () => {
  return (
    <div>
      <main>
        <Header label={"Log a new training"} />
        <form className="container mx-auto w-10/12 max-w-[300px]">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="radio-group my-6 mt-8">
              <RadioInput name="sport" value="biking" icon="biking.svg" />
              <RadioInput name="sport" value="swimming" icon="swimming.svg" />
              <RadioInput name="sport" value="running" icon="running.svg" />
            </div>
            <div className="w-full before:after: px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight input-focus"
                id="grid-first-name"
                type="date"
                placeholder="22-04-2022"
              />
              <p className="text-red-500 text-xs italic">error message</p>
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                DISTANCE IN KM
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight  input-focus"
                id="grid-first-name"
                type="number"
                placeholder="2,23"
              />
              <p className="text-red-500 text-xs italic"> </p>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                DURATION IN HOURS
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight input-focus"
                id="grid-first-name"
                type="time"
                placeholder="02:00"
              />
              <p className="text-red-500 text-xs italic"></p>
            </div>
            <button className="mx-auto my-4 hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded block uppercase tracking-wide text-sm font-bold bg-white">
              submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddWorkout;
