import PropTypes from 'prop-types';
import React, { RefObject, forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, SxProps, Typography } from '@mui/material';

const headerSX = {
    '& .MuiCardHeader-action': { mr: 0 }
};

export interface MainCardProps {
    border: boolean;
    boxShadow: boolean;
    children?: React.ReactNode;
    content: boolean;
    contentClass?: string;
    contentSX?: SxProps;
    darkTitle?: boolean;
    secondary?: React.ReactNode;
    shadow: string;
    sx?: SxProps;
    title?: string | React.ReactNode;
    elevation: number;
}

const MainCard = forwardRef<HTMLInputElement, MainCardProps>(
    (
        {
            border = true,
            boxShadow = false,
            children,
            content = true,
            contentClass = '',
            contentSX = {},
            darkTitle,
            secondary,
            shadow,
            sx = {},
            title,
            elevation,
            ...others
        }: MainCardProps,
        ref
    ) => {
        const theme = useTheme();

        return (
            <Card
                ref={ref}
                {...others}
                elevation={elevation}
                sx={{
                    border: border ? '1px solid' : 'none',
                    borderColor: theme.palette.primary[200] + 25,
                    position: 'relative',
                    ':hover': {
                        boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
                    },
                    ...sx
                }}
            >
                {title && (
                    <CardHeader
                        sx={headerSX}
                        title={darkTitle ? <Typography variant="h3">{title}</Typography> : title}
                        action={secondary}
                    />
                )}

                {title && <Divider />}

                {content && (
                    <CardContent sx={contentSX} className={contentClass}>
                        {children}
                    </CardContent>
                )}
                {!content && children}
            </Card>
        );
    }
);

export default MainCard;
