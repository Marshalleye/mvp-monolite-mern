import React, { ReactNode } from 'react';
import { Grid, GridProps } from '@mantine/core';

interface ResponsiveGridProps extends GridProps {
  children: ReactNode;
  telegramCols?: number;
  mobileCols?: number;
  tabletCols?: number;
  desktopCols?: number;
}

export function ResponsiveGrid({
  children,
  telegramCols = 1,
  mobileCols = 1, 
  tabletCols = 2,
  desktopCols = 3,
  ...props
}: ResponsiveGridProps) {
  return (
    <Grid {...props}>
      {React.Children.map(children, (child, index) => (
        <Grid.Col
          key={index}
          span={{
            base: telegramCols,
            xs: mobileCols,
            sm: mobileCols,
            md: tabletCols,
            lg: desktopCols,
            xl: desktopCols,
          }}
        >
          {child}
        </Grid.Col>
      ))}
    </Grid>
  );
}