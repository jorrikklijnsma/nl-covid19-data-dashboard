import { colors } from '@corona-dashboard/common';
import { DataConfig, OptionalDataConfig } from '..';
import { ChoroplethDataItem } from './types';
import {
  DEFAULT_HOVER_STROKE_WIDTH,
  DEFAULT_STROKE_WIDTH,
} from './use-feature-props';

/**
 * Returns a DataConfig instance based on the given OptionalDataConfig,
 * any undefined values are replaced by their defaults in the resulting object.
 *
 * @param partialDataConfig
 * @returns
 */
export function createDataConfig<T extends ChoroplethDataItem>(
  partialDataConfig: OptionalDataConfig<T>
) {
  if (partialDataConfig.metricName === 'veiligheidsregio') {
    return {
      metricName: 'veiligheidsregio',
      metricProperty: 'admissions_on_date_of_admission',
      areaStroke: colors.white,
      areaStrokeWidth: 1,
      hoverFill: colors.white,
      hoverStroke: colors.white,
      hoverStrokeWidth: 3,
      noDataFillColor: colors.gray2,
      highlightStroke: colors.black,
      highlightStrokeWidth: DEFAULT_HOVER_STROKE_WIDTH,
    } as DataConfig<T>;
  }
  return {
    metricName: partialDataConfig.metricName ?? '',
    metricProperty: partialDataConfig.metricProperty,
    noDataFillColor:
      partialDataConfig.noDataFillColor ?? colors.white,
    hoverFill: partialDataConfig.hoverFill ?? 'none',
    hoverStroke:
      partialDataConfig.hoverStroke ?? colors.white,
    hoverStrokeWidth:
      partialDataConfig.hoverStrokeWidth ?? DEFAULT_HOVER_STROKE_WIDTH,
    highlightStroke:
      partialDataConfig.highlightStroke ?? colors.white,
    highlightStrokeWidth:
      partialDataConfig.highlightStrokeWidth ?? DEFAULT_HOVER_STROKE_WIDTH,
    areaStroke: partialDataConfig.areaStroke ?? colors.white,
    areaStrokeWidth: partialDataConfig.areaStrokeWidth ?? DEFAULT_STROKE_WIDTH,
  } as DataConfig<T>;
}
