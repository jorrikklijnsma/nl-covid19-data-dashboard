import { Tile } from '~/components/tile';
import { Box, Spacer } from './base';
import { Metadata, MetadataProps } from './metadata';
import { Heading } from './typography';
import { Markdown } from '~/components/markdown';
interface KpiTileProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  metadata?: MetadataProps;
}

/**
 * A generic KPI tile which composes its value content using the children prop.
 * Description can be both plain text and html strings.
 */
export function KpiTile({
  title,
  description,
  children,
  metadata,
}: KpiTileProps) {
  return (
    <Tile height="100%">
      <Heading level={3}>{title}</Heading>
      <Box>{children}</Box>
      {description && (
        <Box maxWidth="400px" fontSize={2} lineHeight={2} mb={3}>
          <Markdown content={description} />
        </Box>
      )}
      {/* Using a spacer to push the footer down */}
      <Spacer m="auto" />
      {metadata && <Metadata {...metadata} isTileFooter />}
    </Tile>
  );
}