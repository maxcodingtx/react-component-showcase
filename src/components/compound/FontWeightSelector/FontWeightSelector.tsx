import React, { useReducer } from "react";
import RadioButton from "../common/RadioButton";

type FontWeight = 200 | 400 | 600 | 800;
type FontWeightState = {
  fontWeight: FontWeight;
};
type Action = { type: FontWeight };

function reducer(state: FontWeightState, action: Action): FontWeightState {
  switch (action.type) {
    case 200:
      return { fontWeight: 200 };
    case 400:
      return { fontWeight: 400 };
    case 600:
      return { fontWeight: 600 };
    case 800:
      return { fontWeight: 800 };
    default:
      return state;
  }
}

const initialState: FontWeightState = { fontWeight: 200 };
const FontWeightSelector: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fontWeights: FontWeight[] = [200, 400, 600, 800];
  return (
    <div className="mx-auto my-[20px] block max-w-[400px] rounded border px-[18px] py-[18px]">
      <div className="grid grid-cols-2 *:p-[2px]">
        {fontWeights.map((weight) => (
          <RadioButton
            key={weight}
            id={`font-weight-${weight}`}
            name="font-weight"
            value={weight.toString()}
            label={`Font Weight ${weight}`}
            checked={state.fontWeight === weight}
            onChange={() => dispatch({ type: weight })}
          />
        ))}
      </div>
      <p>Selected Font Weight: {state.fontWeight}</p>
      <p style={{ fontWeight: state.fontWeight }}>
        Sample Text with Font Weight {state.fontWeight}
      </p>
    </div>
  );
};

export default FontWeightSelector;
