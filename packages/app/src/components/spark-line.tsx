import type { TimestampedValue } from '@corona-dashboard/common';
import { colors } from '@corona-dashboard/common';
import { scaleLinear } from '@visx/scale';
import { AreaClosed, LinePath } from '@visx/shape';
import { first, last } from 'lodash';
import { isPresent } from 'ts-is-present';

const STEP_WIDTH = 1;
const HEIGHT = 24;
const MARKER_RADIUS = 2.5;

type SparkLineProps<T extends TimestampedValue> = {
  averageProperty: keyof T;
  data: T[];
};

function getDate<T extends TimestampedValue>(value?: T) {
  if (value === undefined) {
    return 0;
  }

  if ('date_unix' in value) {
    return value.date_unix;
  }

  return value.date_start_unix;
}

export function SparkLine<T extends TimestampedValue>(
  props: SparkLineProps<T>
) {
  const { data, averageProperty } = props;

  const getNumberValue = (data: T, key: keyof T): number => {
    const value = data[key];
    return typeof value === 'number' ? value : 0;
  };

  const numberOfPoints = data.length;
  const min = Math.min(
    0,
    ...data.map((d) => getNumberValue(d, averageProperty))
  );
  const max = Math.max(
    0.1,
    ...data.map((d) => getNumberValue(d, averageProperty))
  );
  const xScale = scaleLinear({
    domain: [getDate(first(data)), getDate(last(data))],
    range: [0, STEP_WIDTH * numberOfPoints - MARKER_RADIUS],
  });

  const yScale = scaleLinear({
    domain: [min, max],
    range: [HEIGHT - MARKER_RADIUS, MARKER_RADIUS],
  });

  function getX(dataPoint: T) {
    return xScale(getDate(dataPoint));
  }

  function getY(dataPoint: T) {
    return yScale(getNumberValue(dataPoint, averageProperty));
  }

  const nonNullValues = data.filter((x) => isPresent(x[averageProperty]));
  const lastValue = last(nonNullValues);

  return (
    <svg
      width="100%"
      height={HEIGHT}
      role="img"
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${STEP_WIDTH * numberOfPoints} ${HEIGHT}`}
    >
      <LinePath
        data={nonNullValues}
        x={getX}
        y={getY}
        stroke={colors.primary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <AreaClosed
        data={nonNullValues}
        x={getX}
        y={getY}
        fill={colors.primary}
        fillOpacity={0.3}
        yScale={yScale}
      />
      {lastValue && (
        <circle
          cx={getX(lastValue)}
          cy={getY(lastValue)}
          r={MARKER_RADIUS}
          fill={colors.primary}
        />
      )}
    </svg>
  );
}
