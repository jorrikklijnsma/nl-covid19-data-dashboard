import { DifferenceDecimal } from '@corona-dashboard/common';
import { useMemo } from 'react';
import { isPresent } from 'ts-is-present';
import { Box } from '~/components/base';
import { TableText } from '~/domain/variants/variants-table-tile';
import { useIntl } from '~/intl';
import { VariantRow } from '~/static-props/variants/get-variant-table-data';
import { getMaximumNumberOfDecimals } from '~/utils/get-maximum-number-of-decimals';
import {
  Cell,
  HeaderCell,
  PercentageBarWithNumber,
  StyledTable,
  VariantDifference,
  VariantNameCell,
} from '.';
import { NoPercentageData } from './no-percentage-data';

const columnKeys = ['variant_titel', 'percentage', 'vorige_meeting'] as const;

type WideVariantsTableProps = {
  rows: VariantRow[];
  text: TableText;
};

export function WideVariantsTable(props: WideVariantsTableProps) {
  const { rows, text } = props;
  const intl = useIntl();

  const formatValue = useMemo(() => {
    const numberOfDecimals = getMaximumNumberOfDecimals(
      rows.map((x) => x.percentage ?? 0)
    );
    return (value: number) =>
      intl.formatPercentage(value, {
        minimumFractionDigits: numberOfDecimals,
        maximumFractionDigits: numberOfDecimals,
      });
  }, [intl, rows]);

  return (
    <StyledTable>
      <thead>
        <tr>
          {columnKeys.map((key) => (
            <HeaderCell key={key}>{text.kolommen[key]}</HeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.variant}>
            <VariantNameCell
              variant={row.variant}
              text={text}
              countryOfOrigin={row.countryOfOrigin}
            />
            <Cell>
              {isPresent(row.percentage) ? (
                <Box maxWidth="20em">
                  <PercentageBarWithNumber
                    percentage={row.percentage}
                    color={row.color}
                    formatValue={formatValue}
                  />
                </Box>
              ) : (
                <NoPercentageData />
              )}
            </Cell>
            <Cell>
              {isPresent(row.difference) &&
              isPresent(row.difference.difference) &&
              isPresent(row.difference.old_value) ? (
                <VariantDifference
                  value={row.difference as DifferenceDecimal}
                />
              ) : (
                '-'
              )}
            </Cell>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}
