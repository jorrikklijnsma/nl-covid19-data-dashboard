import { FeatureCollection, MultiPolygon } from 'geojson';
import { Municipalities, Regions } from '~/types/data';

export type MetricKeys<T> = keyof Omit<
  T,
  'last_generated' | 'proto_name' | 'name' | 'code'
>;

type TMetricHolder<T> = keyof Omit<
  T,
  'last_generated' | 'proto_name' | 'name' | 'code'
>;

export type TMunicipalityMetricName = TMetricHolder<
  Omit<Municipalities, 'deceased' | 'hospital_admissions'>
>;

export type TRegionMetricName = TMetricHolder<
  Omit<Regions, 'deceased' | 'hospital_admissions'>
>;

export interface SafetyRegionProperties {
  vrcode: string;
  vrname: string;
}
export interface MunicipalityProperties {
  gemnaam: string;
  gemcode: string;
  gmcode: string;
}

export type MunicipalGeoJSON = FeatureCollection<
  MultiPolygon,
  MunicipalityProperties
>;

export type RegionGeoJSON = FeatureCollection<
  MultiPolygon,
  SafetyRegionProperties
>;

export type ChoroplethThresholdsValue<T extends number = number> = {
  color: string;
  threshold: T;
};

export type Dictionary<T> = Partial<Record<string, T>>;
