import { colors } from '@corona-dashboard/common';
import { MapType } from '~/components/choropleth/logic';

const positiveTestedThresholds: ChoroplethThresholdsValue[] = [
  {
    color: colors.gray2,
    threshold: 0,
  },
  {
    color: colors.scale.blue[0],
    threshold: 0.1,
  },
  {
    color: colors.scale.blue[1],
    threshold: 4,
  },
  {
    color: colors.scale.blue[2],
    threshold: 7,
  },
  {
    color: colors.scale.blue[3],
    threshold: 10,
  },
  {
    color: colors.scale.blue[4],
    threshold: 20,
  },
  {
    color: colors.scale.blue[5],
    threshold: 30,
  },
];

const hospitalAdmissionsThresholds: ChoroplethThresholdsValue[] = [
  {
    color: colors.gray2,
    threshold: 0,
  },
  {
    color: colors.scale.blue[0],
    threshold: 1,
  },
  {
    color: colors.scale.blue[1],
    threshold: 2,
  },
  {
    color: colors.scale.blue[2],
    threshold: 3,
  },
  {
    color: colors.scale.blue[3],
    threshold: 4,
  },
  {
    color: colors.scale.blue[4],
    threshold: 5,
  },
];

const elderlyAtHomeThresholds: ChoroplethThresholdsValue[] = [
  {
    color: colors.gray2,
    threshold: 0,
  },
  {
    color: colors.scale.blue[0],
    threshold: 1,
  },
  {
    color: colors.scale.blue[1],
    threshold: 5,
  },
  {
    color: colors.scale.blue[2],
    threshold: 8,
  },
  {
    color: colors.scale.blue[3],
    threshold: 11,
  },
  {
    color: colors.scale.blue[4],
    threshold: 21,
  },
  {
    color: colors.scale.blue[5],
    threshold: 31,
  },
];

/*
  This threshold contains a value of 0.001 because we need to display "Higher than 0 and lower than VALUE" based on the business rules.
  If we use two zero's in the threshold, the color will get overwritten and the color of the first zero won't be considered.
*/
const sewerThresholds: ChoroplethThresholdsValue[] = [
  {
    color: colors.gray2,
    threshold: 0,
  },
  {
    color: colors.scale.blueDetailed[0],
    threshold: 0.001,
  },
  {
    color: colors.scale.blueDetailed[1],
    threshold: 50,
  },
  {
    color: colors.scale.blueDetailed[2],
    threshold: 250,
  },
  {
    color: colors.scale.blueDetailed[3],
    threshold: 500,
  },
  {
    color: colors.scale.blueDetailed[4],
    threshold: 750,
  },
  {
    color: colors.scale.blueDetailed[5],
    threshold: 1000,
  },
  {
    color: colors.scale.blueDetailed[6],
    threshold: 1500,
  },
  {
    color: colors.scale.blueDetailed[8],
    threshold: 2000,
  },
];

const vrHospitalAdmissionsThresholds: ChoroplethThresholdsValue[] = [
  {
    color: colors.gray2,
    threshold: 0,
  },
  {
    color: colors.scale.blue[0],
    threshold: 1,
  },
  {
    color: colors.scale.blue[1],
    threshold: 5,
  },
  {
    color: colors.scale.blue[2],
    threshold: 10,
  },
  {
    color: colors.scale.blue[3],
    threshold: 15,
  },
  {
    color: colors.scale.blue[4],
    threshold: 20,
  },
];

const hospitalAdmissionsPer100000Thresholds: ChoroplethThresholdsValue[] = [
  {
    color: colors.gray2,
    threshold: 0,
  },
  {
    color: colors.scale.blue[0],
    threshold: 0.1,
  },
  {
    color: colors.scale.blue[1],
    threshold: 0.3,
  },
  {
    color: colors.scale.blue[2],
    threshold: 0.5,
  },
  {
    color: colors.scale.blue[3],
    threshold: 0.9,
  },
  {
    color: colors.scale.blue[4],
    threshold: 1.5,
  },
];

/*
  This threshold contains a value of 0.001 because we need to display "Higher than 0 and lower than VALUE" based on the business rules.
  If we use two zero's in the threshold, the color will get overwritten and the color of the first zero won't be considered. 
*/
const admissionsInTheLast7DaysPer100000: ChoroplethThresholdsValue[] = [
  {
    color: colors.gray2,
    threshold: 0,
  },
  {
    color: colors.scale.blueDetailed[0],
    threshold: 0.001,
  },
  {
    color: colors.scale.blueDetailed[1],
    threshold: 2.5,
  },
  {
    color: colors.scale.blueDetailed[2],
    threshold: 5,
  },
  {
    color: colors.scale.blueDetailed[3],
    threshold: 10,
  },
  {
    color: colors.scale.blueDetailed[4],
    threshold: 15,
  },
  {
    color: colors.scale.blueDetailed[5],
    threshold: 25,
  },
  {
    color: colors.scale.blueDetailed[6],
    threshold: 50,
  },
];

const infectedLocationsPercentageThresholds: ChoroplethThresholdsValue[] = [
  {
    color: colors.gray2,
    threshold: 0,
  },
  {
    color: colors.scale.blue[0],
    threshold: 0.1,
  },
  {
    color: colors.scale.blue[1],
    threshold: 10,
  },
  {
    color: colors.scale.blue[2],
    threshold: 20,
  },
  {
    color: colors.scale.blue[3],
    threshold: 30,
  },
  {
    color: colors.scale.blue[4],
    threshold: 40,
  },
];

const vaccineCoverageThresholds: ChoroplethThresholdsValue[] = [
  {
    color: colors.scale.blue[0],
    threshold: 0,
    label: '',
  },
  {
    color: colors.scale.blue[1],
    threshold: 10,
  },
  {
    color: colors.scale.blue[2],
    threshold: 30,
  },
  {
    color: colors.scale.blue[3],
    threshold: 40,
  },
  {
    color: colors.scale.blue[4],
    threshold: 50,
  },
  {
    color: colors.scale.blue[5],
    threshold: 70,
    label: '70+',
  },
];

const vaccineCoveragePercentageThresholds: ChoroplethThresholdsValue[] = [
  { color: colors.scale.blueDetailed[0], threshold: 0, label: '0%' },
  { color: colors.scale.blueDetailed[1], threshold: 50, label: '50%' },
  { color: colors.scale.blueDetailed[2], threshold: 60, label: '60%' },
  { color: colors.scale.blueDetailed[4], threshold: 70, label: '70%' },
  { color: colors.scale.blueDetailed[6], threshold: 80, label: '80%' },
  { color: colors.scale.blueDetailed[8], threshold: 90, label: '90%' },
];

const situationsThreshold: ChoroplethThresholdsValue[] = [
  {
    color: colors.scale.blueDetailed[0],
    threshold: 0,
    label: '0%',
  },
  {
    color: colors.scale.blueDetailed[1],
    threshold: 10,
    label: '10%',
  },
  {
    color: colors.scale.blueDetailed[2],
    threshold: 20,
    label: '20%',
  },
  {
    color: colors.scale.blueDetailed[3],
    threshold: 30,
    label: '30%',
  },
  {
    color: colors.scale.blueDetailed[4],
    threshold: 40,
    label: '40%',
  },
  {
    color: colors.scale.blueDetailed[5],
    threshold: 50,
    label: '50%',
  },
  {
    color: colors.scale.blueDetailed[6],
    threshold: 60,
    label: '60%',
  },
  {
    color: colors.scale.blueDetailed[7],
    threshold: 70,
    label: '70%',
  },
  {
    color: colors.scale.blueDetailed[8],
    threshold: 80,
    label: '80%',
  },
  {
    color: colors.scale.blueDetailed[9],
    threshold: 90,
    label: '90%',
    endLabel: '100%',
  },
];

const hasSufficientDataThresholds = [
  {
    color: colors.gray3,
    threshold: 0,
  },
  {
    color: colors.primary,
    threshold: 1,
  },
];

type Thresholds = Record<MapType, Record<string, ChoroplethThresholdsValue[]>>;

export const thresholds: Thresholds = {
  gm: {
    infected_per_100k: positiveTestedThresholds,
    admissions_on_date_of_admission_per_100000: hospitalAdmissionsPer100000Thresholds,
    admissions_in_the_last_7_days_per_100000: admissionsInTheLast7DaysPer100000,
    admissions_on_date_of_admission: hospitalAdmissionsThresholds,
    elderly_at_home: elderlyAtHomeThresholds,
    average: sewerThresholds,
    fully_vaccinated_percentage: vaccineCoveragePercentageThresholds,
    primary_series_percentage: vaccineCoveragePercentageThresholds,
    autumn_2022_vaccinated_percentage: vaccineCoveragePercentageThresholds,
    vaccinated_percentage_12_plus: vaccineCoveragePercentageThresholds,
    vaccinated_percentage_18_plus: vaccineCoveragePercentageThresholds,
    vaccinated_percentage_60_plus: vaccineCoveragePercentageThresholds,
  },
  vr: {
    admissions_on_date_of_admission: vrHospitalAdmissionsThresholds,
    infected_locations_percentage: infectedLocationsPercentageThresholds,
    positive_tested_daily_per_100k: elderlyAtHomeThresholds,
    coverage_percentage: vaccineCoverageThresholds,
    has_sufficient_data: hasSufficientDataThresholds,
    home_and_visits: situationsThreshold,
    work: situationsThreshold,
    school_and_day_care: situationsThreshold,
    health_care: situationsThreshold,
    gathering: situationsThreshold,
    travel: situationsThreshold,
    hospitality: situationsThreshold,
    fully_vaccinated_percentage: vaccineCoveragePercentageThresholds,
    autumn_2022_vaccinated_percentage: vaccineCoveragePercentageThresholds,
    vaccinated_percentage_12_plus: vaccineCoveragePercentageThresholds,
    vaccinated_percentage_18_plus: vaccineCoveragePercentageThresholds,
    vaccinated_percentage_60_plus: vaccineCoveragePercentageThresholds,
    other: situationsThreshold,
  },
};

export type ChoroplethThresholdsValue<T extends number = number> = {
  color: string;
  threshold: T;
  label?: string;
  /**
   * Optionally define the label which explains the "end" of a threshold
   */
  endLabel?: string;
};
