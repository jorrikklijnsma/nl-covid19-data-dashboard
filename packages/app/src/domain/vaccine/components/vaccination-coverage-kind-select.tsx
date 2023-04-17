import { useMemo } from 'react';
import { isPresent } from 'ts-is-present';
import { Box, BoxProps } from '~/components/base';
import { RichContentSelect } from '~/components/rich-content-select';
import { Option } from '~/components/rich-content-select/types';
import { Text } from '~/components/typography';
import { useIntl } from '~/intl';
import { space } from '~/style/theme';

export type CoverageKindProperty = 'autumn_2022' | 'primary_series';

const COVERAGE_KINDS: CoverageKindProperty[] = ['autumn_2022', 'primary_series'];

type VaccinationCoverageKindSelectProps = {
  onChange: (value: CoverageKindProperty) => void;
  initialValue?: CoverageKindProperty;
} & BoxProps;

export function VaccinationCoverageKindSelect(props: VaccinationCoverageKindSelectProps) {
  const { onChange, initialValue = 'primary_series', ...rest } = props;

  const { commonTexts } = useIntl();

  const options: Option<CoverageKindProperty>[] = useMemo(
    () =>
      COVERAGE_KINDS.map((kind) => {
        return {
          value: kind,
          label: commonTexts.vaccinations.coverage_kinds[kind],
          content: (
            <Box paddingRight={space[2]}>
              <Text>{commonTexts.vaccinations.coverage_kinds[kind]}</Text>
            </Box>
          ),
        };
      }).filter(isPresent),
    [commonTexts.vaccinations.coverage_kinds]
  );

  return (
    <RichContentSelect
      label={commonTexts.vaccinations.coverage_kind_dropdown.label}
      visuallyHiddenLabel
      initialValue={initialValue}
      options={options}
      onChange={(option) => onChange(option.value)}
      {...rest}
    />
  );
}
