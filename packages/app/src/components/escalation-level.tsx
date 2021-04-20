import { Box } from '~/components/base';
import {
  EscalationLevelIcon,
  SizeVariants,
} from '~/components/escalation-level-icon';
import { Text } from '~/components/typography';
import { EscalationLevel } from '~/domain/restrictions/type';
import { useIntl } from '~/intl';
import { useEscalationColor } from '~/utils/use-escalation-color';

export type EscalationLevelProps = {
  level: EscalationLevel;
  fontSize?: number;
  useLevelColor?: boolean;
  size?: SizeVariants;
};

export type EscalationLevelString = '1' | '2' | '3' | '4';

export function EscalationLevelInfoLabel({
  level,
  size,
  fontSize = 2,
  useLevelColor = false,
}: EscalationLevelProps) {
  const escalationColor = useEscalationColor(level);
  const { siteText } = useIntl();

  const color = useLevelColor ? escalationColor : 'inherit';
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-start">
      <EscalationLevelIcon level={level} size={size} />
      <Text
        as="span"
        ml={2}
        fontWeight="bold"
        fontSize={fontSize}
        color={color}
      >
        {
          siteText.escalatie_niveau.types[
            level.toString() as EscalationLevelString
          ].titel
        }
      </Text>
    </Box>
  );
}

export function EscalationLevelInfo(props: EscalationLevelProps) {
  const { level } = props;
  const { siteText } = useIntl();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      mt={1}
    >
      <Text as="span" marginLeft="0 !important" marginRight=".5em !important">
        {siteText.escalatie_niveau.sidebar_label}
      </Text>
      <EscalationLevelInfoLabel level={level} />
    </Box>
  );
}