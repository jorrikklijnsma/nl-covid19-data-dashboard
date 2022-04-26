import {
  GmCollectionVaccineCoveragePerAgeGroup,
  VrCollectionVaccineCoveragePerAgeGroup,
} from '@corona-dashboard/common';
import css from '@styled-system/css';
import { useState } from 'react';
import { hasValueAtKey } from 'ts-is-present';
import { Box } from '~/components/base';
import {
  ChartRegionControls,
  RegionControlOption,
} from '~/components/chart-region-controls';
import { DynamicChoropleth, ChoroplethLegenda, Markdown } from '~/components';
import { thresholds } from '~/components/choropleth/logic';
import { BoldText } from '~/components/typography';
import { gmCodesByVrCode } from '~/data';
import {
  CoverageKindProperty,
  VaccinationCoverageKindSelect,
} from '~/domain/vaccine/components/vaccination-coverage-kind-select';
import { ChoroplethTooltip } from '~/domain/vaccine/vaccine-coverage-choropleth-per-gm';
import { useIntl } from '~/intl';
import { SiteText } from '~/locale';
import { useReverseRouter } from '~/utils/use-reverse-router';
import { ChoroplethTwoColumnLayout } from './choropleth-two-column-layout';
import { TopicalSectionHeader } from './topical-section-header';
import { TopicalTile } from './topical-tile';
import {
  AgeGroup,
  AgeGroupSelect,
} from '~/domain/vaccine/components/age-group-select';

type DefaultProps = {
  title: string;
  content: string;
  defaultCoverageKind?: CoverageKindProperty;
  link?: {
    href: string;
    text: string;
  };
  text: SiteText['pages']['topicalPage']['shared'];
};

type GmCoverage = DefaultProps & {
  gmCode: string;
  data: { gm: GmCollectionVaccineCoveragePerAgeGroup[] };
};

const isGmCoverage = (
  value: VaccinationCoverageChoroplethProps
): value is GmCoverage => {
  return 'gmCode' in value;
};

type VrCoverage = DefaultProps & {
  vrCode: string;
  data: { gm: GmCollectionVaccineCoveragePerAgeGroup[] };
};

const isVrCoverage = (
  value: VaccinationCoverageChoroplethProps
): value is VrCoverage => {
  return 'vrCode' in value;
};

type NlCoverage = DefaultProps & {
  data: {
    gm: GmCollectionVaccineCoveragePerAgeGroup[];
    vr: VrCollectionVaccineCoveragePerAgeGroup[];
  };
};

const isNlCoverage = (
  value: VaccinationCoverageChoroplethProps
): value is NlCoverage => {
  return !('gmCode' in value) && !('vrCode' in value);
};

type VaccinationCoverageChoroplethProps = GmCoverage | VrCoverage | NlCoverage;

/**
 * This choropleth has three use cases:
 * 1. National Actueel page: has a toggle between Vr and Gm,
 * 2. Municipality Actueel page: no toggle, display the selected Gm and other Gm's in the safety region
 * 3. Safety Region Actueel page: no toggle, display all Gm's in the safety region
 */
export function VaccinationCoverageChoropleth(
  props: VaccinationCoverageChoroplethProps
) {
  const { text, defaultCoverageKind = 'fully_vaccinated_percentage' } = props;
  const reverseRouter = useReverseRouter();
  const { commonTexts } = useIntl();

  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup>('18+');
  const [selectedCoverageKind, setSelectedCoverageKind] =
    useState<CoverageKindProperty>(defaultCoverageKind);
  const [chartRegion, onChartRegionChange] =
    useState<RegionControlOption>('gm');

  const gmCodes = isVrCoverage(props)
    ? gmCodesByVrCode[props.vrCode]
    : undefined;
  const selectedGmCode = gmCodes ? gmCodes[0] : undefined;

  return (
    <TopicalTile>
      <TopicalSectionHeader title={props.title} link={props.link} text={text} />

      <ChoroplethTwoColumnLayout
        legendComponent={
          <ChoroplethLegenda
            thresholds={thresholds.gm.fully_vaccinated_percentage}
            title={
              commonTexts.choropleth.choropleth_vaccination_coverage.shared
                .legend_title
            }
          />
        }
      >
        <Box>
          {((isNlCoverage(props) && chartRegion === 'gm') ||
            isGmCoverage(props)) && (
            <DynamicChoropleth
              map={'gm'}
              accessibility={{ key: 'vaccine_coverage_nl_choropleth' }}
              data={props.data.gm.filter(
                hasValueAtKey('age_group_range', selectedAgeGroup)
              )}
              dataConfig={{
                metricName: 'vaccine_coverage_per_age_group',
                metricProperty: selectedCoverageKind,
              }}
              dataOptions={{
                isPercentage: true,
                highlightSelection: isGmCoverage(props),
                selectedCode: isGmCoverage(props) ? props.gmCode : undefined,
                getLink: reverseRouter.gm.vaccinaties,
                tooltipVariables: {
                  age_group: commonTexts.common.age_groups[selectedAgeGroup],
                },
              }}
              formatTooltip={(context) => (
                <ChoroplethTooltip
                  data={context}
                  percentageProps={[
                    'fully_vaccinated_percentage',
                    'has_one_shot_percentage',
                  ]}
                />
              )}
            />
          )}

          {isVrCoverage(props) && (
            <DynamicChoropleth
              map={'gm'}
              accessibility={{ key: 'vaccine_coverage_nl_choropleth' }}
              data={props.data.gm.filter(
                hasValueAtKey('age_group_range', selectedAgeGroup)
              )}
              dataConfig={{
                metricName: 'vaccine_coverage_per_age_group',
                metricProperty: selectedCoverageKind,
              }}
              dataOptions={{
                isPercentage: true,
                selectedCode: isVrCoverage(props) ? selectedGmCode : undefined,
                getLink: reverseRouter.gm.vaccinaties,
                tooltipVariables: {
                  age_group: commonTexts.common.age_groups[selectedAgeGroup],
                },
              }}
              formatTooltip={(context) => (
                <ChoroplethTooltip
                  data={context}
                  percentageProps={[
                    'fully_vaccinated_percentage',
                    'has_one_shot_percentage',
                  ]}
                />
              )}
            />
          )}

          {isNlCoverage(props) && chartRegion === 'vr' && (
            <DynamicChoropleth
              map={'vr'}
              accessibility={{ key: 'vaccine_coverage_nl_choropleth' }}
              data={props.data.vr.filter(
                hasValueAtKey('age_group_range', selectedAgeGroup)
              )}
              dataConfig={{
                metricName: 'vaccine_coverage_per_age_group',
                metricProperty: selectedCoverageKind,
              }}
              dataOptions={{
                isPercentage: true,
                getLink: (vrcode) => reverseRouter.actueel.vr(vrcode),
                tooltipVariables: {
                  age_group: commonTexts.common.age_groups[selectedAgeGroup],
                },
              }}
              formatTooltip={(context) => (
                <ChoroplethTooltip
                  data={context}
                  percentageProps={[
                    'fully_vaccinated_percentage',
                    'has_one_shot_percentage',
                  ]}
                />
              )}
            />
          )}
        </Box>

        <Box spacing={3}>
          <Markdown content={props.content} />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            as={'fieldset'}
          >
            <BoldText
              as="legend"
              css={css({
                flexBasis: '100%',
                mb: 2,
              })}
            >
              {
                commonTexts.choropleth.vaccination_coverage.shared
                  .dropdowns_title
              }
            </BoldText>

            <Box
              display="flex"
              width="100%"
              spacingHorizontal={{ xs: 2 }}
              flexWrap="wrap"
              flexDirection={{ _: 'column', xs: 'row' }}
            >
              <Box flex={1}>
                <AgeGroupSelect onChange={setSelectedAgeGroup} />
              </Box>

              <Box flex={1}>
                <VaccinationCoverageKindSelect
                  onChange={setSelectedCoverageKind}
                  initialValue={selectedCoverageKind}
                />
              </Box>
            </Box>
          </Box>
          {isNlCoverage(props) && (
            <Box
              display="flex"
              justifyContent={{ _: 'center', md: 'flex-start' }}
              mb={2}
            >
              <ChartRegionControls
                value={chartRegion}
                onChange={onChartRegionChange}
              />
            </Box>
          )}
        </Box>
      </ChoroplethTwoColumnLayout>
    </TopicalTile>
  );
}