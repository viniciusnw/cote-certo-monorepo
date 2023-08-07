import React, { useEffect } from 'react';
import { Slider } from '@material-ui/core';

type InputRangeProps = {
  min?: number;
  range?: number;
  value?: number;
  isPercentage?: boolean;
  onChange: (newValue: number, percentage: number) => void;
};

export const InputRange = ({
  min,
  onChange,
  value = 0,
  range = 0,
  isPercentage = true,
}: InputRangeProps) => {
  const getCurrentValue = () =>
    isPercentage && range ? Math.floor((value * 100) / range) : value;

  const handleChange = (
    event: React.ChangeEvent<{}>,
    changeValue: number | number[],
  ) => {
    if (isPercentage && range > 0) {
      onChange((Number(changeValue) * range) / 100, Number(changeValue));
    } else {
      onChange(Number(changeValue), 0);
    }
  };

  useEffect(() => {
    const newCurrentValue = getCurrentValue();

    if (isPercentage && newCurrentValue >= 100) {
      onChange(range, 100);
    } else if (!isPercentage && newCurrentValue >= range) {
      onChange(range, 0);
    }
  }, [range]);

  return (
    <>
      <Slider
        step={1}
        min={min || 0}
        defaultValue={0}
        valueLabelDisplay="auto"
        onChangeCommitted={handleChange}
        max={isPercentage ? 100 : range || 100}
        valueLabelFormat={labelValue =>
          `${labelValue}${isPercentage ? '%' : ''}`
        }
        marks={[
          {
            value: 0,
            label: isPercentage ? '0%' : 0,
          },
          {
            label: isPercentage ? '100%' : range,
            value: isPercentage ? 100 : range || 100,
          },
        ]}
      />
    </>
  );
};
