import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

import { InputCnt } from "../InputCnt";
import { CheckboxInput } from "./CheckboxInput";
import { Label } from "./Label";
import { DistanceInput } from "./DistanceInput";
import { DurationInput } from "./DurationInput";

export const PartialWorkoutForms = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, remove, insert } = useFieldArray({
    name: "parts",
  });

  const [addBiking, setAddBiking] = useState(false);
  const [addRunning, setAddRunning] = useState(false);
  const [addSwimming, setAddSwimming] = useState(false);

  const handleBiking = () => {
    console.log("bike");
    if (!addBiking) {
      insert(0, {
        distanceInMeters: "20",
        durationInSeconds: "360",
        discipline: "biking",
      });
    } else {
      remove(0);
    }
    setAddBiking(!addBiking);
  };

  const handleRunning = () => {
    console.log("run");
    if (!addRunning) {
      insert(1, {
        distanceInMeters: 20,
        durationInSeconds: 360,
        discipline: "running",
      });
    } else {
      if (fields.length === 1) {
        remove(0);
      } else if (fields.length > 1) {
        remove(1);
      }
    }
    setAddRunning(!addRunning);
  };

  const handleSwimming = () => {
    if (!addSwimming) {
      insert(2, {
        distanceInMeters: "20",
        durationInSeconds: "01:00:00",
        discipline: "swimming",
      });
    } else {
      if (fields.length === 3) {
        remove(2);
      } else if (fields.length === 2) {
        remove(1);
      } else if (fields.length === 1) {
        remove(0);
      }
    }
    setAddSwimming(!addSwimming);
  };

  return (
    <>
      <section className="radio-group">
        <CheckboxInput
          value="biking"
          icon="biking.svg"
          onChange={handleBiking}
        />
        <CheckboxInput
          value="running"
          icon="running.svg"
          onChange={handleRunning}
        />
        <CheckboxInput
          value="swimming"
          icon="swimming.svg"
          onChange={handleSwimming}
        />
      </section>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              {/* @ts-ignore */}
              <h3 className="text-blue-500 font-bold text-center uppercase text-lg">{item.discipline}</h3>
              <InputCnt>
                <Label htmlFor={`parts.${index}.distanceInMeters`} label="DISTANCE IN KM" />
                <DistanceInput index={index} />
              </InputCnt>
              <InputCnt>
                <Label
                  htmlFor={`parts.${index}.durationInSeconds`}
                  label="DURATION (hh:mm:ss)"
                />
                <DurationInput index={index} />
              </InputCnt>
              <input
                className="hidden"
                key={item.id}
                {...register(`parts.${index}.discipline`)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
